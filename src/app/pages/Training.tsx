import { Navigation } from '../components/Navigation';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Clock, Flame, Play } from 'lucide-react';
import { Link } from 'react-router';

export function Training() {
  const weekDays = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
  const workouts = [
    { day: 0, name: 'Cardio & Core', duration: '45 Min', calories: 450, completed: true },
    { day: 1, name: 'Krafttraining Oberkörper', duration: '60 Min', calories: 380, completed: false },
    { day: 2, name: 'Ruhetag', duration: '-', calories: 0, completed: false },
    { day: 3, name: 'HIIT & Mobility', duration: '40 Min', calories: 520, completed: false },
    { day: 4, name: 'Krafttraining Unterkörper', duration: '55 Min', calories: 410, completed: false },
    { day: 5, name: 'Long Run', duration: '90 Min', calories: 680, completed: false },
    { day: 6, name: 'Yoga & Stretching', duration: '45 Min', calories: 180, completed: false }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
      <Navigation />

      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-12">
          <h1 className="text-5xl mb-4 text-white">Trainingsplan</h1>
          <p className="text-xl text-white/60">KW 18 • 5. - 11. Mai 2026</p>
        </div>

        <div className="grid grid-cols-7 gap-4 mb-8">
          {weekDays.map((day, i) => (
            <div
              key={i}
              className={`text-center p-4 rounded-lg ${
                i === 0 ? 'bg-[#1ED760] text-[#0A0A0A]' : 'bg-[#1A1A2E] text-white/60'
              }`}
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6">
          {workouts.map((workout, i) => (
            <Card
              key={i}
              className={`${
                workout.completed
                  ? 'bg-[#1A1A2E] opacity-60'
                  : i === 0
                  ? 'bg-gradient-to-r from-[#1ED760]/20 to-[#1A1A2E] border-2 border-[#1ED760]'
                  : 'bg-[#1A1A2E]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                  <div className="text-center min-w-[80px]">
                    <div className="text-2xl font-bold text-[#1ED760] mb-1">
                      {weekDays[workout.day]}
                    </div>
                    <div className="text-sm text-white/60">Tag {workout.day + 1}</div>
                  </div>

                  <div>
                    <h3 className="text-2xl mb-3 text-white">{workout.name}</h3>
                    {workout.duration !== '-' && (
                      <div className="flex gap-6 text-white/60">
                        <div className="flex items-center gap-2">
                          <Clock size={18} />
                          <span>{workout.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Flame size={18} />
                          <span>{workout.calories} kcal</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  {workout.completed ? (
                    <div className="text-[#1ED760]">✓ Abgeschlossen</div>
                  ) : workout.duration !== '-' ? (
                    i === 0 ? (
                      <Link to="/workout">
                        <Button variant="primary" className="gap-2">
                          <Play size={20} />
                          Starten
                        </Button>
                      </Link>
                    ) : (
                      <Button variant="outline">Details</Button>
                    )
                  ) : null}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
