import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, MapPin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface IdeaInputProps {
  onEvaluate: (idea: string, location: string) => void;
  isLoading: boolean;
}

const IdeaInput = ({ onEvaluate, isLoading }: IdeaInputProps) => {
  const [idea, setIdea] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = () => {
    if (idea.trim() && location.trim()) {
      onEvaluate(idea, location);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="container max-w-3xl py-16 md:py-24 px-6"
    >
      <div className="mb-12 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 px-4 py-1.5 text-sm text-cyan-400"
        >
          <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
          AI-Powered Analysis
        </motion.div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-white">
          Validate your{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">startup idea</span>
        </h1>
        <p className="mx-auto max-w-xl text-lg text-gray-400">
          Get instant AI-powered feasibility reports with market analysis, 
          competitor mapping, and actionable next steps.
        </p>
      </div>

      <div className="rounded-2xl bg-[#1a2332] border border-cyan-500/30 p-6 md:p-8 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:-translate-y-2">
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Describe your startup idea
            </label>
            <Textarea
              placeholder="E.g., An AI-powered platform that helps small businesses automate their customer support using natural language processing..."
              className="min-h-[140px] resize-none bg-[#0f1729] border-cyan-500/30 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
            />
          </div>

          <div className="relative">
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Target location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="E.g., United States, London, EU"
                className="bg-[#0f1729] border-cyan-500/30 text-white placeholder:text-gray-500 pl-10 focus:border-cyan-500 focus:ring-cyan-500"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          <Button
            onClick={handleSubmit}
            disabled={!idea.trim() || !location.trim() || isLoading}
            className="mt-4 w-full gap-2 bg-cyan-500 hover:bg-cyan-600 text-white py-6 text-base font-semibold shadow-lg transition-all disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Analyzing your idea...
              </>
            ) : (
              <>
                <Sparkles className="h-5 w-5" />
                Evaluate Idea
              </>
            )}
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default IdeaInput;
