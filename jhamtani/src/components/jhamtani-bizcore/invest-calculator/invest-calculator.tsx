"use client";

import { useState, useId } from "react";
import { motion } from "framer-motion";
import { TrendingUp, IndianRupee, PieChart, Sparkles } from "lucide-react";

type InvestmentType = "Monthly" | "One-Time";

export default function InvestCalculator() {
  const componentId = useId();
  // State variables with intuitive defaults
  const [investmentAmount, setInvestmentAmount] = useState<number>(50000); // 50k monthly or lumpsum
  const [investmentType, setInvestmentType] = useState<InvestmentType>("Monthly");
  const [investmentPeriod, setInvestmentPeriod] = useState<number>(15); // 15 years
  const [annualReturns, setAnnualReturns] = useState<number>(14); // 14% annual return
  const [adjustInflation, setAdjustInflation] = useState<boolean>(false);
  const [inflationRate, setInflationRate] = useState<number>(6); // 6% annual inflation

  // Indian Currency Number Formatter
  const formatIndianCurrency = (num: number): string => {
    if (isNaN(num) || num < 0) return "₹ 0";
    const rounded = Math.round(num);
    const numStr = rounded.toString();
    
    if (numStr.length <= 3) {
      return `₹ ${numStr}`;
    }
    
    const lastThree = numStr.substring(numStr.length - 3);
    const otherNumbers = numStr.substring(0, numStr.length - 3);
    const formattedOther = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
    
    return `₹ ${formattedOther},${lastThree}`;
  };

  // Compact formatter for large values (Lakhs / Crores)
  const formatCompact = (num: number): string => {
    if (isNaN(num) || num < 0) return "₹ 0";
    if (num >= 10000000) {
      return `₹ ${(num / 10000000).toFixed(2)} Cr`;
    }
    if (num >= 100000) {
      return `₹ ${(num / 100000).toFixed(2)} Lac`;
    }
    return formatIndianCurrency(num);
  };

  // Calculate Returns
  const calculateResults = () => {
    let effectiveRate = annualReturns;
    if (adjustInflation) {
      // Real rate of return formula: ((1 + nominal) / (1 + inflation)) - 1
      effectiveRate = ((1 + annualReturns / 100) / (1 + inflationRate / 100) - 1) * 100;
    }

    const ratePerMonth = effectiveRate / 12 / 100;
    const totalMonths = investmentPeriod * 12;

    let totalInvested = 0;
    let maturityValue = 0;

    if (investmentType === "Monthly") {
      totalInvested = investmentAmount * totalMonths;
      if (ratePerMonth === 0) {
        maturityValue = totalInvested;
      } else {
        // Future Value of SIP: P * [ ( (1 + r)^n - 1 ) / r ] * (1 + r)
        maturityValue =
          investmentAmount *
          ((Math.pow(1 + ratePerMonth, totalMonths) - 1) / ratePerMonth) *
          (1 + ratePerMonth);
      }
    } else {
      // One-Time / Lumpsum: P * (1 + r)^t
      totalInvested = investmentAmount;
      maturityValue = investmentAmount * Math.pow(1 + effectiveRate / 100, investmentPeriod);
    }

    const profitEarned = Math.max(0, maturityValue - totalInvested);

    return {
      totalInvested: Math.round(totalInvested),
      profitEarned: Math.round(profitEarned),
      maturityValue: Math.round(maturityValue),
    };
  };

  const { totalInvested, profitEarned, maturityValue } = calculateResults();

  // Percentage shares for Donut Chart
  const totalPortion = totalInvested + profitEarned;
  const investedPercent = totalPortion > 0 ? (totalInvested / totalPortion) * 100 : 50;
  const profitPercent = totalPortion > 0 ? (profitEarned / totalPortion) * 100 : 50;

  // SVG Donut calculation
  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  const investedStrokeDash = (investedPercent / 100) * circumference;
  const profitStrokeDash = (profitPercent / 100) * circumference;

  const handleEnquiry = () => {
    const event = new CustomEvent("open-enquiry", {
      detail: { project: `Jhamtani Bizcore (Investment Calculator - ${formatCompact(investmentAmount)} / ${investmentPeriod} Yrs)` },
    });
    window.dispatchEvent(event);
  };

  return (
    <section className="relative w-full bg-[#FAF7F4] py-20 lg:py-28 px-6 sm:px-12 lg:px-16 text-zinc-900 select-none overflow-hidden border-y border-zinc-200/70">
      {/* Custom Slider CSS for luxury gold styling */}
      <style dangerouslySetInnerHTML={{__html: `
        .luxury-range-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 6px;
          border-radius: 9999px;
          background: #D9D2C7;
          outline: none;
          transition: background 0.3s;
        }
        .luxury-range-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 3px solid #A0725B;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(160, 114, 91, 0.35);
          transition: transform 0.15s ease, background 0.2s;
        }
        .luxury-range-slider::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          background: #FAF7F4;
        }
        .luxury-range-slider::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 3px solid #A0725B;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(160, 114, 91, 0.35);
        }
      `}} />

      <div className="max-w-6xl mx-auto">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A0725B]/10 text-[#A0725B] text-xs font-semibold tracking-widest uppercase mb-4"
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Yield & Wealth Estimator</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif font-light text-[34px] sm:text-[44px] lg:text-[50px] leading-tight text-[#A0725B] tracking-wide uppercase"
          >
            Investment Calculator
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-xs sm:text-sm text-zinc-600 font-light mt-3 max-w-xl mx-auto leading-relaxed"
          >
            Forecast potential returns and capital appreciation on serviced studio assets at Jhamtani Bizcore, Koregaon Park NX.
          </motion.p>
        </div>

        {/* Main Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-md border border-zinc-200/90 shadow-xl shadow-amber-950/5 p-6 sm:p-10 lg:p-14 rounded-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Sliders & Controls (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col space-y-7 sm:space-y-8">
              
              {/* Field 1: Investment Amount */}
              <div className="flex flex-col space-y-3">
                <div className="flex justify-between items-center">
                  <label htmlFor={`${componentId}-investment-amount`} className="font-sans text-xs sm:text-[13px] font-semibold text-zinc-800 tracking-wider uppercase flex items-center gap-1.5">
                    <span>Investment Amount (Rs.):</span>
                    <span className="text-[#A0725B]">*</span>
                  </label>
                  <div className="flex items-center border border-[#A0725B]/60 bg-[#FAF7F4] px-3.5 py-1.5 rounded-sm shadow-inner min-w-[130px] sm:min-w-[150px] justify-between">
                    <span className="text-xs text-[#A0725B] font-semibold mr-1">₹</span>
                    <input
                      id={`${componentId}-investment-amount`}
                      type="number"
                      value={investmentAmount || ""}
                      onChange={(e) => setInvestmentAmount(Math.max(0, Number(e.target.value)))}
                      className="w-full text-right bg-transparent text-sm sm:text-base font-semibold text-zinc-900 outline-none font-sans"
                    />
                  </div>
                </div>
                {/* Range Slider */}
                <input
                  type="range"
                  min={5000}
                  max={investmentType === "Monthly" ? 1000000 : 20000000}
                  step={investmentType === "Monthly" ? 5000 : 50000}
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                  className="luxury-range-slider cursor-pointer"
                  aria-label="Investment Amount"
                />
                <div className="flex justify-between text-[11px] text-zinc-400 font-sans">
                  <span>{investmentType === "Monthly" ? "₹ 5,000 / mo" : "₹ 50,000"}</span>
                  <span className="text-[#A0725B] font-medium">{formatCompact(investmentAmount)}</span>
                  <span>{investmentType === "Monthly" ? "₹ 10 Lac / mo" : "₹ 2 Cr"}</span>
                </div>
              </div>

              {/* Field 2: Investment Type */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 border-t border-zinc-100">
                <label className="font-sans text-xs sm:text-[13px] font-semibold text-zinc-800 tracking-wider uppercase">
                  Investment Type: <span className="text-[#A0725B]">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2 border border-zinc-200 bg-[#FAF7F4] p-1 rounded-sm w-full sm:w-[260px]">
                  <button
                    type="button"
                    onClick={() => {
                      setInvestmentType("Monthly");
                      if (investmentAmount > 1000000) setInvestmentAmount(50000);
                    }}
                    className={`py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-200 rounded-sm cursor-pointer ${
                      investmentType === "Monthly"
                        ? "bg-[#A0725B] text-white shadow-sm"
                        : "text-zinc-600 hover:text-zinc-900"
                    }`}
                  >
                    Monthly (SIP)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setInvestmentType("One-Time");
                      if (investmentAmount < 100000) setInvestmentAmount(3000000);
                    }}
                    className={`py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-200 rounded-sm cursor-pointer ${
                      investmentType === "One-Time"
                        ? "bg-[#A0725B] text-white shadow-sm"
                        : "text-zinc-600 hover:text-zinc-900"
                    }`}
                  >
                    One-Time
                  </button>
                </div>
              </div>

              {/* Field 3: Investment Period */}
              <div className="flex flex-col space-y-3 pt-1 border-t border-zinc-100">
                <div className="flex justify-between items-center">
                  <label htmlFor={`${componentId}-investment-period`} className="font-sans text-xs sm:text-[13px] font-semibold text-zinc-800 tracking-wider uppercase">
                    Investment Period (Years): <span className="text-[#A0725B]">*</span>
                  </label>
                  <div className="flex items-center border border-[#A0725B]/60 bg-[#FAF7F4] px-3.5 py-1.5 rounded-sm shadow-inner min-w-[90px] sm:min-w-[100px] justify-between">
                    <input
                      id={`${componentId}-investment-period`}
                      type="number"
                      min={1}
                      max={35}
                      value={investmentPeriod || ""}
                      onChange={(e) => setInvestmentPeriod(Math.min(35, Math.max(1, Number(e.target.value))))}
                      className="w-full text-right bg-transparent text-sm sm:text-base font-semibold text-zinc-900 outline-none font-sans"
                    />
                    <span className="text-xs text-zinc-500 font-medium ml-1">Yrs</span>
                  </div>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={investmentPeriod}
                  onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
                  className="luxury-range-slider cursor-pointer"
                  aria-label="Investment Period"
                />
                <div className="flex justify-between text-[11px] text-zinc-400 font-sans">
                  <span>1 Year</span>
                  <span className="text-[#A0725B] font-medium">{investmentPeriod} Years</span>
                  <span>30 Years</span>
                </div>
              </div>

              {/* Field 4: Expected Annual Returns */}
              <div className="flex flex-col space-y-3 pt-1 border-t border-zinc-100">
                <div className="flex justify-between items-center">
                  <label htmlFor={`${componentId}-annual-returns`} className="font-sans text-xs sm:text-[13px] font-semibold text-zinc-800 tracking-wider uppercase">
                    Expected Annual Returns (%): <span className="text-[#A0725B]">*</span>
                  </label>
                  <div className="flex items-center border border-[#A0725B]/60 bg-[#FAF7F4] px-3.5 py-1.5 rounded-sm shadow-inner min-w-[90px] sm:min-w-[100px] justify-between">
                    <input
                      id={`${componentId}-annual-returns`}
                      type="number"
                      min={1}
                      max={35}
                      value={annualReturns || ""}
                      onChange={(e) => setAnnualReturns(Math.min(35, Math.max(1, Number(e.target.value))))}
                      className="w-full text-right bg-transparent text-sm sm:text-base font-semibold text-zinc-900 outline-none font-sans"
                    />
                    <span className="text-xs text-[#A0725B] font-bold ml-1">%</span>
                  </div>
                </div>
                <input
                  type="range"
                  min={4}
                  max={30}
                  step={0.5}
                  value={annualReturns}
                  onChange={(e) => setAnnualReturns(Number(e.target.value))}
                  className="luxury-range-slider cursor-pointer"
                  aria-label="Expected Annual Returns"
                />
                <div className="flex justify-between text-[11px] text-zinc-400 font-sans">
                  <span>4 %</span>
                  <span className="text-[#A0725B] font-medium">{annualReturns} % p.a.</span>
                  <span>30 %</span>
                </div>
              </div>

              {/* Field 5: Adjust for Inflation */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 border-t border-zinc-100">
                <label className="font-sans text-xs sm:text-[13px] font-semibold text-zinc-800 tracking-wider uppercase">
                  Adjust for Inflation ?
                </label>
                <div className="flex items-center gap-3">
                  {adjustInflation && (
                    <div className="flex items-center border border-zinc-200 bg-[#FAF7F4] px-2.5 py-1 rounded-sm text-xs">
                      <span className="text-zinc-500 mr-1.5">Rate:</span>
                      <input
                        type="number"
                        min={1}
                        max={15}
                        value={inflationRate}
                        onChange={(e) => setInflationRate(Number(e.target.value))}
                        className="w-8 text-right bg-transparent font-semibold text-zinc-900 outline-none"
                      />
                      <span className="text-zinc-600 ml-0.5">%</span>
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => setAdjustInflation(!adjustInflation)}
                    className={`px-4 py-2 border text-xs font-semibold tracking-wider uppercase rounded-sm transition-all duration-200 cursor-pointer ${
                      adjustInflation
                        ? "bg-[#191F26] border-[#191F26] text-white"
                        : "border-zinc-300 text-zinc-600 bg-[#FAF7F4] hover:border-[#A0725B] hover:text-[#A0725B]"
                    }`}
                  >
                    {adjustInflation ? `Inflation (${inflationRate}%)` : "No Inflation"}
                  </button>
                </div>
              </div>

            </div>

            {/* Right Column: Donut Chart & Visual Breakdown (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 bg-[#FAF7F4] border border-zinc-200/80 rounded-sm">
              
              {/* Legend Badges */}
              <div className="flex items-center justify-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-sm bg-[#94A9B8]" />
                  <span className="text-xs font-sans text-zinc-700 font-medium">Invested Amount</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-sm bg-[#A0725B]" />
                  <span className="text-xs font-sans text-zinc-700 font-medium">Profit Earned</span>
                </div>
              </div>

              {/* Dynamic Donut Chart */}
              <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 240 240">
                  {/* Background Track */}
                  <circle
                    cx="120"
                    cy="120"
                    r={radius}
                    fill="transparent"
                    stroke="#EBE5DC"
                    strokeWidth="26"
                  />

                  {/* Invested Amount Arc (Blue-Grey #94A9B8) */}
                  <circle
                    cx="120"
                    cy="120"
                    r={radius}
                    fill="transparent"
                    stroke="#94A9B8"
                    strokeWidth="26"
                    strokeDasharray={`${investedStrokeDash} ${circumference}`}
                    strokeDashoffset="0"
                    className="transition-all duration-700 ease-out"
                  />

                  {/* Profit Earned Arc (Brand Gold #A0725B) */}
                  <circle
                    cx="120"
                    cy="120"
                    r={radius}
                    fill="transparent"
                    stroke="#A0725B"
                    strokeWidth="26"
                    strokeDasharray={`${profitStrokeDash} ${circumference}`}
                    strokeDashoffset={-investedStrokeDash}
                    className="transition-all duration-700 ease-out"
                  />
                </svg>

                {/* Donut Center Display */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <span className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-widest text-zinc-400">
                    Total Value
                  </span>
                  <span className="font-serif text-[20px] sm:text-[24px] font-semibold text-zinc-900 leading-tight mt-0.5">
                    {formatCompact(maturityValue)}
                  </span>
                  <span className="text-[11px] font-sans text-[#A0725B] font-medium mt-1">
                    {profitPercent.toFixed(1)}% Growth
                  </span>
                </div>
              </div>

              {/* Key Ratio Indicators */}
              <div className="w-full grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-zinc-200/70 text-center">
                <div className="flex flex-col">
                  <span className="text-[10px] font-sans uppercase tracking-wider text-zinc-500">Invested Ratio</span>
                  <span className="text-sm font-semibold text-zinc-800 font-sans">{investedPercent.toFixed(1)}%</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-sans uppercase tracking-wider text-zinc-500">Wealth Gain Ratio</span>
                  <span className="text-sm font-semibold text-[#A0725B] font-sans">{profitPercent.toFixed(1)}%</span>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Results Banner */}
          <div className="mt-10 sm:mt-12 pt-8 border-t border-zinc-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center bg-[#FAF7F4] border border-[#A0725B]/25 p-6 sm:p-8 rounded-sm">
              
              {/* Expected Total Amount */}
              <div className="flex flex-col text-left">
                <span className="text-xs font-sans font-semibold tracking-wider text-zinc-500 uppercase">
                  Expected Maturity Amount: <span className="text-[#A0725B]">*</span>
                </span>
                <span className="font-serif text-[22px] sm:text-[26px] lg:text-[30px] font-normal text-[#A0725B] leading-tight mt-1">
                  {formatIndianCurrency(maturityValue)}
                </span>
              </div>

              {/* Amount Invested */}
              <div className="flex flex-col text-left md:border-l md:border-zinc-200/80 md:pl-8">
                <span className="text-xs font-sans font-semibold tracking-wider text-zinc-500 uppercase">
                  Amount Invested: <span className="text-[#A0725B]">*</span>
                </span>
                <span className="font-serif text-[20px] sm:text-[24px] lg:text-[26px] font-normal text-zinc-800 leading-tight mt-1">
                  {formatIndianCurrency(totalInvested)}
                </span>
              </div>

              {/* Profit Earned */}
              <div className="flex flex-col text-left md:border-l md:border-zinc-200/80 md:pl-8">
                <span className="text-xs font-sans font-semibold tracking-wider text-zinc-500 uppercase">
                  Profit Earned: <span className="text-[#A0725B]">*</span>
                </span>
                <span className="font-serif text-[20px] sm:text-[24px] lg:text-[26px] font-normal text-emerald-700 leading-tight mt-1">
                  {formatIndianCurrency(profitEarned)}
                </span>
              </div>

            </div>

            {/* Action CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[11px] sm:text-xs text-zinc-400 font-light max-w-lg text-center sm:text-left leading-relaxed">
                * Projections are based on mathematical compounding calculations for illustrative purposes. Actual returns depend on market yields and property occupancy.
              </p>
              
              <button
                onClick={handleEnquiry}
                className="w-full sm:w-auto border border-[#A0725B] bg-[#A0725B] text-white hover:bg-zinc-900 hover:border-zinc-900 rounded-full px-8 py-3 text-xs sm:text-sm tracking-widest uppercase font-semibold transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer whitespace-nowrap"
              >
                Discuss Investment Plan
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
