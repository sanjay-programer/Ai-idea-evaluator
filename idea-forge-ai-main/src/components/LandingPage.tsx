import { motion } from "framer-motion";
import { ArrowRight, Target, TrendingUp, Clock, FileText, Brain, BarChart3, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  const sampleOutputRef = useRef<HTMLDivElement>(null);
  const getStartedRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0f1729] text-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f1729]/90 backdrop-blur-lg border-b border-cyan-500/20 container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center font-bold text-xl">I</div>
          <span className="text-2xl font-bold">IdeaForge</span>
        </div>
        <Button onClick={() => scrollToSection(getStartedRef)} className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-lg transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1">
          Get Started
        </Button>
      </nav>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6 pt-32 pb-32"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Stop Guessing.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Validate Before You Build.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            IdeaForge AI instantly evaluates your startup idea with market scores, feasibility analysis, and risk assessment. Make data-driven decisions before your first line of code.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => scrollToSection(getStartedRef)}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-10 py-7 text-lg rounded-lg shadow-lg hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-300 group hover:-translate-y-2"
            >
              Evaluate My Idea <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection(sampleOutputRef)}
              variant="outline"
              className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 font-semibold px-10 py-7 text-lg rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-2"
            >
              See Sample Output
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-gray-500 text-sm cursor-pointer hover:text-gray-400 transition-colors"
            onClick={() => window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
          >
            ↓ See how it works
          </motion.div>
        </div>
      </motion.div>

      {/* The Reality Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">The Reality</h2>
          <p className="text-xl text-gray-400 text-center mb-16">Why most startup ideas never make it past the drawing board</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Most ideas fail before launch", description: "Without validation, you're building on assumptions. Wasted months. Wasted money." },
              { icon: TrendingUp, title: "Gut feelings aren't data", description: "You think your idea is amazing. Everyone does. You need objective clarity, not encouragement." },
              { icon: Clock, title: "Time is your most valuable asset", description: "Spend it wisely. Validate fast. Iterate smarter. Ship sooner." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-[#1a2332] border border-cyan-500/30 rounded-lg p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
              >
                <item.icon className="w-12 h-12 text-cyan-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* How It Works Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-xl text-gray-400 text-center mb-16">Three steps. Sixty seconds. Clear answers.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", icon: FileText, title: "Paste Your Idea", description: "Describe your startup concept in natural language." },
              { step: "02", icon: Brain, title: "AI Analyzes Deep", description: "Our model evaluates market, feasibility, and execution risk." },
              { step: "03", icon: BarChart3, title: "Get Your Score", description: "Market, feasibility, risk level, and monetization clarity instantly." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-[#1a2332] rounded-lg p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
              >
                <div className="inline-block bg-cyan-500/20 text-cyan-500 font-bold px-4 py-1 rounded-full text-sm mb-4">
                  STEP {item.step}
                </div>
                <div className="w-16 h-16 bg-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Sample Output Section */}
      <div ref={sampleOutputRef} className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Sample Output</h2>
          <p className="text-xl text-gray-400 text-center mb-16">This is what happens when you submit your idea to IdeaForge AI.</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#1a2332] rounded-lg p-8 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:-translate-y-2">
              <div className="text-sm text-gray-400 mb-2">MARKET SCORE</div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">78</span>
                <span className="text-2xl text-gray-500">/100</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                <div className="bg-gradient-to-r from-cyan-400 to-green-500 h-3 rounded-full" style={{ width: '78%' }}></div>
              </div>
              <p className="text-gray-400">Highly viable market opportunity with strong potential</p>
            </div>

            <div className="bg-[#1a2332] rounded-lg p-8 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:-translate-y-2">
              <div className="text-sm text-gray-400 mb-2">FEASIBILITY SCORE</div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">84</span>
                <span className="text-2xl text-gray-500">/100</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                <div className="bg-gradient-to-r from-green-400 to-cyan-500 h-3 rounded-full" style={{ width: '84%' }}></div>
              </div>
              <p className="text-gray-400">Highly viable market opportunity with strong potential</p>
            </div>

            <div className="bg-[#1a2332] rounded-lg p-8 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:-translate-y-2">
              <div className="text-sm text-gray-400 mb-2">Risk Level</div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-3xl font-bold">Medium</span>
              </div>
              <p className="text-gray-400">Execution complexity is moderate. Resources required are standard for this market.</p>
            </div>

            <div className="bg-[#1a2332] rounded-lg p-8 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:-translate-y-2">
              <div className="text-sm text-gray-400 mb-2">Monetization</div>
              <div className="text-3xl font-bold mb-4 text-cyan-400">Clear - Subscription model</div>
              <p className="text-gray-400">Revenue model is clear and defensible. Multiple upsell opportunities identified.</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Why This Is Different Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Why This Is Different</h2>
          <p className="text-xl text-gray-400 text-center mb-16">Stop wasting time on methods that don't work</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {[
                "Guessing",
                "Generic advice from blogs",
                "Months of validation work",
                "Biased feedback from friends"
              ].map((item, index) => (
                <div key={index} className="bg-red-950/30 border border-red-500/30 rounded-lg p-6 flex items-center gap-4 transition-all hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:-translate-y-1">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <span className="text-gray-400 line-through">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {[
                "IdeaForge AI",
                "Quantified analysis of YOUR idea",
                "Results in 60 seconds",
                "Objective AI assessment"
              ].map((item, index) => (
                <div key={index} className="bg-cyan-950/30 border border-cyan-500/30 rounded-lg p-6 flex items-center gap-4 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:-translate-y-1">
                  <Check className="w-6 h-6 text-cyan-500 flex-shrink-0" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Final CTA Section */}
      <motion.div
        ref={getStartedRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 py-32 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Your Startup Idea Deserves <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Real Validation
          </span>
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
          Stop feeling uncertain. Get your IdeaForge score today and start building with confidence.
        </p>
        <Button
          onClick={onGetStarted}
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-12 py-8 text-xl rounded-lg shadow-lg hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-300 group hover:-translate-y-2"
        >
          Get Your Idea Score Now <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform" />
        </Button>
        <p className="text-gray-500 mt-6">Free. Takes 60 seconds. No credit card required.</p>
      </motion.div>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800">
        <div className="text-center text-gray-500 text-sm">
          <p>© 2026 IdeaForge AI. Built by builders, for builders.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;