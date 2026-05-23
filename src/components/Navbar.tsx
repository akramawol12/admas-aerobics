import { useState } from 'react';
import { Activity, Calendar, MapPin, Phone, Shield, X, Ticket, Menu, ChevronRight } from 'lucide-react';
import { Booking } from '../types';

interface NavbarProps {
  bookings: Booking[];
  onCancelBooking: (id: string) => void;
  scrollToSection: (id: string) => void;
}

export default function Navbar({ bookings, onCancelBooking, scrollToSection }: NavbarProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Core Workouts', id: 'workouts' },
    { name: 'Schedule', id: 'schedule' },
    { name: 'Personal Match', id: 'planner' },
    { name: 'BMI Calculator', id: 'calculator' },
    { name: 'Branches', id: 'branches' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-zinc-800 bg-[#0A0A0A] py-3">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => scrollToSection('home')}>
            <div className="flex h-10 w-10 items-center justify-center bg-[#CCFF00] shadow-[4px_4px_0px_0px_rgba(204,255,0,0.25)] border border-black">
              <span className="font-sans font-black text-black text-xl italic leading-none">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-white uppercase sm:text-2xl italic leading-none">
                ADMAS TAEBO
              </span>
              <span className="text-[9px] font-black tracking-[0.25em] text-[#CCFF00] uppercase pt-1">
                & AEROBICS • ADDIS ABABA
              </span>
            </div>
          </div>

          {/* Nav Items (Desktop) */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-[#CCFF00] transition-colors cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right Action Trigger: Booking Drawer toggle & Localized Hotline */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="relative flex h-10 items-center gap-2 border border-[#CCFF00]/40 bg-[#CCFF00]/10 hover:bg-[#CCFF00] hover:text-black hover:scale-[1.02] active:scale-[0.98] px-5 text-xs font-extrabold uppercase tracking-widest text-[#CCFF00] transition-all duration-300 cursor-pointer"
              id="active-passes-trigger"
            >
              <Ticket className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">My Passes</span>
              {bookings.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-white text-[9px] font-black text-black shadow-md border border-[#CCFF00]">
                  {bookings.length}
                </span>
              )}
            </button>

            {/* Mobile Burger Menu Button with Clear "MENU" Label */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 items-center justify-center gap-1.5 rounded-none border border-zinc-850 bg-zinc-900/50 px-3 text-zinc-400 hover:text-[#CCFF00] md:hidden cursor-pointer transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <>
                  <X className="h-4 w-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest font-mono">CLOSE</span>
                </>
              ) : (
                <>
                  <Menu className="h-4 w-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest font-mono">MENU</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Links - Stylish Interactive Quick Jump Panel */}
        {mobileMenuOpen && (
          <div className="border-t border-zinc-800 bg-black/95 px-4 py-5 md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="mb-2 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500 font-mono">
              :: QUICK NAVIGATION JUMP ::
            </div>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between py-3 px-4 text-xs font-black uppercase tracking-widest text-zinc-300 bg-zinc-950 hover:bg-[#CCFF00] hover:text-black border border-zinc-900 hover:border-black transition-all cursor-pointer text-left"
                >
                  <span>{item.name}</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Booking Side Drawer Overlay */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm">
          {/* Backdrop Click Dismiss */}
          <div className="absolute inset-0 -z-10" onClick={() => setIsDrawerOpen(false)} />

          <div className="w-full max-w-md border-l border-zinc-800 bg-[#0A0A0A] p-6 shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-2">
                <Ticket className="h-5 w-5 text-[#CCFF00]" />
                <h3 className="text-sm font-black text-white tracking-[0.15em] uppercase italic">
                  My Active Session Passes
                </h3>
              </div>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-1.5 text-zinc-400 hover:bg-white/5 hover:text-white transition-all cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {bookings.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center bg-zinc-900 text-zinc-500 border border-zinc-800">
                  <Calendar className="h-6 w-6" />
                </div>
                <h4 className="font-extrabold text-zinc-300 text-xs uppercase tracking-wider">No Active Registrations</h4>
                <p className="mt-2 text-xs text-zinc-500 max-w-xs leading-relaxed">
                  Review the Class Schedule in our website and claim yours. Booking on Admas operates on the trust network—no upfront charge!
                </p>
                <button
                  onClick={() => {
                    setIsDrawerOpen(false);
                    scrollToSection('schedule');
                  }}
                  className="mt-6 bg-[#CCFF00] text-black hover:bg-white transition-all duration-300 font-extrabold uppercase text-xs tracking-widest py-3 px-6 shadow-[4px_4px_0px_0px_rgba(204,255,0,0.25)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 cursor-pointer"
                >
                  Browse Class Schedulers
                </button>
              </div>
            ) : (
              <div className="mt-6 flex flex-col gap-4">
                <p className="text-xs text-zinc-400">
                  Please show your device screen at the entrance check-in counter. Ensure you arrive 10 minutes prior to session launch.
                </p>

                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="relative rounded-none border border-zinc-800 bg-zinc-950 p-4 transition-all hover:border-[#CCFF00]/50 overflow-hidden"
                  >
                    {/* Visual Stamp Pattern */}
                    <div className="absolute -top-3 -right-3 rotate-12 opacity-5">
                      <Shield className="h-16 w-16 text-white" />
                    </div>

                    <div className="flex justify-between items-start">
                      <div>
                        <span className="inline-flex items-center bg-[#CCFF00]/10 px-2 py-0.5 text-[9px] font-black tracking-widest text-[#CCFF00] uppercase">
                          CONFIRMED PASS
                        </span>
                        <h4 className="mt-2 text-sm font-black text-white uppercase tracking-wide leading-tight font-display">
                          {booking.className}
                        </h4>
                      </div>
                      <button
                        onClick={() => onCancelBooking(booking.id)}
                        className="p-1 text-zinc-500 hover:bg-white/10 hover:text-[#FF2A85] transition-all cursor-pointer"
                        title="Cancel Class"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-y-2 text-xs border-t border-zinc-800 pt-3 text-zinc-400 font-mono">
                      <div>
                        <span className="block text-[9px] text-zinc-500 uppercase font-bold tracking-wider">Coach</span>
                        <span className="font-medium text-zinc-300">{booking.trainer}</span>
                      </div>
                      <div>
                        <span className="block text-[9px] text-zinc-500 uppercase font-bold tracking-wider">Branch</span>
                        <span className="font-medium text-zinc-300 flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-[#CCFF00]" />
                          {booking.branchName.split(' ')[0]}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[9px] text-zinc-500 uppercase font-bold tracking-wider">Day</span>
                        <span className="font-medium text-white">{booking.day}</span>
                      </div>
                      <div>
                        <span className="block text-[9px] text-zinc-500 uppercase font-bold tracking-wider">Session Time</span>
                        <span className="font-medium text-[#CCFF00]">{booking.time}</span>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center gap-1 bg-black py-1.5 px-2 text-[10px] text-zinc-505 font-mono border border-zinc-900">
                      <Phone className="h-3 w-3 text-[#CCFF00]" />
                      <span>Code: <strong className="text-white font-black">AD-{booking.id.toUpperCase()}</strong></span>
                    </div>
                  </div>
                ))}

                <div className="mt-4 border border-zinc-800 bg-[#CCFF00]/10 p-4 text-xs font-black uppercase tracking-widest text-[#CCFF00] flex justify-between items-center">
                  <span>Total Confirmed Passes</span>
                  <span className="bg-[#CCFF00] text-black px-2.5 py-0.5 text-xs font-black">{bookings.length}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
