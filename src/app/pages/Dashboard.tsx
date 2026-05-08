import { Navigation } from '../components/Navigation';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Play, Calendar, Flame, Clock, Award } from 'lucide-react';
import { Link } from 'react-router';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
      <Navigation />

      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-12">
          <h1 className="text-5xl mb-4 text-white">Guten Morgen, Alex</h1>
          <p className="text-xl text-white/60">Bereit für dein Training?</p>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-[#1ED760]/20 to-[#1A1A2E]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl text-white">Wöchlicher Fortschritt</h3>
              <Flame className="text-[#1ED760]" size={32} />
            </div>
            <div className="text-5xl font-bold mb-2 text-white">75%</div>
            <p className="text-white/60">3 von 4 Workouts absolviert</p>
            <div className="mt-6 h-2 bg-[#0A0A0A] rounded-full overflow-hidden">
              <div className="h-full bg-[#1ED760] w-3/4" />
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl text-white">Diese Woche</h3>
              <Clock className="text-[#00BCD4]" size={32} />
            </div>
            <div className="text-5xl font-bold mb-2 text-white">4.5h</div>
            <p className="text-white/60">Trainingszeit</p>
          </Card>

          <Card>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl text-white">Streak</h3>
              <Award className="text-[#1ED760]" size={32} />
            </div>
            <div className="text-5xl font-bold mb-2 text-white">12</div>
            <p className="text-white/60">Tage in Folge</p>
          </Card>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-[#1ED760]/10 to-[#1A1A2E]">
            <div className="flex items-start justify-between mb-8">
              <div>
                <p className="text-[#1ED760] mb-2">HEUTE</p>
                <h2 className="text-3xl mb-4 text-white">Cardio & Core</h2>
                <div className="flex gap-8 text-white/60">
                  <div className="flex items-center gap-2">
                    <Clock size={20} />
                    <span>45 Min</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame size={20} />
                    <span>450 kcal</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#1ED760] rounded-full p-4">
                <Play size={32} fill="#0A0A0A" className="text-[#0A0A0A]" />
              </div>
            </div>
            <Link to="/workout">
              <Button variant="primary" className="w-full">
                Training starten
              </Button>
            </Link>
          </Card>

          <Card>
            <div className="flex items-start justify-between mb-8">
              <div>
                <h2 className="text-2xl mb-6 text-white">Kommende Workouts</h2>
                <div className="space-y-4">
                  {[
                    { day: 'Di', name: 'Krafttraining Oberkörper', duration: '60 Min' },
                    { day: 'Do', name: 'HIIT & Mobility', duration: '40 Min' },
                    { day: 'Sa', name: 'Long Run', duration: '90 Min' }
                  ].map((workout, i) => (
                    <div key={i} className="flex items-center gap-4 pb-4 border-b border-white/10 last:border-0">
                      <div className="w-12 h-12 bg-[#0A0A0A] rounded-lg flex items-center justify-center text-[#1ED760]">
                        {workout.day}
                      </div>
                      <div className="flex-1">
                        <div className="text-white">{workout.name}</div>
                        <div className="text-sm text-white/60">{workout.duration}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/training">
              <Button variant="outline" className="w-full">
                <Calendar size={20} className="inline mr-2" />
                Wochenplan ansehen
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
