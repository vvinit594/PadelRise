"use client";

import { useEffect } from "react";
import { initLenis } from "@/lib/lenis";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const { stop } = initLenis();
    return () => stop();
  }, []);

  return <>{children}</>;
}
