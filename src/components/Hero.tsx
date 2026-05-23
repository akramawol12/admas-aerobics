import { Flame, ArrowRight, ShieldCheck, Play, Award } from 'lucide-react';
import { HERO_IMAGE_PATH } from '../data';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A] pb-16 pt-12 border-b border-zinc-800">
      {/* Decorative radial gradients for glowing ambient lights */}
      <div className="absolute top-1/4 left-1/3 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#CCFF00]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-[#CCFF00]/5 blur-[130px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Block */}
          <div className="lg:col-span-7 text-left space-y-8">
            <div className="inline-flex items-center gap-2 border border-[#CCFF00] bg-[#CCFF00]/10 px-4 py-2 text-xs font-black tracking-[0.15em] text-[#CCFF00] uppercase">
              <Flame className="h-4 w-4 text-[#CCFF00]" />
              <span>THE ULTIMATE ADDIS ABABA FITNESS FORCE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-sans font-black tracking-tighter text-white uppercase leading-[0.95] select-none">
              <span className="stroke-text text-transparent">IGNITE THE</span> <br />
              <span className="text-[#CCFF00] italic">POWER INSIDE</span> <br />
              WITH ADMAS
            </h1>

            <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed font-sans">
              Experience the highest-intensity martial arts cardio fusion and high-tempo aerobics in Ethiopia. Admas combines explosive kicks, martial-arts rhythm drills, and community energy to transform your stamina, weight, and mental raw confidence.
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('schedule')}
                className="flex items-center gap-3 bg-[#CCFF00] px-8 py-5 text-xs font-black uppercase tracking-[0.2em] text-black shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-300 cursor-pointer border border-black"
              >
                <span>Book Free Trial Slot</span>
                <ArrowRight className="h-4 w-4 stroke-[3px]" />
              </button>

              <button
                onClick={() => scrollToSection('planner')}
                className="flex items-center gap-3 bg-zinc-950 px-8 py-5 text-xs font-black uppercase tracking-[0.2em] text-white shadow-[6px_6px_0px_0px_rgba(204,255,0,0.25)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-300 border border-zinc-800 hover:border-white cursor-pointer"
              >
                <Award className="h-4 w-4 text-[#CCFF00]" />
                <span>Get Match Workout</span>
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 border-t border-zinc-900 pt-8 max-w-xl font-mono">
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-white">15,000+</span>
                <span className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest font-black">ADDIS JOURNEYS</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-[#CCFF00] italic">SOLO MAIN</span>
                <span className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest font-black">HUB AT PIASSA</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-white">99%</span>
                <span className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest font-black">HYPE INDEX</span>
              </div>
            </div>
          </div>

          {/* Graphical Frame Block */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Hard-edged retro block container shadow */}
            <div className="relative mx-auto max-w-md lg:max-w-none bg-zinc-950 p-4 border-2 border-zinc-800 shadow-[12px_12px_0px_0px_rgba(204,255,0,0.35)]">
              
              {/* Decorative block tag */}
              <div className="absolute -top-3 -left-3 bg-[#CCFF00] text-black text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 border border-black z-20">
                OFFICIAL PARTNER
              </div>

              {/* Real Generated Premium Action Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900 border border-zinc-800">
                <img
                  src={HERO_IMAGE_PATH}
                  alt="High energy Admas Taebo Group Session"
                  className="w-full h-full object-cover select-none filter brightness-95 contrast-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Image Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Local Addis Tag */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black border border-[#CCFF00]/50 px-3 py-1.5 text-[9px] font-black text-white uppercase tracking-widest">
                  <span className="h-2 w-2 bg-[#CCFF00] animate-ping shrink-0" />
                  <span>PIASSA MAIN EXCLUSIVE HUB</span>
                </div>
              </div>

              {/* Floating feature card */}
              <div className="mt-4 flex items-center justify-between bg-black p-4 border border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-[#CCFF00]/10 border border-[#CCFF00]/30">
                    <ShieldCheck className="h-5 w-5 text-[#CCFF00]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white uppercase tracking-wider">CERTIFIED COACHES</h4>
                    <span className="text-[10px] text-zinc-500 font-mono">Ethiopian Martial Arts Champions</span>
                  </div>
                </div>
                <div className="flex -space-x-2">
                  <span className="h-8 w-8 rounded-none border-2 border-zinc-900 overflow-hidden bg-zinc-800">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=40&q=80" alt="Avatar A" referrerPolicy="no-referrer" className="h-full w-full object-cover" />
                  </span>
                  <span className="h-8 w-8 rounded-none border-2 border-zinc-900 overflow-hidden bg-zinc-800">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=40&q=80" alt="Avatar B" referrerPolicy="no-referrer" className="h-full w-full object-cover" />
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
