import { ArrowUpRight, FolderOpen } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroButtons = () => {
  return (
    <div className="mb-8 flex flex-wrap gap-4">
      <button className="group flex items-center rounded-xl bg-blue-600 text-white font-semibold text-sm px-4 py-2 hover:bg-blue-400 cursor-pointer">
        Let&apos;s Work Together
        <ArrowUpRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </button>

      <button className="group px-4 py-3 text-sm flex items-center gap-2 rounded-xl border border-zinc-700 font-semibold text-white transition-all duration-300 hover:border-white cursor-pointer">
        View My Work
        <FolderOpen
          size={18}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </button>

      <Link to="/" className="flex items-center">
        Resume
        <ArrowUpRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </Link>
    </div>
  );
};
