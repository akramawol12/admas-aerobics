import { MapPin, Phone, Building2, UserCheck, Dumbbell, Compass } from 'lucide-react';
import { BRANCHES } from '../data';

export default function Branches() {
  const activeBranch = BRANCHES[0];

  return (
    <section id="branches" className="relative bg-[#0A0A0A] py-24 border-b border-zinc-900">
      {/* Decorative localized grid mesh styling */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title elements */}
        <div className="text-left space-y-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-12 bg-[#CCFF00]"></span>
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#CCFF00] font-mono flex items-center gap-1">
              <MapPin className="h-4 w-4" /> Addis Ababa Center
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
            OUR MAIN HUB
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl leading-relaxed font-sans">
            Our premium athletic and dance workout systems are fully structured in our main hub in the capital. Check out our location, facility details, and check-in specifications below.
          </p>
        </div>

        {/* Details Dashboard Card */}
        <div className="max-w-4xl mx-auto pt-6">
          <div className="border-2 border-zinc-800 bg-zinc-950 p-6 sm:p-10 flex flex-col justify-between space-y-8 shadow-[10px_10px_0px_0px_rgba(204,255,0,0.1)] text-left">
            
            {/* Header information */}
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono">
                <span className="text-[10px] font-black text-[#CCFF00] uppercase tracking-widest flex items-center gap-1.5">
                  <Compass className="h-4 w-4" />
                  COORDINATES: {activeBranch.coordinates}
                </span>
                <span className="text-[10px] font-black text-zinc-500 uppercase">
                  {activeBranch.area.split(',')[0]} KEY HUB
                </span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">{activeBranch.name}</h3>
                <p className="mt-2 text-xs text-zinc-400">
                  Exact Address: <strong className="text-zinc-200 font-sans uppercase text-xs">{activeBranch.address}</strong>
                </p>
              </div>
            </div>

            {/* Structured details table */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-zinc-900 font-mono">
              
              <div className="space-y-1 bg-black p-4 border border-zinc-900">
                <span className="text-[9px] text-zinc-500 uppercase font-black flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-[#CCFF00]" /> LANDMARK ANCHOR
                </span>
                <p className="text-xs font-bold text-zinc-300 leading-snug uppercase">
                  {activeBranch.landmark}
                </p>
              </div>

              <div className="space-y-1 bg-black p-4 border border-zinc-900">
                <span className="text-[9px] text-zinc-500 uppercase font-black flex items-center gap-1.5">
                  <UserCheck className="h-4 w-4 text-[#CCFF00]" /> HEAD COACH
                </span>
                <p className="text-xs font-bold text-zinc-300 uppercase">
                  {activeBranch.headCoach}
                </p>
              </div>

              <div className="space-y-1 bg-black p-4 border border-zinc-900">
                <span className="text-[9px] text-zinc-500 uppercase font-black flex items-center gap-1.5">
                  <Dumbbell className="h-4 w-4 text-[#CCFF00]" /> CORE FACILITY
                </span>
                <p className="text-xs font-bold text-zinc-300 uppercase">
                  {activeBranch.featuredFacility}
                </p>
              </div>

              <div className="space-y-1 bg-black p-4 border border-zinc-900">
                <span className="text-[9px] text-zinc-500 uppercase font-black flex items-center gap-1.5">
                  <Phone className="h-4 w-4 text-[#CCFF00]" /> DIRECT HOTLINE
                </span>
                <p className="text-xs font-bold text-[#CCFF00]">
                  {activeBranch.phone}
                </p>
              </div>

            </div>

            {/* Quick visual map guide representation */}
            <div className="bg-black p-6 border border-zinc-900 font-mono">
              <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest block mb-2 leading-none">
                GENERAL CHECK-IN GUIDELINE
              </span>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans normal-case">
                Admas Taebo studios feature {activeBranch.floors} fitness {activeBranch.floors === 1 ? 'floor' : 'floors'} fully equipped with acoustic surrounds. Our gyms remain active <strong className="text-[#CCFF00]">the whole week except Sunday, 6:00 AM to 8:30 PM</strong>. Parking is freely structured for member vehicles.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
