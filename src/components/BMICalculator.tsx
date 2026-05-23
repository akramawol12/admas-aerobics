import { useState, useMemo } from 'react';
import { Dumbbell, Activity, Heart, HelpCircle, Utensils } from 'lucide-react';

export default function BMICalculator() {
  const [weight, setWeight] = useState(70); // kg
  const [height, setHeight] = useState(170); // cm
  const [activity, setActivity] = useState('taebo'); // taebo vs aerobics

  // Calculate BMI
  const bmiResult = useMemo(() => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const value = Math.round(bmi * 10) / 10;
    
    let classification = '';
    let colorClass = '';
    let description = '';
    let dietAdvice = '';

    if (bmi < 18.5) {
      classification = 'Underweight (ቀጭን)';
      colorClass = 'text-amber-400 bg-amber-950/40 border-amber-500/20';
      description = 'Your weight is low relative to your height. Building lean muscle mass via conditioning is recommended.';
      dietAdvice = 'Focus on complex carbohydrates and clean local proteins. Enjoy high-density Teff porridge with milk, plenty of boiled eggs, peanut-butter enriched locally sourced oats, and custom protein-dense Shiro dishes to heal muscle tissue.';
    } else if (bmi >= 18.5 && bmi < 25) {
      classification = 'Normal, Healthy Weight (ጥሩ መለኪያ)';
      colorClass = 'text-emerald-400 bg-emerald-950/40 border-emerald-500/20';
      description = 'Incredible! You are within the absolute sweet spot for optimal heart and muscle longevity.';
      dietAdvice = 'Preserve your active cells by ordering fresh mango-avocado mixed juice (Spriz) from local Addis juice bars, alongside lean chicken breast (Doro), boiled fava beans (Ful), and fiber-rich lentils with Injera.';
    } else if (bmi >= 25 && bmi < 30) {
      classification = 'Overweight (ከመጠን በላይ)';
      colorClass = 'text-orange-400 bg-orange-950/40 border-orange-500/20';
      description = 'You are slightly above standard medical parameters. Combining Taebo 3 times/week will rapidly shred fat reserves.';
      dietAdvice = 'Optimize metabolic pathways by swapping refined white wheat items with pure iron-dense Teff Injera. Limit saturated local butter (Kibe), choose vegetable-rich shiro stews, and rehydrate abundantly with pure water.';
    } else {
      classification = 'High Risk Obese (ከመጠን ያለፈ ወፍራም)';
      colorClass = 'text-[#FF2A85] bg-[#FF2A85]/10 border-[#FF2A85]/25';
      description = 'High BMI value. Consistent group aerobics and steady cardio kicks in Taebo are perfect low-impact start guidelines.';
      dietAdvice = 'We highly recommend consulting our head coach Elias for a structured program. In your diet, focus heavily on green leafy local vegetables (Gomen), restrict heavy alcohol and fatty meats, and fuel with light vegetable soups.';
    }

    // Estimate active calorie burn for a 1.5 hr session
    const activityFactor = activity === 'taebo' ? 850 : 680;
    const estimatedBurnt = Math.round((activityFactor * 1.5) * (weight / 70));

    return { value, classification, colorClass, description, dietAdvice, estimatedBurnt };
  }, [weight, height, activity]);

  return (
    <section id="calculator" className="relative bg-[#0A0A0A] py-24 border-b border-zinc-900">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#CCFF00]/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-left space-y-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-12 bg-[#CCFF00]"></span>
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#CCFF00] font-mono flex items-center gap-1">
              <Activity className="h-4.5 w-4.5" /> Diagnostic Metric calculator
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
            BMI & ADMAS PERFORMANCE
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl leading-relaxed">
            Input your parameters to evaluate your current standing and calculate real calorie-burning metrics synchronized to Admas active workout routines.
          </p>
        </div>

        {/* Content Box layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Inputs Section */}
          <div className="lg:col-span-6 border-2 border-zinc-850 bg-black/60 p-6 sm:p-8 space-y-8 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.05)]">
            
            <h4 className="text-xs font-black text-white uppercase tracking-widest flex items-center gap-2 border-b border-zinc-900 pb-4 font-mono">
              <Dumbbell className="h-4.5 w-4.5 text-[#CCFF00]" />
              ADJUST METRIC PARAMETERS
            </h4>

            {/* Weight Slider */}
            <div className="space-y-3 font-mono">
              <div className="flex justify-between text-xs font-black">
                <span className="text-zinc-400 uppercase tracking-widest">BODYWEIGHT</span>
                <span className="text-[#CCFF00] text-sm font-black">{weight} KG</span>
              </div>
              <input
                type="range"
                min="40"
                max="160"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full h-2 bg-zinc-900 accent-[#CCFF00] cursor-pointer"
              />
              <div className="flex justify-between text-[9px] text-zinc-500 font-bold uppercase tracking-wider">
                <span>40 KG</span>
                <span>IDEAL ACCUCHECK</span>
                <span>160 KG</span>
              </div>
            </div>

            {/* Height Slider */}
            <div className="space-y-3 font-mono">
              <div className="flex justify-between text-xs font-black">
                <span className="text-zinc-400 uppercase tracking-widest">VERTICAL HEIGHT</span>
                <span className="text-[#CCFF00] text-sm font-black">{height} CM</span>
              </div>
              <input
                type="range"
                min="120"
                max="220"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full h-2 bg-zinc-900 accent-[#CCFF00] cursor-pointer"
              />
              <div className="flex justify-between text-[9px] text-zinc-500 font-bold uppercase tracking-wider">
                <span>120 CM</span>
                <span>STABILITY INDEX</span>
                <span>220 CM</span>
              </div>
            </div>

            {/* Routine selection */}
            <div className="space-y-3 font-mono">
              <label className="block text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                COMPARE TARGET ADMAS WORKOUT
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setActivity('taebo')}
                  className={`border-2 p-3.5 text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${
                    activity === 'taebo'
                      ? 'bg-[#CCFF00]/10 border-[#CCFF00] text-white shadow-[2px_2px_0px_0px_rgba(204,255,0,0.15)] font-black'
                      : 'bg-transparent border-zinc-900 text-zinc-400 hover:text-white'
                  }`}
                >
                  Taebo KickBlast
                </button>
                <button
                  type="button"
                  onClick={() => setActivity('aerobics')}
                  className={`border-2 p-3.5 text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${
                    activity === 'aerobics'
                      ? 'bg-[#CCFF00]/10 border-[#CCFF00] text-white shadow-[2px_2px_0px_0px_rgba(204,255,0,0.15)] font-black'
                      : 'bg-transparent border-zinc-900 text-zinc-400 hover:text-white'
                  }`}
                >
                  Step Aerobics
                </button>
              </div>
            </div>

          </div>

          {/* Diagnostic Display */}
          <div className="lg:col-span-6 flex flex-col justify-between border-2 border-zinc-800 bg-zinc-950 p-6 sm:p-8 space-y-6 shadow-[10px_10px_0px_0px_rgba(250,250,250,0.05)]">
            
            {/* Primary Result indicators */}
            <div className="space-y-5">
              <div className="flex items-center gap-2 font-mono">
                <div className="flex h-8 w-8 items-center justify-center bg-[#CCFF00]/10 text-[#CCFF00]">
                  <Activity className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-xs font-black text-white uppercase tracking-widest">
                  DIAGNOSTIC OVERVIEW
                </h4>
              </div>

              {/* Big value layout */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div>
                  <span className="block text-[9px] text-zinc-500 uppercase font-black font-mono tracking-wider">Estimated BMI index</span>
                  <span className="font-sans text-6xl font-black text-white tracking-tighter">
                    {bmiResult.value}
                  </span>
                </div>
                <div className="space-y-2 my-auto">
                  <span className={`inline-flex items-center border px-3 py-1 text-xs font-black font-mono ${bmiResult.colorClass}`}>
                    {bmiResult.classification.toUpperCase()}
                  </span>
                  <p className="text-xs text-zinc-400 max-w-sm font-sans leading-relaxed">
                    {bmiResult.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Estimated Active Burn */}
            <div className="bg-black border border-zinc-900 p-4.5 flex items-center justify-between font-mono">
              <div>
                <span className="text-[9px] text-zinc-500 uppercase font-black flex items-center gap-1.5">
                  <Heart className="h-3.5 w-3.5 text-[#FF2A85]" />
                  ENERGY CONSUMPTION BURN
                </span>
                <span className="text-xs text-zinc-400 block mt-1 uppercase">For 1.5 hr {activity === 'taebo' ? 'Taebo Kick' : 'Aerobics'}</span>
              </div>
              <div className="text-right">
                <span className="block text-2xl font-black text-[#CCFF00]">~{bmiResult.estimatedBurnt} KCAL</span>
                <span className="text-[8px] text-zinc-500 uppercase font-black tracking-widest">Hype Cardio rates</span>
              </div>
            </div>

            {/* Local recovery options */}
            <div className="bg-zinc-950 border-2 border-zinc-900 p-4.5 space-y-2.5">
              <span className="text-[9px] font-black text-[#CCFF00] uppercase tracking-widest flex items-center gap-1.5 leading-none font-mono">
                <Utensils className="h-4 w-4" />
                LOCAL RECOVERY RECOMMENDATIONS (አማራጭ ምግቦች)
              </span>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                {bmiResult.dietAdvice}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
