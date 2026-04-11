import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#0A0A0A]">
      <span className="text-5xl font-black text-white">404</span>
      <span className="text-white/50 text-sm">Page not found</span>
      <Link
        to="/"
        className="font-mono text-[11px] tracking-[0.2em] uppercase"
        style={{ color: "#D4AF37" }}
      >
        ← Back to homepage
      </Link>
    </div>
  );
};

export default NotFound;
