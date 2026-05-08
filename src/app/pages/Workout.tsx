import { Navigation } from '../components/Navigation';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { useState } from 'react';
import { CheckCircle2, Circle, Play, Pause } from 'lucide-react';

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
        <div className="mb-12">
          <h1 className="text-5xl mb-4 text-white">Cardio & Core</h1>
          <p className="text-xl text-white/60">45 Minuten • 450 kcal</p>
        </div>

        <Card className="mb-8 bg-gradient-to-r from-[#1ED760]/20 to-[#1A1A2E]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-sm text-white/60 mb-2">FORTSCHRITT</div>
              <div className="text-3xl font-bold text-white">{Math.round(progress)}%</div>
            </div>
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="w-20 h-20 bg-[#1ED760] rounded-full flex items-center justify-center hover:bg-[#1ed760dd] transition-colors"
            >
              {isRunning ? (
                <Pause size={32} fill="#0A0A0A" className="text-[#0A0A0A]" />
              ) : (
                <Play size={32} fill="#0A0A0A" className="text-[#0A0A0A]" />
              )}
            </button>
          </div>
          <div className="h-3 bg-[#0A0A0A] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#1ED760] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </Card>

        <div className="space-y-4 mb-12">
          {exercises.map((exercise, i) => (
            <Card
              key={i}
              className={`cursor-pointer transition-all ${
                completedExercises.includes(i)
                  ? 'bg-[#1A1A2E] opacity-60'
                  : currentExercise === i
                  ? 'bg-gradient-to-r from-[#1ED760]/20 to-[#1A1A2E] border-2 border-[#1ED760]'
                  : 'bg-[#1A1A2E] hover:bg-[#252540]'
              }`}
              onClick={() => {
                setCurrentExercise(i);
                toggleComplete(i);
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="text-[#1ED760]">
                    {completedExercises.includes(i) ? (
                      <CheckCircle2 size={32} />
                    ) : (
                      <Circle size={32} />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-white">{exercise.name}</h3>
                    <div className="flex gap-6 text-white/60">
                      <span>{exercise.sets}</span>
                      <span>•</span>
                      <span>{exercise.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="text-4xl font-bold text-white/20">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {progress === 100 && (
          <Button variant="primary" className="w-full py-6 text-xl">
            Training abschließen
          </Button>
        )}
      </div>
    </div>
  );
}
