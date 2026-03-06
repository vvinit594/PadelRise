"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Navbar } from "./Navbar";

export function ConditionalHeader() {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  if (isLandingPage) {
    return null;
  }

  return (
    <>
      <Header />
      <div className="w-full border-t border-white/20" />
      <Navbar />
      <div className="w-full border-t border-white/20" />
    </>
  );
}
