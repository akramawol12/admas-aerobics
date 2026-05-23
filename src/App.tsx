import { useState, useEffect } from 'react';
import { Sparkles, Calendar, CheckCircle2, AlertCircle, X, ShieldAlert, Award, ChevronUp, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Workouts from './components/Workouts';
import Scheduler from './components/Scheduler';
import PlanBuilder from './components/PlanBuilder';
import BMICalculator from './components/BMICalculator';
import Branches from './components/Branches';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { Booking, GymClass } from './types';

export default function App() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [notification, setNotification] = useState<{
    show: boolean;
    message: string;
    type: 'success' | 'info' | 'error';
  } | null>(null);
  const [showPromo, setShowPromo] = useState(true);

  // Hydrate bookings from localStorage on initial load
  useEffect(() => {
    try {
      const stored = localStorage.getItem('admas_local_bookings');
      if (stored) {
        setBookings(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load local bookings:', e);
    }
  }, []);

  // Save bookings to localStorage whenever they change
  const saveBookings = (newBookings: Booking[]) => {
    setBookings(newBookings);
    try {
      localStorage.setItem('admas_local_bookings', JSON.stringify(newBookings));
    } catch (e) {
      console.error('Failed to write local bookings:', e);
    }
  };

  // Handle slot reservation
  const handleBookClass = (klass: GymClass, branchName: string) => {
    const isAlreadyBooked = bookings.some((b) => b.classId === klass.id);

    if (isAlreadyBooked) {
      triggerNotification(
        `You have already reserved a verified seat for the "${klass.name}" session!`,
        'info'
      );
      return;
    }

    const newBooking: Booking = {
      id: Math.random().toString(36).substring(2, 7),
      classId: klass.id,
      className: klass.name,
      trainer: klass.trainer,
      branchName: branchName,
      day: klass.day,
      time: klass.time,
      bookingTime: new Date().toLocaleTimeString(),
    };

    const updated = [...bookings, newBooking];
    saveBookings(updated);

    // Dynamic success feedback
    triggerNotification(
      `Confimed slot reserved! Check "My Passes" at the top for details. Arrive 10 minutes prior to kick-off.`,
      'success'
    );
  };

  // Handle booking cancellation
  const handleCancelBooking = (bookingId: string) => {
    const targetBooking = bookings.find((b) => b.id === bookingId);
    const updated = bookings.filter((b) => b.id !== bookingId);
    saveBookings(updated);

    if (targetBooking) {
      triggerNotification(
        `Succesfully cancelled slot path for "${targetBooking.className}". Seats returned to the pool.`,
        'error'
      );
    }
  };

  // Floating notification trigger utility
  const triggerNotification = (message: string, type: 'success' | 'info' | 'error') => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification(prev => prev ? { ...prev, show: false } : null);
    }, 4500);
  };

  const [activeSection, setActiveSection] = useState('home');

  const SECTIONS = [
    { id: 'home', label: 'Home' },
    { id: 'workouts', label: 'Workouts' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'planner', label: 'Match Plan' },
    { id: 'calculator', label: 'BMI Calc' },
    { id: 'branches', label: 'Branches' },
    { id: 'testimonials', label: 'Opinions' },
  ];

  // Monitor scroll actions to highlight current page index section in side panel
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const sect of SECTIONS) {
        const el = document.getElementById(sect.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sect.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger instantly
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollUp = () => {
    const currentIndex = SECTIONS.findIndex(s => s.id === activeSection);
    if (currentIndex > 0) {
      scrollToSection(SECTIONS[currentIndex - 1].id);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScrollDown = () => {
    const currentIndex = SECTIONS.findIndex(s => s.id === activeSection);
    if (currentIndex < SECTIONS.length - 1) {
      scrollToSection(SECTIONS[currentIndex + 1].id);
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans overflow-x-hidden selection:bg-[#CCFF00] selection:text-black">
      
      {/* Dynamic Top Promotion Sticker banner */}
      {showPromo && (
        <div className="relative z-50 bg-[#CCFF00] py-3 px-4 shadow-[0_4px_20px_rgba(204,255,0,0.25)] text-center flex items-center justify-between pointer-events-auto border-b border-black">
          <div className="mx-auto flex items-center gap-2 text-xs font-black uppercase tracking-[0.1em] text-black italic">
            <Sparkles className="h-4 w-4 animate-spin shrink-0 text-black" />
            <span>★ SHINY ADDIS SEASON: Claim any session free this month. Bring friends for premium cardio energy! ★</span>
          </div>
          <button
            onClick={() => setShowPromo(false)}
            className="p-1 text-black bg-white/20 hover:bg-black hover:text-white transition-all cursor-pointer shrink-0 border border-black/15"
            title="Dismiss Offer"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Main sticky navigation */}
      <Navbar
        bookings={bookings}
        onCancelBooking={handleCancelBooking}
        scrollToSection={scrollToSection}
      />

      {/* Structured Single View sections */}
      <main className="relative">
        <Hero scrollToSection={scrollToSection} />
        
        <Workouts />
        
        <Scheduler
          bookings={bookings}
          onBookClass={handleBookClass}
          scrollToSection={scrollToSection}
        />
        
        <PlanBuilder />
        
        <BMICalculator />
        
        <Branches />
        
        <Testimonials />
      </main>

      {/* Sophisticated Local Footer */}
      <Footer scrollToSection={scrollToSection} />

      {/* Highly Polished Premium Floating Feedback Popovers (Toast) */}
      {notification && notification.show && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm rounded-none border-2 border-[#CCFF00] bg-black p-5 shadow-[6px_6px_0px_0px_rgba(204,255,0,0.2)] animate-in fade-in slide-in-from-bottom-5 duration-300 pointer-events-auto">
          <div className="flex items-start gap-4">
            
            {/* Context status icon */}
            {notification.type === 'success' ? (
              <CheckCircle2 className="h-5 w-5 text-[#CCFF00] shrink-0 mt-0.5" />
            ) : notification.type === 'info' ? (
              <AlertCircle className="h-5 w-5 text-zinc-300 shrink-0 mt-0.5" />
            ) : (
              <ShieldAlert className="h-5 w-5 text-[#FF2A85] shrink-0 mt-0.5" />
            )}

            <div className="space-y-1">
              <span className="block text-[10px] uppercase tracking-[0.2em] font-black text-[#CCFF00]">
                {notification.type === 'success' ? 'ADMAS CONFIRMATION' : notification.type === 'info' ? 'ATTENTION' : 'PASS REMOVED'}
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed font-bold font-sans">
                {notification.message}
              </p>
            </div>

            {/* Close popover */}
            <button
              onClick={() => setNotification(null)}
              className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>

          </div>
        </div>
      )}

      {/* Dynamic Side Navigation HUD - Up & Down Control with Visual Status Indicator */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center gap-3 bg-black/95 border-2 border-zinc-800 p-3 shadow-[6px_6px_0px_0px_rgba(204,255,0,0.3)] backdrop-blur-md">
        
        {/* Scroll Up Button target */}
        <button
          onClick={handleScrollUp}
          className="group relative flex h-9 w-9 items-center justify-center border border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-black hover:bg-[#CCFF00] hover:border-[#CCFF00] transition-all cursor-pointer"
          title="Scroll Up"
        >
          <ChevronUp className="h-5 w-5" />
          <span className="absolute right-12 scale-0 origin-right transition-all group-hover:scale-100 bg-black border border-zinc-800 text-[#CCFF00] font-mono text-[9px] font-black uppercase tracking-widest px-2 py-1 shadow-md whitespace-nowrap">
            UP
          </span>
        </button>

        {/* Section Dots List */}
        <div className="flex flex-col gap-2 my-1">
          {SECTIONS.map((sect) => {
            const isActive = activeSection === sect.id;
            return (
              <button
                key={sect.id}
                onClick={() => scrollToSection(sect.id)}
                className="group relative flex h-6 w-6 items-center justify-center cursor-pointer"
                title={sect.label}
              >
                {/* Outer Indicator Border */}
                <span className={`absolute inset-0 border transition-all duration-300 rounded-none ${
                  isActive ? 'border-[#CCFF00] scale-100' : 'border-transparent scale-50 group-hover:scale-75 group-hover:border-zinc-700'
                }`} />
                {/* Core Dot */}
                <span className={`h-1.5 w-1.5 transition-all duration-300 ${
                  isActive ? 'bg-[#CCFF00] scale-125' : 'bg-zinc-500 group-hover:bg-zinc-350'
                }`} />
                
                {/* Elegant Hover Sidebar Label */}
                <span className="absolute right-8 scale-0 origin-right transition-all group-hover:scale-100 bg-black border border-zinc-800 text-white font-mono text-[9px] font-extrabold uppercase tracking-widest px-2 py-1 shadow-md whitespace-nowrap">
                  {sect.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Scroll Down Button target */}
        <button
          onClick={handleScrollDown}
          className="group relative flex h-9 w-9 items-center justify-center border border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-black hover:bg-[#CCFF00] hover:border-[#CCFF00] transition-all cursor-pointer"
          title="Scroll Down"
        >
          <ChevronDown className="h-5 w-5" />
          <span className="absolute right-12 scale-0 origin-right transition-all group-hover:scale-100 bg-black border border-zinc-800 text-[#CCFF00] font-mono text-[9px] font-black uppercase tracking-widest px-2 py-1 shadow-md whitespace-nowrap">
            DOWN
          </span>
        </button>

      </div>

      {/* Mobile-friendly bottom-right mini-dock scroll indicator buttons (so it works wonderfully on phone too) */}
      <div className="fixed bottom-24 right-4 z-40 flex sm:hidden flex-col gap-2">
        <button
          onClick={handleScrollUp}
          className="flex h-10 w-10 items-center justify-center border-2 border-[#CCFF00] bg-black text-[#CCFF00] active:bg-[#CCFF00] active:text-black transition-all shadow-[2px_2px_0px_0px_rgba(204,255,0,0.5)] active:translate-x-0.5 active:translate-y-0.5"
          title="Scroll Up"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
        <button
          onClick={handleScrollDown}
          className="flex h-10 w-10 items-center justify-center border-2 border-[#CCFF00] bg-black text-[#CCFF00] active:bg-[#CCFF00] active:text-black transition-all shadow-[2px_2px_0px_0px_rgba(204,255,0,0.5)] active:translate-x-0.5 active:translate-y-0.5"
          title="Scroll Down"
        >
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>

    </div>
  );
}
