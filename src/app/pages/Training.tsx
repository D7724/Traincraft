import { Navigation } from '../components/Navigation';
import { Clock, Flame, Play, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

const WEEK_TEMPLATE = [
  { name: 'Cardio & Core', duration: '45 Min', calories: 450 },
  { name: 'Krafttraining Oberkörper', duration: '60 Min', calories: 380 },
  { name: 'Ruhetag', duration: '-', calories: 0 },
  { name: 'HIIT & Mobility', duration: '40 Min', calories: 520 },
  { name: 'Krafttraining Unterkörper', duration: '55 Min', calories: 410 },
  { name: 'Long Run', duration: '90 Min', calories: 680 },
  { name: 'Yoga & Stretching', duration: '45 Min', calories: 180 },
];

const MONTH_NAMES = [
  'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
  'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',
];

function buildMonth(year: number, month: number) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = new Date(year, month, 1).getDay();
  const startOffset = startDay === 0 ? 6 : startDay - 1;

  const days: {
    day: number;
    label: string;
    duration: string;
    calories: number;
    isRest: boolean;
    completed: boolean;
  }[] = [];

  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d);
    const dow = date.getDay();
    const weekdayIndex = dow === 0 ? 6 : dow - 1;
    const workout = WEEK_TEMPLATE[weekdayIndex];
    const completed = d < 4;

    days.push({
      day: d,
      label: workout.name,
      duration: workout.duration,
      calories: workout.calories,
      isRest: workout.duration === '-',
      completed,
    });
  }

  return { days, startOffset };
}

const SHORT_LABELS: Record<string, string> = {
  'Cardio & Core': 'Cardio',
  'Krafttraining Oberkörper': 'Oberkörper',
  'Ruhetag': 'Ruhetag',
  'HIIT & Mobility': 'HIIT',
  'Krafttraining Unterkörper': 'Unterkörper',
  'Long Run': 'Long Run',
  'Yoga & Stretching': 'Yoga',
};

export function Training() {
  const weekDays = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
  const { days, startOffset } = buildMonth(2026, 4);
  const today = 4;

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
      <Navigation />

      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-white">Trainingsplan</h1>
            <p className="text-[#1ED760] text-sm font-medium mt-1">Mai 2026</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="border border-white/5 rounded-xl overflow-hidden">
          <div className="grid grid-cols-7">
            {weekDays.map((day, i) => (
              <div key={i} className="text-center text-xs font-medium text-white/30 py-4 border-b border-white/5 bg-white/[0.02]">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7">
            {Array.from({ length: startOffset }).map((_, i) => (
              <div key={`e-${i}`} className="min-h-[110px] border-r border-b border-white/5 last:border-r-0 bg-[#0A0A0A]" />
            ))}

            {days.map((d) => {
              const isToday = d.day === today;

              return (
                <div
                  key={d.day}
                  className={`min-h-[110px] p-2.5 border-r border-b border-white/5 last:border-r-0 flex flex-col relative transition-all duration-200 hover:bg-white/[0.03] ${
                    isToday ? 'bg-[#1ED760]/5' : ''
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-sm font-semibold leading-none w-7 h-7 flex items-center justify-center rounded-full transition-all duration-200 ${
                      isToday
                        ? 'bg-[#1ED760] text-[#0A0A0A] shadow-[0_0_12px_-2px_#1ED760]'
                        : d.completed ? 'text-white/25' : 'text-white/50'
                    }`}>
                      {d.day}
                    </span>
                  </div>

                  {d.isRest ? (
                    <span className={`text-[11px] mt-auto mb-1 ${d.completed ? 'text-white/15' : 'text-white/20'}`}>
                      {d.completed ? '✓ Erholt' : 'Ruhetag'}
                    </span>
                  ) : (
                    <div className={`mt-auto rounded-lg p-2 transition-all duration-200 ${
                      d.completed
                        ? 'bg-white/5'
                        : isToday
                        ? 'bg-[#1ED760]/15 border border-[#1ED760]/20'
                        : 'bg-white/5 hover:bg-white/[0.07]'
                    }`}>
                      <p className={`text-[11px] font-semibold leading-tight mb-1 ${
                        d.completed ? 'text-white/40' : 'text-white/90'
                      }`}>
                        {SHORT_LABELS[d.label] || d.label}
                      </p>
                      {!d.completed && (
                        <div className="flex items-center gap-2 text-[10px] text-white/40">
                          <span className="flex items-center gap-0.5">
                            <Clock size={9} />
                            {d.duration}
                          </span>
                          <span className="flex items-center gap-0.5">
                            <Flame size={9} />
                            {d.calories}
                          </span>
                        </div>
                      )}
                      {d.completed && (
                        <div className="flex items-center gap-1 text-[10px] text-[#1ED760]">
                          <Check size={9} />
                          Erledigt
                        </div>
                      )}
                    </div>
                  )}

                  {isToday && !d.completed && !d.isRest && (
                    <Link to="/workout" className="mt-1.5">
                      <div className="flex items-center justify-center gap-1 bg-[#1ED760] text-[#0A0A0A] text-[10px] font-bold py-1.5 rounded-lg transition-all duration-300 hover:bg-[#1ED760]/90 hover:shadow-[0_0_16px_-4px_#1ED760] active:scale-95">
                        <Play size={10} />
                        Start
                      </div>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
