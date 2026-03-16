import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/5 border-b border-white/10"
    >
      <div className="container flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500">
            <span className="text-white font-bold text-lg">I</span>
          </div>
          <span className="text-lg font-semibold text-white">IdeaForge</span>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
