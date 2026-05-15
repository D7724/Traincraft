import { Navigation } from '../components/Navigation';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ExerciseStatus } from '../components/ExerciseStatus';
import { useCountdown } from '../hooks/useCountdown';
import { useState, useCallback } from 'react';
import { Play, Pause, SkipForward, RotateCcw, ArrowRight, Timer } from 'lucide-react';

interface Exercise {
  name: string;
  sets: string;
  duration: string;
  seconds: number;
}

const EXERCISES: Exercise[] = [
  { name: 'Warm-up: Jumping Jacks', sets: '1x', duration: '3 Min', seconds: 180 },
  { name: 'Burpees', sets: '3x15', duration: '12 Min', seconds: 120 },
  { name: 'Mountain Climbers', sets: '3x20', duration: '8 Min', seconds: 90 },
  { name: 'Plank Hold', sets: '3x60s', duration: '6 Min', seconds: 60 },
  { name: 'Russian Twists', sets: '3x30', duration: '8 Min', seconds: 90 },
  { name: 'Cool-down: Stretching', sets: '1x', duration: '8 Min', seconds: 180 },
];

export function Workout() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState<number[]>([]);
  const [workoutDone, setWorkoutDone] = useState(false);

  const currentExercise = EXERCISES[currentIndex];

  const advance = useCallback(() => {
    setCompleted((prev) => {
      if (prev.includes(currentIndex)) return prev;
      return [...prev, currentIndex];
    });
    if (currentIndex < EXERCISES.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setWorkoutDone(true);
    }
  }, [currentIndex]);

  const timer = useCountdown({
    duration: currentExercise?.seconds ?? 0,
    onComplete: advance,
  });

  const handleStart = () => {
    if (timer.timeLeft === 0) {
      timer.restart();
    } else {
      timer.start();
    }
  };

  const handleSkip = () => {
    timer.pause();
    advance();
  };

  const handleResetWorkout = () => {
    timer.pause();
    setCurrentIndex(0);
    setCompleted([]);
    setWorkoutDone(false);
  };

  const handleExerciseClick = (index: number) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
    timer.reset();
  };

  const totalProgress = ((completed.length + (timer.timeLeft > 0 && timer.timeLeft < currentExercise?.seconds ? 1 : 0)) / EXERCISES.length) * 100;

  const totalSeconds = EXERCISES.reduce((sum, e) => sum + e.seconds, 0);
  const elapsedSeconds = EXERCISES.slice(0, currentIndex).reduce((sum, e) => sum + e.seconds, 0) + (currentExercise.seconds - timer.timeLeft);
  const totalFormatted = `${String(Math.floor(totalSeconds / 60))}:${String(totalSeconds % 60).padStart(2, '0')}`;
  const elapsedFormatted = `${String(Math.floor(elapsedSeconds / 60))}:${String(elapsedSeconds % 60).padStart(2, '0')}`;

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
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - (workoutDone ? 100 : totalProgress) / 100)}`}
                    className="transition-all duration-500"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">{workoutDone ? 100 : Math.round(totalProgress)}%</span>
                </div>
              </div>
              <div>
                <div className="text-sm text-white/60 mb-1">FORTSCHRITT</div>
                <div className="text-2xl font-bold text-white">
                  {completed.length}/{EXERCISES.length} Übungen
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {timer.isRunning ? (
                <button
                  onClick={timer.pause}
                  className="w-16 h-16 bg-[#00BCD4] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_-5px_#00BCD4] active:scale-95"
                >
                  <Pause size={24} fill="#0A0A0A" className="text-[#0A0A0A]" />
                </button>
              ) : (
                <button
                  onClick={handleStart}
                  className="w-16 h-16 bg-[#1ED760] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_-5px_#1ED760] active:scale-95"
                >
                  <Play size={24} fill="#0A0A0A" className="text-[#0A0A0A] ml-0.5" />
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-white/40">Workout-Zeit</span>
                <span className="text-xs text-white/30">{elapsedFormatted} / {totalFormatted}</span>
              </div>
              <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#1ED760] to-[#1ED760]/60 rounded-full transition-all duration-500"
                  style={{ width: `${workoutDone ? 100 : totalProgress}%` }}
                />
              </div>
            </div>
            {!workoutDone && (
              <>
                <button
                  onClick={handleSkip}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-all duration-300 text-sm"
                >
                  <SkipForward size={16} />
                  Überspringen
                </button>
                <button
                  onClick={timer.toggle}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 text-sm ${
                    timer.isRunning
                      ? 'bg-[#00BCD4]/10 text-[#00BCD4] hover:bg-[#00BCD4]/20'
                      : 'text-white/40 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Timer size={16} />
                  {timer.isRunning ? 'Pause' : timer.timeLeft === 0 ? 'Starten' : 'Fortsetzen'}
                </button>
              </>
            )}
          </div>
        </Card>

        {currentExercise && !workoutDone && (
          <Card glass className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 [--delay:150ms]">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-white/40">AKTUELLE ÜBUNG</div>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${timer.isRunning ? 'bg-[#00BCD4] animate-pulse' : 'bg-white/30'}`} />
                <span className={`text-lg font-bold tabular-nums ${timer.isRunning ? 'text-[#00BCD4]' : 'text-white'}`}>
                  {timer.formatted}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-1">{currentExercise.name}</h3>
                <div className="flex gap-4 text-sm text-white/40">
                  <span>{currentExercise.sets}</span>
                  <span>•</span>
                  <span>{currentExercise.duration}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-[#00BCD4] tabular-nums">{timer.formatted}</div>
                <div className="text-xs text-white/30 mt-1">{Math.round(timer.progress)}%</div>
              </div>
            </div>
            <div className="mt-4 h-3 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#00BCD4] to-[#00BCD4]/60 rounded-full transition-all duration-1000"
                style={{ width: `${timer.progress}%` }}
              />
            </div>
          </Card>
        )}

        <div className="space-y-3 mb-12">
          {EXERCISES.map((exercise, i) => {
            const isCompleted = completed.includes(i);
            const isActive = currentIndex === i && !isCompleted && !workoutDone;
            return (
              <ExerciseStatus
                key={i}
                name={exercise.name}
                sets={exercise.sets}
                duration={exercise.duration}
                seconds={exercise.seconds}
                index={i}
                isActive={isActive}
                isCompleted={isCompleted}
                timeLeft={isActive ? timer.timeLeft : 0}
                progress={isActive ? timer.progress : 0}
                onClick={() => handleExerciseClick(i)}
              />
            );
          })}
        </div>

        {workoutDone && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
            <Card glass>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#1ED760]/20 flex items-center justify-center">
                  <Timer size={32} className="text-[#1ED760]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Workout abgeschlossen!</h2>
                  <p className="text-white/60">Alle {EXERCISES.length} Übungen erledigt</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="primary" className="flex-1 py-6 text-xl group">
                  Fertig
                  <ArrowRight size={24} className="ml-2 inline transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  onClick={handleResetWorkout}
                  className="flex items-center gap-2"
                >
                  <RotateCcw size={20} />
                  Wiederholen
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
