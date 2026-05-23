import { useState } from 'react';
import { Target, Zap, Waves, Activity, AlertCircle, Dumbbell } from 'lucide-react';

interface Program {
  id: string;
  name: string;
  title: string;
  calories: number;
  duration: string;
  intensity: number; // out of 10
  focus: string[];
  movements: string[];
  equipment: string;
  description: string;
  ethiopianMusicVibe: string;
}

const PROGRAMS: Program[] = [
  {
    id: 'taebo',
    name: 'Taebo Cardio Blast',
    title: 'High-Impact Martial Arts Cardio',
    calories: 850,
    duration: '60-70 mins',
    intensity: 9,
    focus: ['Cardiovascular Stamina', 'Lower Body Agility', 'Upper Body Speed', 'Mental Grip'],
    movements: ['Front-Kick & Jab Combos', 'Side Kicks', 'Hook punches', 'Double cross guards', 'Bob and weave undercuts'],
    equipment: 'Athletic sports apparel, clean indoor trainers, high energy',
    description: 'Admas legendary Taebo program fuses rapid-fire kickboxing drills with bodyweight cardio intervals. Set to energetic high-tempo African dance and Amharic remixes, it burns massive calories, strengthens your heart, and releases stress completely.',
    ethiopianMusicVibe: 'Tizita & Guragigna modern fast-tempo club syncopations'
  },
  {
    id: 'aerobics',
    name: 'Rhythm Aerobics',
    title: 'Dance Choreography & High Energy Rhythm',
    calories: 680,
    duration: '60 mins',
    intensity: 7,
    focus: ['Rhythm & Coordination', 'Thigh & Calf Toning', 'Lung Capacity', 'Stress Buster'],
    movements: ['Step-Touch grapevine', 'High knee jumps', 'Double heel taps', 'Rhythm hip pivots', 'Bounce kicks'],
    equipment: 'Stretchy activewear, micro-towel, massive smile',
    description: 'Our high-tempo group step-aerobics is a celebration of physical movement and collective joy. Led by Addis Ababa’s finest choreographers, you’ll master footwork patterns that tone your entire body while grooving to infectious electronic rhythm beats.',
    ethiopianMusicVibe: 'Wello & Tigrigna energetic rhythm dance drum tracks'
  },
  {
    id: 'strength',
    name: 'Strength & Conditioning',
    title: 'Fat-To-Muscle High Tone Conditioning',
    calories: 600,
    duration: '60 mins',
    intensity: 8,
    focus: ['Full Body Muscle Power', 'Metabolic Weight Loss', 'Joint Resilience'],
    movements: ['Squat hold punch combos', 'Plank climbers', 'Explosive lunge kicks', 'V-up holds', 'Mountain pushes'],
    equipment: 'Yoga mat, light handweights (optional, provided)',
    description: 'A structural full body workout focusing on explosive movements, high density isometric holds, and metabolic intervals. Ideal for developing lean muscle definition, stabilizing your spine posture, and speeding up your metabolism.',
    ethiopianMusicVibe: 'Heavy bass organic Afro-house fusion'
  },
  {
    id: 'core',
    name: 'Core & Flex',
    title: 'Abs Sculpture & Joint Mobility',
    calories: 450,
    duration: '50-60 mins',
    intensity: 6,
    focus: ['6-Pack Ab Core Strength', 'Hip Flexor Mobility', 'Posture Rectification', 'Back Pain Alleviation'],
    movements: ['Russian twists', 'Bicycle kicks', 'Supermans', 'Low-plank rotations', 'Dynamic leg raises'],
    equipment: 'Clean personal gym towel, comfortable floor support',
    description: 'Our specialized core program targets the deep abdominal wall, oblique systems, and lower back muscles. Essential for bolstering the balance needed for advanced high-kicks in Taebo and ensuring injury-free fitness longevity.',
    ethiopianMusicVibe: 'Ambient chill ethnic beats and down-tempo instrumental rhythm'
  }
];

