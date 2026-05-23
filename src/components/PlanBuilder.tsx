import { useState } from 'react';
import { Award, Zap, Sparkles, BookOpen, Clock, Users, ArrowRight } from 'lucide-react';
import { GymClass } from '../types';
import { CLASSES } from '../data';

export default function PlanBuilder() {
  const [goal, setGoal] = useState('shred');
  const [schedule, setSchedule] = useState('evening');
  const [experience, setExperience] = useState('beginner');
  const [showPlan, setShowPlan] = useState(true); // Default to true so a plan is always immediately visual and interactive!

  // Recommendations generator
  const generatedPlan = () => {
    let title = '';
    let description = '';
    let coachName = 'Coach Elias (Taebo Lead)';
    let primaryBranch = 'Piassa Hub';
    let weeklyRecommendation = '';
    let recoveryFocus = '';
    let matches: GymClass[] = [];

    // Filter recommendation list based on preferences
    if (goal === 'shred') {
      title = 'Fat-Shredding Taebo Catalyst';
      description = 'Designated for rapid weight loss and peak cardiovascular conditioning using high kicks & rapid punch sequences.';
      weeklyRecommendation = '3 Classes of Taebo Blast + 1 active Gomen/vegetable detox day';
      recoveryFocus = 'Pure water + Freshly made local avocado juice spread';
      coachName = 'Coach Elias';
      // Find Taebo classes
      matches = CLASSES.filter(c => c.category === 'Taebo').slice(0, 3);
    } else if (goal === 'sculpt') {
      title = 'Athletic Body Sculpt & Toning';
      description = 'Focuses on creating lean muscle lines, toning thighs, core tightening, and active step aerobics stamina.';
      weeklyRecommendation = '2 Classes of aerobics + 1 Core Abs class every Wednesday';
      recoveryFocus = 'Iron-dense Teff Injera with lean fava beans stew';
      coachName = 'Coach Lidya';
      primaryBranch = 'Piassa Hub';
      matches = CLASSES.filter(c => c.category === 'Aerobics' || c.category === 'Core').slice(0, 3);
    } else {
      title = 'Dynamic stamina & Stress Relief';
      description = 'Designed specifically to discharge desk-job anxiety, release endorphins, and increase full body flexibility.';
      weeklyRecommendation = '2 Classes of mid-tempo Taebo cardio + weekend aerobics choreography';
      recoveryFocus = 'A warm cup of high-grade Ethiopian herbal Spiced Tea (Korerima mixed)';
      coachName = 'Coach Selamawit';
      primaryBranch = 'Piassa Hub';
      matches = CLASSES.filter(c => c.category === 'Aerobics' || c.category === 'Strength').slice(0, 3);
    }

    return { title, description, coachName, primaryBranch, weeklyRecommendation, recoveryFocus, matches };
  };

  const plan = generatedPlan();

  return (
    <section id="planner" className="relative bg-[#0A0A0A] py-24 border-b border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title information */}
        <div className="text-left space-y-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-12 bg-[#CCFF00]"></span>
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#CCFF00] font-mono flex items-center gap-1">
              <Sparkles className="h-4 w-4" /> Empowered Workout Alignment
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
            ADMAS MATCH CONSTRUCTOR
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl leading-relaxed">
            Take a 15-second diagnostic quiz to customize a high-tempo class schedule optimal for your current endurance and daily goals.
          </p>
        </div>

        {/* Selection Interface Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Question fields */}
          <div className="lg:col-span-5 border-2 border-zinc-850 bg-black/60 p-6 sm:p-8 space-y-8 flex flex-col justify-between">
            
            <div className="space-y-6">
              <h3 className="text-xs font-black text-white uppercase tracking-widest pb-4 border-b border-zinc-900 flex items-center gap-2 font-mono">
                <BookOpen className="h-4 w-4 text-[#CCFF00]" /> OPTIONS DIAGNOSTIC
              </h3>

              {/* Goal Choice */}
              <div className="space-y-3">
                <span className="block text-[10px] font-black text-zinc-500 uppercase tracking-widest font-mono">1. DEFINE PRIMARY OBJECTIVE</span>
                <div className="grid grid-cols-1 gap-2.5">
                  <button
                    onClick={() => { setGoal('shred'); setShowPlan(true); }}
                    className={`rounded-none border-2 p-3 text-left text-xs font-black transition-all flex items-center gap-3 cursor-pointer ${
                      goal === 'shred' ? 'bg-[#CCFF00]/10 border-[#CCFF00] text-white shadow-[3px_3px_0px_0px_rgba(204,255,0,0.15)]' : 'bg-transparent border-zinc-900 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div className={`h-2.5 w-2.5 shrink-0 ${goal === 'shred' ? 'bg-[#CCFF00]' : 'bg-zinc-800'}`} />
                    <span>WEIGHT SHRED & SPEED CARDIO</span>
                  </button>
                  <button
                    onClick={() => { setGoal('sculpt'); setShowPlan(true); }}
                    className={`rounded-none border-2 p-3 text-left text-xs font-black transition-all flex items-center gap-3 cursor-pointer ${
                      goal === 'sculpt' ? 'bg-[#CCFF00]/10 border-[#CCFF00] text-white shadow-[3px_3px_0px_0px_rgba(204,255,0,0.15)]' : 'bg-transparent border-zinc-900 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div className={`h-2.5 w-2.5 shrink-0 ${goal === 'sculpt' ? 'bg-[#CCFF00]' : 'bg-zinc-800'}`} />
                    <span>BODY SCULPT & DANCE AEROBICS</span>
                  </button>
                  <button
                    onClick={() => { setGoal('endurance'); setShowPlan(true); }}
                    className={`rounded-none border-2 p-3 text-left text-xs font-black transition-all flex items-center gap-3 cursor-pointer ${
                      goal === 'endurance' ? 'bg-[#CCFF00]/10 border-[#CCFF00] text-white shadow-[3px_3px_0px_0px_rgba(204,255,0,0.15)]' : 'bg-transparent border-zinc-900 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div className={`h-2.5 w-2.5 shrink-0 ${goal === 'endurance' ? 'bg-[#CCFF00]' : 'bg-zinc-800'}`} />
                    <span>ENDORPHIN & STRESS DISCHARGE</span>
                  </button>
                </div>
              </div>

              {/* Timing constraint choice */}
              <div className="space-y-3">
                <span className="block text-[10px] font-black text-zinc-500 uppercase tracking-widest font-mono">2. MAIN SCHEDULE TIMING</span>
                <div className="grid grid-cols-3 gap-2">
                  {['morning', 'noon', 'evening'].map((time) => {
                    const label = time === 'morning' ? 'Sunrise' : time === 'noon' ? 'Noon Break' : 'Evening Dust';
                    return (
                      <button
                        key={time}
                        onClick={() => { setSchedule(time); setShowPlan(true); }}
                        className={`border-2 p-2.5 text-center text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                          schedule === time ? 'bg-[#CCFF00]/10 border-[#CCFF00] text-white shadow-[2px_2px_0px_0px_rgba(204,255,0,0.15)]' : 'bg-transparent border-zinc-900 text-zinc-400 hover:text-white'
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Experience level */}
              <div className="space-y-3">
                <span className="block text-[10px] font-black text-zinc-500 uppercase tracking-widest font-mono">3. ATHLETIC LEVEL</span>
                <div className="grid grid-cols-3 gap-2">
                  {['beginner', 'moderate', 'expert'].map((exp) => {
                    return (
                      <button
                        key={exp}
                        onClick={() => { setExperience(exp); setShowPlan(true); }}
                        className={`border-2 p-2.5 text-center text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                          experience === exp ? 'bg-[#CCFF00]/10 border-[#CCFF00] text-white shadow-[2px_2px_0px_0px_rgba(204,255,0,0.15)]' : 'bg-transparent border-zinc-900 text-zinc-400 hover:text-white'
                        }`}
                      >
                        {exp}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Manual submission trigger CTA */}
            <button
              onClick={() => setShowPlan(true)}
              className="mt-6 w-full bg-[#CCFF00] border-2 border-black hover:bg-white text-black font-black uppercase text-xs tracking-widest py-4 cursor-pointer shadow-[4px_4px_0px_0px_rgba(255,255,255,0.4)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-300"
            >
              Analyze Answers & Matching
            </button>

          </div>

          {/* Results Plan Display Panel */}
          <div className="lg:col-span-7 flex flex-col justify-between border-2 border-zinc-800 bg-[#0A0A0A] p-6 sm:p-8 space-y-6 shadow-[10px_10px_0px_0px_rgba(250,250,250,0.05)]">
            
            {/* If quiz has not been generated or triggered yet */}
            {!showPlan ? (
              <div className="flex flex-col items-center justify-center py-20 text-center h-full">
                <div className="h-12 w-12 border-2 border-dashed border-[#CCFF00]/40 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-[#CCFF00] animate-pulse" />
                </div>
                <h4 className="text-xs font-black text-zinc-300 uppercase tracking-widest font-mono">Interactive Advice Preview</h4>
                <p className="mt-2 text-xs text-zinc-500 max-w-sm">
                  Choose your targets on the left side to compile a customized fitness track immediately.
                </p>
              </div>
            ) : (
              <div className="space-y-6 h-full flex flex-col justify-between">
                
                {/* Outline structure content */}
                <div className="space-y-4">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-black text-[#CCFF00] uppercase tracking-[0.2em] font-mono">
                      SYSTEM RECOMMENDED TRACK FOR YOU
                    </span>
                  </div>

                  <div>
                    <h4 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">{plan.title}</h4>
                    <p className="mt-2 text-xs text-zinc-400 max-w-xl leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Recommendation table bullet lists */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-zinc-900 py-6 my-2 font-sans">
                    <div className="space-y-1">
                      <span className="text-[9px] text-zinc-500 uppercase font-black font-mono tracking-wider">Coach Partner</span>
                      <span className="block text-xs font-bold text-white uppercase">
                        🏆 {plan.coachName}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[9px] text-zinc-500 uppercase font-black font-mono tracking-wider">Primary Facility</span>
                      <span className="block text-xs font-bold text-white uppercase">
                        📍 {plan.primaryBranch}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[9px] text-zinc-500 uppercase font-black font-mono tracking-wider">Active Weekly Cycle</span>
                      <span className="block text-xs font-bold text-[#CCFF00] leading-tight uppercase">
                        ⏱️ {plan.weeklyRecommendation}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[9px] text-zinc-500 uppercase font-black font-mono tracking-wider">Recovery Diet Priority</span>
                      <span className="block text-xs font-bold text-zinc-300 leading-tight uppercase">
                        🥬 {plan.recoveryFocus}
                      </span>
                    </div>
                  </div>
                </div>

                {/* List recommended classes that fit the plan */}
                <div className="space-y-4">
                  <span className="block text-[10px] text-zinc-500 uppercase font-black tracking-widest font-mono">
                    COMPATIBLE SQUAD SLOTS
                  </span>
                  
                  <div className="flex flex-col gap-2.5 font-mono">
                    {plan.matches.map((match) => (
                      <div
                        key={match.id}
                        className="flex items-center justify-between bg-black p-3.5 border border-zinc-900 hover:border-[#CCFF00]/30 transition-all"
                      >
                        <div className="text-left">
                          <span className="block text-[9px] text-[#CCFF00] uppercase font-black tracking-wider">{match.category} • {match.day}</span>
                          <span className="text-xs font-bold text-zinc-200">{match.name}</span>
                        </div>
                        <div className="text-right">
                          <span className="block text-[9px] text-zinc-500 uppercase font-medium">{match.time}</span>
                          <span className="text-[9px] font-black text-zinc-400">{match.trainer.toUpperCase()}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        const target = document.getElementById('schedule');
                        if (target) target.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-1.5 text-xs text-[#CCFF00] hover:text-white font-black uppercase tracking-wider transition-all cursor-pointer"
                    >
                      <span>Lock squad seats on schedule board</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
