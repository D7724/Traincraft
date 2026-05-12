import { Navigation } from '../components/Navigation';
import { Card } from '../components/Card';
import { TrendingUp, Flame, Clock, Award, Zap, Target, Trophy, Star, Dumbbell, Timer, Footprints } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, Tooltip, Cell } from 'recharts';

export function Progress() {
  const weeklyData = [
    { day: 'Mo', minutes: 45, calories: 450 },
    { day: 'Di', minutes: 0, calories: 0 },
    { day: 'Mi', minutes: 60, calories: 380 },
    { day: 'Do', minutes: 0, calories: 0 },
    { day: 'Fr', minutes: 55, calories: 410 },
    { day: 'Sa', minutes: 90, calories: 680 },
    { day: 'So', minutes: 45, calories: 180 }
  ];

  const monthlyProgress = [
    { week: 'W1', completion: 75 },
    { week: 'W2', completion: 100 },
    { week: 'W3', completion: 50 },
    { week: 'W4', completion: 75 }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
      <Navigation />

      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-5xl mb-4 text-white">Fortschritt & Statistiken</h1>
          <p className="text-xl text-white/60">Deine Erfolge im Überblick</p>
        </div>

        <div className="grid grid-cols-4 gap-8 mb-12">
          <Card glass className="animate-in fade-in slide-in-from-bottom-4 duration-500 [--delay:100ms]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white/60">Diese Woche</h3>
              <div className="w-10 h-10 rounded-xl bg-[#1ED760]/10 flex items-center justify-center">
                <Clock className="text-[#1ED760]" size={20} />
              </div>
            </div>
            <div className="flex items-end gap-1">
              <div className="text-4xl font-bold text-white">4.5</div>
              <div className="text-lg font-bold text-[#1ED760] mb-1">h</div>
            </div>
          </Card>

          <Card glass className="animate-in fade-in slide-in-from-bottom-4 duration-500 [--delay:200ms]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white/60">Verbrannt</h3>
              <div className="w-10 h-10 rounded-xl bg-[#00BCD4]/10 flex items-center justify-center">
                <Flame className="text-[#00BCD4]" size={20} />
              </div>
            </div>
            <div className="flex items-end gap-1">
              <div className="text-4xl font-bold text-white">2,100</div>
              <div className="text-lg font-bold text-[#00BCD4] mb-1">kcal</div>
            </div>
          </Card>

          <Card glass className="animate-in fade-in slide-in-from-bottom-4 duration-500 [--delay:300ms]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white/60">Completion</h3>
              <div className="w-10 h-10 rounded-xl bg-[#1ED760]/10 flex items-center justify-center">
                <TrendingUp className="text-[#1ED760]" size={20} />
              </div>
            </div>
            <div className="flex items-end gap-1">
              <div className="text-4xl font-bold text-white">75</div>
              <div className="text-lg font-bold text-[#1ED760] mb-1">%</div>
            </div>
          </Card>

          <Card glass className="animate-in fade-in slide-in-from-bottom-4 duration-500 [--delay:400ms]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white/60">Streak</h3>
              <div className="w-10 h-10 rounded-xl bg-[#1ED760]/10 flex items-center justify-center">
                <Award className="text-[#1ED760]" size={20} />
              </div>
            </div>
            <div className="flex items-end gap-1">
              <div className="text-4xl font-bold text-white">12</div>
              <div className="text-lg font-bold text-[#1ED760] mb-1">Tage</div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <Card glass className="animate-in fade-in slide-in-from-bottom-4 duration-500 [--delay:500ms]">
            <h2 className="text-2xl mb-8 text-white">Wöchentliche Aktivität</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyData} barCategoryGap={12}>
                <XAxis dataKey="day" stroke="#ffffff20" tick={{ fill: '#ffffff60', fontSize: 13 }} axisLine={false} tickLine={false} />
                <YAxis stroke="#ffffff20" tick={{ fill: '#ffffff40', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    background: '#1A1A2E',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    color: '#fff',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.3)'
                  }}
                  cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                />
                <Bar dataKey="minutes" radius={[8, 8, 0, 0]} maxBarSize={40}>
                  {weeklyData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={entry.minutes > 0 ? '#1ED760' : 'rgba(255,255,255,0.05)'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card glass className="animate-in fade-in slide-in-from-bottom-4 duration-500 [--delay:600ms]">
            <h2 className="text-2xl mb-8 text-white">Monatliche Completion Rate</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyProgress}>
                <XAxis dataKey="week" stroke="#ffffff20" tick={{ fill: '#ffffff60', fontSize: 13 }} axisLine={false} tickLine={false} />
                <YAxis domain={[0, 100]} stroke="#ffffff20" tick={{ fill: '#ffffff40', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    background: '#1A1A2E',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    color: '#fff',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.3)'
                  }}
                />
                <defs>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#1ED760" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#1ED760" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <Line
                  type="monotone"
                  dataKey="completion"
                  stroke="url(#lineGradient)"
                  strokeWidth={3}
                  dot={{ fill: '#1ED760', r: 6, strokeWidth: 2, stroke: '#0A0A0A' }}
                  activeDot={{ fill: '#1ED760', r: 8, strokeWidth: 2, stroke: '#0A0A0A' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        <Card glass className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500 [--delay:700ms]">
          <h2 className="text-2xl mb-8 text-white">Achievements</h2>
          <div className="grid grid-cols-4 gap-6">
              {[
                { icon: Flame, title: '7-Tage Streak', unlocked: true },
                { icon: Dumbbell, title: '50 Workouts', unlocked: true },
                { icon: Zap, title: 'Early Bird', unlocked: true },
                { icon: Target, title: '100% Woche', unlocked: false },
                { icon: Footprints, title: '100km Laufen', unlocked: false },
                { icon: Timer, title: '50h Training', unlocked: false },
                { icon: Star, title: '30-Tage Streak', unlocked: false },
                { icon: Trophy, title: 'Champion', unlocked: false }
              ].map((achievement, i) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={i}
                    className={`group p-6 rounded-xl text-center transition-all duration-300 ${
                      achievement.unlocked
                        ? 'bg-gradient-to-br from-[#1ED760]/10 to-transparent border border-[#1ED760]/10 hover:border-[#1ED760]/30 hover:shadow-[0_0_20px_-8px_#1ED760]'
                        : 'bg-white/[0.03] border border-white/5 opacity-40 hover:opacity-60'
                    }`}
                  >
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-3 transition-all duration-300 group-hover:scale-110 ${
                      achievement.unlocked
                        ? 'bg-[#1ED760]/15 text-[#1ED760] group-hover:bg-[#1ED760]/25'
                        : 'bg-white/5 text-white/30'
                    }`}>
                      <Icon size={28} />
                    </div>
                    <div className={`text-sm font-semibold ${achievement.unlocked ? 'text-white' : 'text-white/50'}`}>
                      {achievement.title}
                    </div>
                  </div>
                );
              })}
          </div>
        </Card>
      </div>
    </div>
  );
}
