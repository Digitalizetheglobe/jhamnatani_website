"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AceAyodhaRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/ace-ayodhya");
  }, [router]);

  return (
    <div className="min-h-screen bg-[#191F26] flex items-center justify-center text-white font-sans text-sm">
      Redirecting to Ace Ayodhya...
    </div>
  );
}
