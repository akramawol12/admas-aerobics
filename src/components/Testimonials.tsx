import { Quote, Star, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-[#0A0A0A] py-24 border-b border-zinc-900">
      {/* Visual neon ambient decoration */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#CCFF00]/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title block */}
        <div className="text-left space-y-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-12 bg-[#CCFF00]"></span>
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#CCFF00] font-mono flex items-center gap-1">
              <Award className="h-4.5 w-4.5" /> Admas Success Catalysts
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
            COMMUNITY TRANSFORMATION
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl leading-relaxed">
            Review actual experiences of corporate professionals, medical practitioners, and students whose physical body posture, metabolism, and raw stamina were changed inside our group classes.
          </p>
        </div>

        {/* Feedback Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="relative border-2 border-zinc-900 bg-zinc-950 p-6 flex flex-col justify-between hover:border-[#CCFF00] transition-all duration-300 group rounded-none shadow-[4px_4px_0px_0px_rgba(255,255,255,0.03)]"
            >
              {/* Profile layout and Rating stars */}
              <div className="space-y-6 text-left">
                
                {/* Custom styling star items */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="h-3.5 w-3.5 fill-[#CCFF00] text-[#CCFF00]" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="absolute -top-3 -left-3 h-10 w-10 text-white/5 pointer-events-none" />
                  <p className="text-sm text-zinc-300 italic leading-relaxed relative z-10 font-sans">
                    "{t.quote}"
                  </p>
                </div>

              </div>

              {/* Transformation badge outcome info */}
              <div className="mt-8 pt-6 border-t border-zinc-900 space-y-5 text-left">
                
                {/* Result stamp */}
                <div className="bg-[#CCFF00]/5 border-l-2 border-[#CCFF00] p-3 flex items-start gap-2 font-mono">
                  <span className="text-[10px] font-black text-[#CCFF00] uppercase tracking-wider block">
                    🏅 RESULT: <span className="text-zinc-200">{t.transformation.toUpperCase()}</span>
                  </span>
                </div>

                {/* Profile author footer card */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 border border-zinc-800 shrink-0 rounded-none bg-zinc-900 flex items-center justify-center overflow-hidden">
                    {t.avatar ? (
                      <img
                        src={t.avatar}
                        alt={t.name}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300 rounded-none"
                      />
                    ) : (
                      <span className="text-[11px] font-black tracking-widest text-[#CCFF00] font-mono select-none">
                        {t.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white uppercase tracking-wider">{t.name}</h4>
                    <span className="text-[9px] text-zinc-500 block uppercase font-black font-mono mt-0.5">
                      {t.role} • <span className="text-[#CCFF00]">{t.branch.toUpperCase()}</span>
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