export default function Workouts() {
  const [activeTab, setActiveTab] = useState('taebo');
  const program = PROGRAMS.find(p => p.id === activeTab) || PROGRAMS[0];

  return (
    <section id="workouts" className="relative bg-[#0A0A0A] py-24 border-b border-zinc-900">
      {/* Dynamic ambient highlight */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#CCFF00]/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title block */}
        <div className="text-left space-y-4">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-12 bg-[#CCFF00]"></span>
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#CCFF00] font-mono">CORE DISCIPLINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            EXPLORE THE <span className="stroke-text-heavy text-transparent font-display">ADMAS SYSTEMS</span>
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl leading-relaxed">
            Select an explosive fitness track tailored to your energy level and weight management goals. From elite martial arts cardio to rhythmic community aerobics.
          </p>
        </div>

        {/* Tab Buttons Selection Row */}
        <div className="mt-12 flex gap-3 border-b border-zinc-800 pb-8 overflow-x-auto scrollbar-none whitespace-nowrap scroll-smooth">
          {PROGRAMS.map((p) => {
            const isActive = p.id === activeTab;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`px-6 py-4 text-xs font-black uppercase tracking-widest transition-all duration-300 pointer border-2 cursor-pointer flex-shrink-0 ${
                  isActive
                    ? 'bg-[#CCFF00] border-black text-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] translate-x-[-2px] translate-y-[-2px]'
                    : 'bg-zinc-950 border-zinc-850 text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                {p.name}
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Info Card */}
          <div className="lg:col-span-7 flex flex-col justify-between border-2 border-zinc-850 bg-black/60 p-6 sm:p-10 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.05)]">
            <div className="space-y-8">
              <div>
                <span className="text-xs font-black text-[#CCFF00] uppercase tracking-[0.2em] font-mono">{program.title}</span>
                <h3 className="mt-2 text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">{program.name}</h3>
              </div>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                {program.description}
              </p>

              {/* Workout Foundational movements */}
              <div>
                <h4 className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-4 font-mono">KEY SYSTEM DRILLS</h4>
                <div className="flex flex-wrap gap-2.5">
                  {program.movements.map((move, i) => (
                    <span
                      key={i}
                      className="border border-zinc-800 bg-[#121212] px-4 py-2 text-xs text-zinc-300 font-mono"
                    >
                      {move}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Local Vibe Highlight */}
            <div className="mt-10 border border-[#CCFF00]/30 bg-[#CCFF00]/5 p-5">
              <div className="flex items-start gap-4">
                <Waves className="h-6 w-6 text-[#CCFF00] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-black text-[#CCFF00] uppercase tracking-[0.15em] leading-none">ETHIO RHYTHM COMPATIBILITY</h5>
                  <p className="mt-2 text-xs text-zinc-400 leading-normal font-sans">
                    Propelled by: <strong className="text-white font-bold">{program.ethiopianMusicVibe}</strong>—synchronized specifically to sustain athletic momentum and drive endorphin levels.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Stats and Requirements Block */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Metrics */}
            <div className="border-2 border-zinc-800 bg-[#0A0A0A] p-6 flex flex-col justify-between h-full space-y-8 shadow-[8px_8px_0px_0px_rgba(204,255,0,0.15)]">
              <h4 className="text-xs font-black text-white uppercase tracking-[0.15em] font-mono">WORKOUT INDEX</h4>
              
              {/* Calories Metric */}
              <div className="flex items-center justify-between border-b border-zinc-900 pb-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00]">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-zinc-500 uppercase font-mono">AV CALORIE BURN</span>
                    <span className="text-xs font-black text-zinc-300 uppercase tracking-widest font-mono">60 MIN SAMPLE</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-3xl font-black text-[#CCFF00] italic leading-none">~{program.calories}</span>
                  <span className="text-[9px] text-zinc-500 uppercase font-semibold font-mono">KCAL / HOUR</span>
                </div>
              </div>

              {/* Intensity level progression */}
              <div className="space-y-3 border-b border-zinc-900 pb-5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-500 uppercase font-black tracking-wider">INTENSITY BURN RATING</span>
                  <span className="text-[#CCFF00] font-black">{program.intensity} / 10 ({program.intensity >= 8 ? 'EXTREME' : 'HIGH'})</span>
                </div>
                <div className="flex h-2 w-full overflow-hidden bg-zinc-900 border border-zinc-800">
                  <div
                    className="h-full bg-[#CCFF00] transition-all duration-500"
                    style={{ width: `${program.intensity * 10}%` }}
                  />
                </div>
              </div>

              {/* Focus Goals list */}
              <div>
                <span className="block text-xs font-black text-zinc-400 uppercase tracking-widest mb-4 font-mono">ATHLETIC TARGETS</span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-300">
                  {program.focus.map((target, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 bg-black border border-zinc-900 px-3 py-2 font-mono">
                      <Target className="h-4 w-4 text-[#CCFF00] shrink-0" />
                      <span>{target}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to Bring warning */}
              <div className="bg-zinc-950 p-4 border border-zinc-900 flex gap-3">
                <AlertCircle className="h-5 w-5 text-[#CCFF00] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] font-black text-zinc-300 uppercase leading-none font-mono">CLASS REQUIREMENTS</span>
                  <p className="mt-2 text-xs text-zinc-500 leading-normal">
                    {program.equipment}
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
