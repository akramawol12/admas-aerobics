import { useState, useMemo } from 'react';
import { Calendar, MapPin, Sparkles, User, Clock, AlertTriangle, Users } from 'lucide-react';
import { GymClass, Booking, Branch } from '../types';
import { CLASSES, BRANCHES } from '../data';

interface SchedulerProps {
  bookings: Booking[];
  onBookClass: (klass: GymClass, branchName: string) => void;
  scrollToSection: (id: string) => void;
}

export default function Scheduler({ bookings, onBookClass, scrollToSection }: SchedulerProps) {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const filteredClasses = useMemo(() => {
    return CLASSES.filter((c) => {
      const matchDay = c.day === selectedDay;
      const matchCategory = selectedCategory === 'all' || c.category === selectedCategory;
      return matchDay && matchCategory;
    });
  }, [selectedDay, selectedCategory]);

  return (
    <section id="schedule" className="relative bg-[#0A0A0A] py-24 border-b border-zinc-900">
      {/* Visual background lights */}
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-[#CCFF00]/5 blur-[80px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-800">
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-8 bg-[#CCFF00]"></span>
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#CCFF00] font-mono flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" /> Claim Your Session Spot
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              GROUP CLASS SCHEDULER
            </h2>
            <p className="text-zinc-400 text-sm max-w-xl leading-relaxed">
              We host multiple energetic morning and evening sessions structured around Addis Ababa working hours. Click "Book Free Slot" to lock in your spot.
            </p>
          </div>

          {/* Quick link trigger for active passes */}
          {bookings.length > 0 && (
            <button
              onClick={() => {
                const el = document.getElementById('active-passes-trigger');
                if (el) el.click();
              }}
              className="self-start md:self-auto bg-zinc-950 border-2 border-[#CCFF00]/30 px-5 py-3 text-xs text-[#CCFF00] font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(204,255,0,0.15)] hover:bg-[#CCFF00] hover:text-black transition-all duration-300 cursor-pointer"
            >
              ★ ACTIVE RESERVATIONS: {bookings.length}
            </button>
          )}
        </div>        {/* Dynamic Filters Area */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          {/* Day of the week buttons */}
          <div className="md:col-span-8 flex gap-2 bg-zinc-950 p-2 border border-zinc-850 overflow-x-auto scrollbar-none whitespace-nowrap scroll-smooth">
            {days.map((day) => {
              const isActive = selectedDay === day;
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-4 py-2.5 text-xs font-black uppercase tracking-widest transition-all cursor-pointer flex-shrink-0 ${
                    isActive
                      ? 'bg-[#CCFF00] text-black font-black border border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.5)]'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Discipline/Category filter select */}
          <div className="md:col-span-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full border-2 border-zinc-800 bg-zinc-950 px-4 py-3 text-xs font-black text-zinc-300 focus:border-[#CCFF00] uppercase tracking-wider outline-none cursor-pointer"
            >
              <option value="all">ALL DISCIPLINES</option>
              <option value="Taebo">TAEBO CARDIO</option>
              <option value="Aerobics">RHYTHM AEROBICS</option>
              <option value="Strength">STRENGTH & CONDITIONING</option>
              <option value="Core">CORE & STABILITY</option>
            </select>
          </div>

        </div>

        {/* Classes grid display */}
        {filteredClasses.length === 0 ? (
          <div className="mt-12 bg-zinc-950/20 py-16 px-4 text-center border-2 border-dashed border-zinc-900">
            <AlertTriangle className="mx-auto h-10 w-10 text-[#CCFF00] mb-4" />
            <h4 className="text-xs font-black text-zinc-300 uppercase tracking-widest font-mono">No Sessions Configured</h4>
            <p className="mt-2 text-xs text-zinc-500 max-w-sm mx-auto font-sans leading-relaxed">
              We do not have any {selectedCategory !== 'all' ? selectedCategory : ''} slots on {selectedDay}s at this hub. Try resetting the filters or selecting another day.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
              }}
              className="mt-4 text-xs font-black uppercase text-[#CCFF00] hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClasses.map((klass) => {
              const matchedBranch = BRANCHES.find(b => b.id === klass.branchId);
              const branchName = matchedBranch ? matchedBranch.name : 'Admas Studio';
              const isClassBooked = bookings.some((b) => b.classId === klass.id);
              const isFull = klass.spotsLeft === 0;

              return (
                <div
                  key={klass.id}
                  className={`relative flex flex-col justify-between p-6 transition-all duration-300 border-2 ${
                    isClassBooked
                      ? 'border-[#CCFF00] bg-[#CCFF00]/5 shadow-[6px_6px_0px_0px_rgba(204,255,0,0.15)]'
                      : 'border-zinc-850 bg-zinc-955'
                  }`}
                >
                  {/* Card Header information */}
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="bg-[#CCFF00]/10 border border-[#CCFF00]/30 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#CCFF00] font-mono">
                        {klass.category.toUpperCase()}
                      </span>
                      <span className="text-[9px] uppercase font-black tracking-widest font-mono text-zinc-400">
                        🔥 {klass.intensity.toUpperCase()} INTENSITY
                      </span>
                    </div>

                    <div>
                      <h4 className="text-lg font-black text-white uppercase tracking-tight leading-tight">
                        {klass.name}
                      </h4>
                      <p className="mt-1.5 text-xs text-zinc-500 flex items-center gap-1 font-mono uppercase">
                        <MapPin className="h-3 w-3 text-[#CCFF00]" />
                        {branchName}
                      </p>
                    </div>

                    {/* Metadata specs */}
                    <div className="grid grid-cols-2 gap-3 bg-black/60 p-3 text-xs border border-zinc-900 font-mono">
                      <div className="space-y-1">
                        <span className="text-[9px] text-zinc-500 uppercase flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-zinc-500" /> TIME
                        </span>
                        <strong className="block text-zinc-200 text-[10px] leading-tight">{klass.time}</strong>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] text-zinc-500 uppercase flex items-center gap-1">
                          <User className="h-3.5 w-3.5 text-zinc-500" /> COACH
                        </span>
                        <strong className="block text-zinc-200 text-[10px] leading-tight">{klass.trainer}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Actions / Booking Counter footer */}
                  <div className="mt-6 pt-5 border-t border-zinc-900 flex items-center justify-between gap-4">
                    
                    {/* Capacity Indicator */}
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <Users className="h-4 w-4 text-zinc-500" />
                      <div>
                        {isFull ? (
                          <span className="text-[#FF2A85] font-black uppercase text-[10px]">FULLY BOOKED</span>
                        ) : (
                          <span className="text-zinc-400 font-bold text-[10px]">
                            <strong className="text-[#CCFF00]">{klass.spotsLeft}</strong> SPOTS LEFT
                          </span>
                        )}
                        <span className="block text-[8px] text-zinc-500 uppercase tracking-wider">LIMIT: {klass.capacity} MAX</span>
                      </div>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
