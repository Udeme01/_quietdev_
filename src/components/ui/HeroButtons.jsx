import { ArrowUpRight, FolderOpen } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroButtons = () => {
  return (
    <div className="mb-8 flex flex-wrap gap-4">
      <Link
        to="/contact"
        className="group flex items-center rounded-xl bg-green-700 text-white font-semibold text-sm px-4 py-2 hover:bg-green-800 cursor-pointer"
      >
        Let&apos;s Work Together
        <ArrowUpRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </Link>

      <a
        href="#projects"
        className="group px-4 py-3 text-sm flex items-center gap-2 rounded-xl border border-zinc-700 font-semibold text-white transition-all duration-300 hover:border-white cursor-pointer"
      >
        View My Work
        <FolderOpen
          size={18}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </a>

      <a
        href="/EMMANUEL_UDEME_RESUME.pdf"
        target="_blank"
        className="flex items-center"
      >
        Resume
        <ArrowUpRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </a>
    </div>
  );
};
