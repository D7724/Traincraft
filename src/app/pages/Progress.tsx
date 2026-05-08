import { Navigation } from '../components/Navigation';
import { Card } from '../components/Card';
import { TrendingUp, Flame, Clock, Award } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from 'recharts';

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
        <div className="mb-12">
          <h1 className="text-5xl mb-4 text-white">Fortschritt & Statistiken</h1>
          <p className="text-xl text-white/60">Deine Erfolge im Überblick</p>
        </div>

        <div className="grid grid-cols-4 gap-8 mb-12">
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white/60">Diese Woche</h3>
              <Clock className="text-[#1ED760]" size={24} />
            </div>
            <div className="text-4xl font-bold text-white">4.5h</div>
          </Card>

          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white/60">Verbrannt</h3>
              <Flame className="text-[#00BCD4]" size={24} />
            </div>
            <div className="text-4xl font-bold text-white">2,100</div>
            <div className="text-sm text-white/60">kcal</div>
          </Card>

          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white/60">Completion</h3>
              <TrendingUp className="text-[#1ED760]" size={24} />
            </div>
            <div className="text-4xl font-bold text-white">75%</div>
          </Card>

          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white/60">Streak</h3>
              <Award className="text-[#1ED760]" size={24} />
            </div>
            <div className="text-4xl font-bold text-white">12</div>
            <div className="text-sm text-white/60">Tage</div>
          </Card>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <Card>
            <h2 className="text-2xl mb-8 text-white">Wöchentliche Aktivität</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyData}>
                <XAxis
                  dataKey="day"
                  stroke="#ffffff40"
                  tick={{ fill: '#ffffff80' }}
                />
                <YAxis
                  stroke="#ffffff40"
                  tick={{ fill: '#ffffff80' }}
                />
                <Bar
                  dataKey="minutes"
                  fill="#1ED760"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card>
            <h2 className="text-2xl mb-8 text-white">Monatliche Completion Rate</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyProgress}>
                <XAxis
                  dataKey="week"
                  stroke="#ffffff40"
                  tick={{ fill: '#ffffff80' }}
                />
                <YAxis
                  stroke="#ffffff40"
                  tick={{ fill: '#ffffff80' }}
                />
                <Line
                  type="monotone"
                  dataKey="completion"
                  stroke="#1ED760"
                  strokeWidth={3}
                  dot={{ fill: '#1ED760', r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        <Card className="mt-8">
          <h2 className="text-2xl mb-8 text-white">Achievements</h2>
          <div className="grid grid-cols-4 gap-6">
            {[
              { icon: '🔥', title: '7-Tage Streak', unlocked: true },
              { icon: '💪', title: '50 Workouts', unlocked: true },
              { icon: '⚡', title: 'Early Bird', unlocked: true },
              { icon: '🎯', title: '100% Woche', unlocked: false },
              { icon: '🏃', title: '100km Laufen', unlocked: false },
              { icon: '⏱️', title: '50h Training', unlocked: false },
              { icon: '🌟', title: '30-Tage Streak', unlocked: false },
              { icon: '🏆', title: 'Champion', unlocked: false }
            ].map((achievement, i) => (
              <div
                key={i}
                className={`p-6 rounded-lg text-center ${
                  achievement.unlocked
                    ? 'bg-gradient-to-br from-[#1ED760]/20 to-[#1A1A2E]'
                    : 'bg-[#1A1A2E] opacity-40'
                }`}
              >
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <div className="text-white">{achievement.title}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
