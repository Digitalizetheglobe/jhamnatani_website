"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Phone,
  Building2,
  Calendar,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Bot,
  User,
  RotateCcw,
} from "lucide-react";
import Link from "next/link";

// Custom WhatsApp SVG Icon
const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
  >
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
  </svg>
);

interface ChatAction {
  label: string;
  type: "enquiry" | "link" | "whatsapp" | "call";
  href?: string;
  project?: string;
}

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
  actions?: ChatAction[];
}

const QUICK_PROMPTS = [
  "🏙️ Explore Projects",
  "📍 Locations & Hotspots",
  "💰 Pricing & Floor Plans",
  "📅 Book Private Site Visit",
  "📄 Download Brochures",
  "💬 WhatsApp Advisor",
];

const getCurrentTime = () => {
  const d = new Date();
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

interface RealTimeChatAssistProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: (project?: string, message?: string) => void;
}

export default function RealTimeChatAssist({
  isOpen,
  onClose,
  onOpenEnquiry,
}: RealTimeChatAssistProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init-1",
      sender: "bot",
      text: "Namaste! Welcome to Jhamtani. Crafting Skylines with over 45 lakh sq. ft. of luxury residential & commercial landmarks across Pune.",
      time: getCurrentTime(),
    },
    {
      id: "init-2",
      sender: "bot",
      text: "I am your Real-Time Luxury Concierge. How may I assist your property search today?",
      time: getCurrentTime(),
      actions: [
        { label: "View Projects", type: "link", href: "/projects" },
        { label: "Book Site Visit", type: "enquiry" },
        { label: "WhatsApp Chat", type: "whatsapp" },
      ],
    },
  ]);

  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 150);
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen, messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    const userMsg: Message = {
      id: "user-" + Date.now(),
      sender: "user",
      text,
      time: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateBotResponse(text);
      setIsTyping(false);
      setMessages((prev) => [...prev, reply]);
    }, 750);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "init-1",
        sender: "bot",
        text: "Namaste! Welcome back to Jhamtani. How may I assist your property search today?",
        time: getCurrentTime(),
        actions: [
          { label: "View Projects", type: "link", href: "/projects" },
          { label: "Book Site Visit", type: "enquiry" },
          { label: "WhatsApp Chat", type: "whatsapp" },
        ],
      },
    ]);
  };

  const generateBotResponse = (query: string): Message => {
    const q = query.toLowerCase();

    // 1. ACE Abundance / Mundhwa
    if (q.includes("abundance") || (q.includes("mundhwa") && !q.includes("elevate"))) {
      return {
        id: "bot-" + Date.now(),
        sender: "bot",
        text: "Jhamtani Abundance in Mundhwa (near Koregaon Park NX) offers signature 2 & 3 BHK luxury residences featuring private sky terraces, infinity pool, and world-class leisure amenities. MahaRERA Registered: P52100052328.",
        time: getCurrentTime(),
        actions: [
          { label: "Explore Ace Abundance", type: "link", href: "/ace-abundance" },
          { label: "Enquire for Abundance", type: "enquiry", project: "Jhamtani Abundance" },
          { label: "WhatsApp Advisor", type: "whatsapp" },
        ],
      };
    }

    // 2. ACE Villas
    if (q.includes("villa") || q.includes("villas")) {
      return {
        id: "bot-" + Date.now(),
        sender: "bot",
        text: "ACE Villas at Koregaon Park NX offers bespoke ultra-luxury estate villas with private plunge pools, private gardens, and grand double-height living spaces. MahaRERA: P52100055272.",
        time: getCurrentTime(),
        actions: [
          { label: "Explore ACE Villas", type: "link", href: "/ace-villas" },
          { label: "Schedule Villa Tour", type: "enquiry", project: "ACE Villas" },
          { label: "WhatsApp Details", type: "whatsapp" },
        ],
      };
    }

    // 3. ACE Atmosphere / Ravet
    if (q.includes("atmosphere") || (q.includes("ravet") && !q.includes("aster"))) {
      return {
        id: "bot-" + Date.now(),
        sender: "bot",
        text: "ACE Atmosphere in Upper Ravet, PCMC is a landmark 24×7 all-day lifestyle development featuring premium 2 & 3 BHK residences, multi-tier security, and 40+ resort-style amenities. MahaRERA: P52100022730.",
        time: getCurrentTime(),
        actions: [
          { label: "Explore ACE Atmosphere", type: "link", href: "/ace-atmosphere" },
          { label: "Request Price Sheet", type: "enquiry", project: "ACE Atmosphere" },
        ],
      };
    }

    // 4. ACE Ayodhya / Thergaon
    if (q.includes("ayodha") || q.includes("ayodhya") || q.includes("thergaon")) {
      return {
        id: "bot-" + Date.now(),
        sender: "bot",
        text: "ACE Ayodhya in Thergaon (PCMC) offers thoughtfully designed 2 & 3 BHK residences with seamless connectivity to Hinjawadi IT Park, Wakad, and the expressway. MahaRERA: P52100049752.",
        time: getCurrentTime(),
        actions: [
          { label: "Explore ACE Ayodhya", type: "link", href: "/ace-ayodhya" },
          { label: "Request Callback", type: "enquiry", project: "Ace Ayodhya" },
        ],
      };
    }

    // 5. ACE Aster
    if (q.includes("aster")) {
      return {
        id: "bot-" + Date.now(),
        sender: "bot",
        text: "ACE Aster in Ravet offers contemporary 2 & 3 BHK family homes with clubhouse, sports courts, and rapid connectivity to Pune-Mumbai expressway. MahaRERA: P52100023023.",
        time: getCurrentTime(),
        actions: [
          { label: "Explore ACE Aster", type: "link", href: "/ace-aster" },
          { label: "Enquire Now", type: "enquiry", project: "ACE Aster" },
        ],
      };
    }

    // 6. Bizcore / Elevate (Studio / Commercial)
    if (q.includes("bizcore") || q.includes("studio") || q.includes("elevate") || q.includes("commercial") || q.includes("spacebiz") || q.includes("office")) {
      return {
        id: "bot-" + Date.now(),
        sender: "bot",
        text: "We offer high-ROI Commercial & Studio investments:\n• Jhamtani Bizcore (Koregaon Park NX) – Serviced Studios & Retail Hub\n• Jhamtani Elevate (Mundhwa) – Studio Residences\n• Jhamtani SpaceBiz (Baner) – Grade-A Business & Office Spaces.",
        time: getCurrentTime(),
        actions: [
          { label: "Jhamtani Bizcore", type: "link", href: "/jhamtani-bizcore" },
          { label: "Jhamtani Elevate", type: "link", href: "/jhamtani-elevate" },
          { label: "Jhamtani SpaceBiz", type: "link", href: "/jhamtani-spacebiz" },
          { label: "Request Commercial Brochure", type: "enquiry" },
        ],
      };
    }

    // 7. Pricing / Cost / Budget / 2 BHK / 3 BHK
    if (q.includes("price") || q.includes("cost") || q.includes("bhk") || q.includes("budget") || q.includes("rate") || q.includes("pricing") || q.includes("quote")) {
      return {
        id: "bot-" + Date.now(),
        sender: "bot",
        text: "Our premium 2 BHK, 3 BHK, 4 BHK residences and luxury villas are competitively priced across Pune's prime addresses. Share your contact details to receive customized unit cost-sheets and payment plans.",
        time: getCurrentTime(),
        actions: [
          { label: "Request Instant Cost Sheet", type: "enquiry" },
          { label: "Chat on WhatsApp", type: "whatsapp" },
          { label: "Call Sales: +91 7447447669", type: "call" },
        ],
      };
    }

    // 8. Site visit / Tour / Appointment
    if (q.includes("visit") || q.includes("tour") || q.includes("schedule") || q.includes("appointment") || q.includes("sample") || q.includes("see")) {
      return {
        id: "bot-" + Date.now(),
        sender: "bot",
        text: "We would be honored to host you for an exclusive private site tour and show-apartment experience. Our relationship managers are available all 7 days.",
        time: getCurrentTime(),
        actions: [
          { label: "Book Site Visit Now", type: "enquiry", project: "" },
          { label: "Instant WhatsApp Booking", type: "whatsapp" },
        ],
      };
    }

    // 9. Brochure / PDF
    if (q.includes("brochure") || q.includes("pdf") || q.includes("download") || q.includes("catalogue") || q.includes("floor plan") || q.includes("layout")) {
      return {
        id: "bot-" + Date.now(),
        sender: "bot",
        text: "You can download official brochures, floor plans, and master layouts directly from our Brochure Portal or request them on WhatsApp.",
        time: getCurrentTime(),
        actions: [
          { label: "Download Brochures", type: "link", href: "/download-brochure" },
          { label: "Send to my WhatsApp", type: "whatsapp" },
        ],
      };
    }

    // 10. Contact / Phone / Head Office
    if (q.includes("contact") || q.includes("phone") || q.includes("call") || q.includes("email") || q.includes("office") || q.includes("address") || q.includes("location")) {
      return {
        id: "bot-" + Date.now(),
        sender: "bot",
        text: "Here is our direct contact advisory:\n📞 Phone: +91 7 447 447669\n✉️ Email: enquiry@jhamtani.com\n🏢 Head Office: Jhamtani, Balewadi High Street, Pune.",
        time: getCurrentTime(),
        actions: [
          { label: "Call +91 7447447669", type: "call" },
          { label: "Chat on WhatsApp", type: "whatsapp" },
          { label: "Request Callback", type: "enquiry" },
        ],
      };
    }

    // 11. XO Series
    if (q.includes("xo") || q.includes("luxury")) {
      return {
        id: "bot-" + Date.now(),
        sender: "bot",
        text: "The XO Series represents the pinnacle of Jhamtani luxury — featuring iconic projects Ace Abundance and Ace Villas, redefining ultra-luxury living in Pune.",
        time: getCurrentTime(),
        actions: [
          { label: "Explore XO Series", type: "link", href: "/xosignatureseries" },
          { label: "Request Private VIP Tour", type: "enquiry" },
        ],
      };
    }

    // Default intelligent fallback
    return {
      id: "bot-" + Date.now(),
      sender: "bot",
      text: "Thank you for reaching out! A dedicated Jhamtani relationship manager is available right now to assist you with floor plans, pricing, site visits, and personalized recommendations.",
      time: getCurrentTime(),
      actions: [
        { label: "Request Callback", type: "enquiry" },
        { label: "Chat on WhatsApp", type: "whatsapp" },
        { label: "Explore All Projects", type: "link", href: "/projects" },
      ],
    };
  };

  const handleActionClick = (action: ChatAction) => {
    if (action.type === "enquiry") {
      onClose();
      onOpenEnquiry(action.project || "");
    } else if (action.type === "whatsapp") {
      const msg = action.project
        ? `Hi Jhamtani, I am interested in ${action.project}. Please share details.`
        : "Hi Jhamtani, I would like more information on your projects.";
      window.open(
        `https://wa.me/917447447669?text=${encodeURIComponent(msg)}`,
        "_blank"
      );
    } else if (action.type === "call") {
      window.location.href = "tel:+917447447669";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 25, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-24 right-4 sm:right-6 z-[990] w-[92vw] sm:w-[410px] h-[560px] max-h-[82vh] bg-[#121417] text-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.85)] border border-[#A0725B]/35 flex flex-col overflow-hidden font-sans backdrop-blur-xl"
        >
          {/* 1. LUXURY HEADER */}
          <div className="bg-gradient-to-r from-[#17191E] via-[#1F1E22] to-[#17191E] border-b border-[#A0725B]/25 p-4 sm:p-4.5 flex items-center justify-between relative shadow-md">
            <div className="flex items-center gap-3">
              {/* Gold Avatar */}
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#A0725B] to-[#6A4635] flex items-center justify-center border border-[#C5A880]/60 shadow-md">
                  <span className="font-serif font-bold text-white text-base">J</span>
                </div>
                {/* Live Pulsing Dot */}
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#121417] rounded-full">
                  <span className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75"></span>
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-white font-medium text-[15px] tracking-wide">
                    Jhamtani Concierge
                  </h3>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-1.5 py-0.2 rounded-full font-sans uppercase tracking-wider font-semibold">
                    Live
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 font-light flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#C5A880]" /> Real-Time Luxury Advisory
                </p>
              </div>
            </div>

            {/* Header Controls */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handleResetChat}
                title="Restart conversation"
                className="w-8 h-8 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onClose}
                title="Close Assistant"
                className="w-8 h-8 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 2. CHAT MESSAGES BODY */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs scrollbar-thin scrollbar-thumb-[#A0725B]/40 scrollbar-track-transparent">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-[#A0725B]/25 border border-[#A0725B]/50 text-[#C5A880] flex items-center justify-center shrink-0 mt-0.5 font-serif font-bold text-[11px]">
                    J
                  </div>
                )}

                <div
                  className={`max-w-[82%] sm:max-w-[78%] flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`px-3.5 py-2.5 rounded-2xl text-[12.5px] leading-relaxed tracking-wide ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-[#A0725B] to-[#8A5F4A] text-white rounded-tr-none shadow-md"
                        : "bg-[#1B1E24] border border-zinc-800 text-zinc-200 rounded-tl-none whitespace-pre-line"
                    }`}
                  >
                    {msg.text}
                  </div>

                  <span className="text-[9.5px] text-zinc-500 mt-1 px-1 font-mono">
                    {msg.time}
                  </span>

                  {/* Message Action Chips */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {msg.actions.map((act, i) => (
                        <React.Fragment key={i}>
                          {act.type === "link" && act.href ? (
                            <Link
                              href={act.href}
                              onClick={onClose}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1F232B] hover:bg-[#A0725B] text-zinc-300 hover:text-white border border-[#A0725B]/30 hover:border-[#A0725B] text-[11px] font-medium transition-all shadow-sm"
                            >
                              <span>{act.label}</span>
                              <ExternalLink className="w-3 h-3" />
                            </Link>
                          ) : (
                            <button
                              onClick={() => handleActionClick(act)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1F232B] hover:bg-[#A0725B] text-zinc-300 hover:text-white border border-[#A0725B]/30 hover:border-[#A0725B] text-[11px] font-medium transition-all shadow-sm cursor-pointer"
                            >
                              {act.type === "whatsapp" && (
                                <WhatsAppIcon className="w-3 h-3 text-emerald-400 group-hover:text-white" />
                              )}
                              {act.type === "call" && <Phone className="w-3 h-3 text-[#C5A880]" />}
                              {act.type === "enquiry" && <Calendar className="w-3 h-3 text-[#C5A880]" />}
                              <span>{act.label}</span>
                            </button>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>

                {msg.sender === "user" && (
                  <div className="w-7 h-7 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2.5 justify-start items-center">
                <div className="w-7 h-7 rounded-full bg-[#A0725B]/25 border border-[#A0725B]/50 text-[#C5A880] flex items-center justify-center shrink-0 font-serif font-bold text-[11px]">
                  J
                </div>
                <div className="bg-[#1B1E24] border border-zinc-800 px-3.5 py-2.5 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full animate-bounce"></span>
                  <span className="text-[10px] text-zinc-500 font-light ml-1.5">Jhamtani is typing...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* 3. QUICK PROMPT CHIPS */}
          <div className="px-3 py-2 bg-[#17191E]/90 border-t border-zinc-800/80 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            {QUICK_PROMPTS.map((prompt, index) => (
              <button
                key={index}
                onClick={() => handleSend(prompt.replace(/^[^\w\s]+/, "").trim())}
                className="whitespace-nowrap text-[10.5px] px-2.5 py-1 rounded-full bg-zinc-900/90 hover:bg-[#A0725B]/25 text-zinc-300 hover:text-[#C5A880] border border-zinc-800 hover:border-[#A0725B]/50 transition-all shrink-0 cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* 4. REAL-TIME INPUT BAR */}
          <div className="p-3 bg-[#14171C] border-t border-[#A0725B]/20">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about projects, pricing, site visits..."
                className="flex-1 bg-zinc-900 border border-zinc-800 focus:border-[#A0725B] px-3.5 py-2.5 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="w-9 h-9 rounded-xl bg-[#A0725B] hover:bg-[#8C5E47] disabled:opacity-40 text-white flex items-center justify-center transition-all cursor-pointer shadow-md disabled:cursor-not-allowed shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Quick Contact Footer Bar */}
            <div className="flex items-center justify-between pt-2 px-1 text-[10.5px] text-zinc-500">
              <a
                href="https://wa.me/917447447669"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-emerald-400 transition-colors"
              >
                <WhatsAppIcon className="w-3 h-3 text-emerald-500" />
                <span>+91 7 447 447669</span>
              </a>
              <button
                onClick={() => {
                  onClose();
                  onOpenEnquiry();
                }}
                className="hover:text-[#C5A880] transition-colors underline underline-offset-2 cursor-pointer"
              >
                Request Callback Form
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
