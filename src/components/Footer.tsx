import { Activity, Mail, Phone, MapPin, MessageSquare, Flame } from 'lucide-react';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] border-t-2 border-zinc-900 pt-20 pb-12 overflow-hidden">
      {/* Structural background highlights mimicking premium studio stage */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-[#CCFF00]/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-zinc-900 pb-12">
          
          {/* Column 1: Brand details */}
          <div className="md:col-span-5 space-y-5 text-left">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="flex h-10 w-10 items-center justify-center bg-[#CCFF00] border-2 border-black text-black">
                <Activity className="h-6 w-6 animate-pulse" />
              </div>
              <div>
                <span className="font-sans text-xl font-black tracking-tighter text-white uppercase sm:text-2xl">
                  ADMAS
                </span>
                <span className="block text-[9px] font-black tracking-widest text-[#CCFF00] uppercase font-mono leading-none">
                  TAEBO & AEROBICS
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm max-w-sm leading-relaxed font-sans font-medium">
              Admas is the gold standard for high-energy cardiovascular fitness & group workouts in Addis Ababa. Leveraging certified martial arts experts, tailored nutrition advices, and energetic Ethiopian beats, we build legendary bodies and high confidence.
            </p>

            <span className="text-[10px] font-black text-[#CCFF00] uppercase tracking-widest flex items-center gap-1.5 font-mono">
              <Flame className="h-4 w-4 shrink-0" />
              SPOT RESERVATIONS REQUIRE PREPAYMENT.
            </span>
          </div>

          {/* Column 2: Navigation shortcuts */}
          <div className="md:col-span-3 space-y-4 text-left font-mono">
            <h4 className="text-[11px] font-black text-white uppercase tracking-widest">
              QUICK PORTALS
            </h4>
            <ul className="space-y-2 text-xs">
              {['home', 'workouts', 'schedule', 'planner', 'calculator', 'branches'].map((id) => {
                const label = id === 'planner' ? 'Workout Match' : id === 'calculator' ? 'BMI Calculator' : id;
                return (
                  <li key={id}>
                    <button
                      onClick={() => scrollToSection(id)}
                      className="text-zinc-400 hover:text-[#CCFF00] uppercase transition-all tracking-wider text-[10px] font-black cursor-pointer text-left"
                    >
                      :: {label.toUpperCase()}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Contact coordinates */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="text-[11px] font-black text-white uppercase tracking-widest font-mono">
              DIRECT COORDINATES
            </h4>
            <div className="space-y-3.5 text-xs text-zinc-400">
              
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-[#CCFF00] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-black text-zinc-300 font-mono text-[10px]">CENTRAL HQ - PIASSA</span>
                  <span className="text-xs font-sans">Infront of Lewi, Piassa, Addis Ababa, Ethiopia</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 font-mono text-xs">
                <Phone className="h-4.5 w-4.5 text-[#CCFF00] shrink-0" />
                <span className="font-black text-[#CCFF00]">+251 911 821 282</span>
              </div>

              <div className="flex items-center gap-2.5 font-mono text-xs">
                <Mail className="h-4.5 w-4.5 text-[#CCFF00] shrink-0" />
                <span>JOIN@ADMAS-TAEBO-AEROBICS.COM</span>
              </div>

              {/* Local Telegram Community link style */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 border-2 border-zinc-900 bg-black py-2 px-3.5 text-[10px] font-black text-[#CCFF00] hover:bg-[#CCFF00] hover:text-black cursor-pointer transition-all duration-300 font-mono">
                  <MessageSquare className="h-4 w-4 shrink-0" />
                  <span>TELEGRAM: @adme121</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Closing details and license */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] text-zinc-500 font-black tracking-widest font-mono">
          <p>© {currentYear} ADMAS TAEBO & AEROBICS ETHIOPIA. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-4">
            <span>POWER GROUP TRAINING</span>
            <span>•</span>
            <span>METABOLIC HEALTH ALLIANCE</span>
            <span>•</span>
            <span>ADDIS ABABA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
