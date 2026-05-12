import { Navigation } from '../components/Navigation';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Play, Calendar, Flame, Clock, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
      <Navigation />

      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1ED760] to-[#1ED760]/60 flex items-center justify-center">
              <Flame size={28} className="text-[#0A0A0A]" />
            </div>
            <div>
              <h1 className="text-5xl text-white">Guten Morgen, Alex</h1>
              <p className="text-lg text-white/60">Bereit für dein Training?</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-12">
          <Card glass className="animate-in fade-in slide-in-from-bottom-4 duration-500 [--delay:100ms]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl text-white">Wöchlicher Fortschritt</h3>
              <div className="w-12 h-12 rounded-xl bg-[#1ED760]/10 flex items-center justify-center">
                <Flame className="text-[#1ED760]" size={24} />
              </div>
            </div>
            <div className="flex items-end gap-2 mb-2">
              <div className="text-5xl font-bold text-white">75</div>
              <div className="text-2xl font-bold text-[#1ED760] mb-1">%</div>
            </div>
            <p className="text-white/60 mb-6">3 von 4 Workouts absolviert</p>
            <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#1ED760] to-[#1ED760]/60 rounded-full w-3/4 transition-all duration-500" />
            </div>
          </Card>

          <Card glass className="animate-in fade-in slide-in-from-bottom-4 duration-500 [--delay:200ms]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl text-white">Diese Woche</h3>
              <div className="w-12 h-12 rounded-xl bg-[#00BCD4]/10 flex items-center justify-center">
                <Clock className="text-[#00BCD4]" size={24} />
              </div>
            </div>
            <div className="flex items-end gap-2 mb-2">
              <div className="text-5xl font-bold text-white">4.5</div>
              <div className="text-2xl font-bold text-[#00BCD4] mb-1">h</div>
            </div>
            <p className="text-white/60">Trainingszeit</p>
          </Card>

          <Card glass className="animate-in fade-in slide-in-from-bottom-4 duration-500 [--delay:300ms]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl text-white">Streak</h3>
              <div className="w-12 h-12 rounded-xl bg-[#1ED760]/10 flex items-center justify-center">
                <Award className="text-[#1ED760]" size={24} />
              </div>
            </div>
            <div className="flex items-end gap-2 mb-2">
              <div className="text-5xl font-bold text-white">12</div>
              <div className="text-2xl font-bold text-[#1ED760] mb-1">Tage</div>
            </div>
            <p className="text-white/60">Tage in Folge</p>
          </Card>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <Card glass className="animate-in fade-in slide-in-from-bottom-4 duration-500 [--delay:400ms]">
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#1ED760]/10 text-[#1ED760] text-xs font-bold px-3 py-1.5 rounded-full mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1ED760] animate-pulse" />
                  HEUTE
                </div>
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
              <Link to="/workout">
                <div className="w-16 h-16 rounded-full bg-[#1ED760] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_-5px_#1ED760] cursor-pointer">
                  <Play size={28} fill="#0A0A0A" className="text-[#0A0A0A] ml-0.5" />
                </div>
              </Link>
            </div>
            <Link to="/workout">
              <Button variant="primary" className="w-full group">
                Training starten
                <ArrowRight size={20} className="ml-2 inline transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </Card>

          <Card glass className="animate-in fade-in slide-in-from-bottom-4 duration-500 [--delay:500ms]">
            <div className="flex items-start justify-between mb-8">
              <div>
                <h2 className="text-2xl mb-6 text-white">Kommende Workouts</h2>
                <div className="space-y-4">
                  {[
                    { day: 'Di', name: 'Krafttraining Oberkörper', duration: '60 Min' },
                    { day: 'Do', name: 'HIIT & Mobility', duration: '40 Min' },
                    { day: 'Sa', name: 'Long Run', duration: '90 Min' }
                  ].map((workout, i) => (
                    <div key={i} className="flex items-center gap-4 pb-4 border-b border-white/5 last:border-0 group/workout">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#1ED760] font-bold transition-all duration-300 group-hover/workout:bg-[#1ED760]/10 group-hover/workout:scale-105">
                        {workout.day}
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium">{workout.name}</div>
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
