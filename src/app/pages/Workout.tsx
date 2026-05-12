import { Navigation } from '../components/Navigation';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { useState } from 'react';
import { CheckCircle2, Circle, Play, Pause, ArrowRight } from 'lucide-react';

export function Workout() {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);

  const exercises = [
    { name: 'Warm-up: Jumping Jacks', sets: '1x', duration: '3 Min' },
    { name: 'Burpees', sets: '3x15', duration: '12 Min' },
    { name: 'Mountain Climbers', sets: '3x20', duration: '8 Min' },
    { name: 'Plank Hold', sets: '3x60s', duration: '6 Min' },
    { name: 'Russian Twists', sets: '3x30', duration: '8 Min' },
    { name: 'Cool-down: Stretching', sets: '1x', duration: '8 Min' }
  ];

  const toggleComplete = (index: number) => {
    if (completedExercises.includes(index)) {
      setCompletedExercises(completedExercises.filter(i => i !== index));
    } else {
      setCompletedExercises([...completedExercises, index]);
    }
  };

  const progress = (completedExercises.length / exercises.length) * 100;

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
      <Navigation />

      <div className="max-w-5xl mx-auto px-8">
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-5xl mb-4 text-white">Cardio & Core</h1>
          <p className="text-xl text-white/60">45 Minuten • 450 kcal</p>
        </div>

        <Card glass className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 [--delay:100ms]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-6">
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24 -rotate-90" viewBox="0 0 96 96">
                  <circle cx="48" cy="48" r="40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
                  <circle
                    cx="48" cy="48" r="40" fill="none" stroke="#1ED760" strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - progress / 100)}`}
                    className="transition-all duration-500"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">{Math.round(progress)}%</span>
                </div>
              </div>
              <div>
                <div className="text-sm text-white/60 mb-1">FORTSCHRITT</div>
                <div className="text-2xl font-bold text-white">
                  {completedExercises.length}/{exercises.length} Übungen
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="w-16 h-16 bg-[#1ED760] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_-5px_#1ED760] active:scale-95"
            >
              {isRunning ? (
                <Pause size={24} fill="#0A0A0A" className="text-[#0A0A0A]" />
              ) : (
                <Play size={24} fill="#0A0A0A" className="text-[#0A0A0A] ml-0.5" />
              )}
            </button>
          </div>
        </Card>

        <div className="space-y-3 mb-12">
          {exercises.map((exercise, i) => {
            const isCompleted = completedExercises.includes(i);
            const isCurrent = currentExercise === i;
            return (
              <div
                key={i}
                className={`rounded-xl p-5 cursor-pointer transition-all duration-300 ${
                  isCompleted
                    ? 'bg-white/5 opacity-60'
                    : isCurrent
                    ? 'bg-white/5 backdrop-blur-xl border-2 border-[#1ED760]/50 shadow-[0_0_20px_-8px_#1ED760]'
                    : 'bg-white/5 backdrop-blur-xl border border-white/5 hover:border-white/10'
                }`}
                onClick={() => {
                  setCurrentExercise(i);
                  toggleComplete(i);
                }}
                style={{ animationDelay: `${150 + i * 80}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className={`transition-all duration-300 ${isCurrent ? 'scale-110' : ''}`}>
                      {isCompleted ? (
                        <CheckCircle2 size={28} className="text-[#1ED760]" />
                      ) : (
                        <Circle size={28} className="text-white/30" />
                      )}
                    </div>
                    <div>
                      <h3 className={`text-lg mb-1 font-medium transition-colors duration-300 ${
                        isCompleted ? 'text-white/50' : 'text-white'
                      }`}>
                        {exercise.name}
                      </h3>
                      <div className="flex gap-4 text-sm text-white/40">
                        <span>{exercise.sets}</span>
                        <span>•</span>
                        <span>{exercise.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className={`text-3xl font-bold transition-colors duration-300 ${
                    isCurrent ? 'text-[#1ED760]/30' : 'text-white/10'
                  }`}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {progress === 100 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Button variant="primary" className="w-full py-6 text-xl group">
              Training abschließen
              <ArrowRight size={24} className="ml-2 inline transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
