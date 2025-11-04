import { Leaf } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-emerald-900/10 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-emerald-500/20 border border-emerald-400/30">
            <Leaf className="w-5 h-5 text-emerald-300" />
          </div>
          <span className="font-semibold tracking-tight text-emerald-50">VerdeScan</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-emerald-100/80">
          <a href="#scan" className="hover:text-emerald-50 transition-colors">Scan</a>
          <a href="#results" className="hover:text-emerald-50 transition-colors">Results</a>
          <a href="#" className="hover:text-emerald-50 transition-colors">About</a>
        </nav>
      </div>
    </header>
  );
}
