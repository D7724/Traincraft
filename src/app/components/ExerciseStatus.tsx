import { Timer, CheckCircle2, Circle, Clock } from 'lucide-react';

interface ExerciseStatusProps {
  name: string;
  sets: string;
  duration: string;
  seconds: number;
  index: number;
  isActive: boolean;
  isCompleted: boolean;
  timeLeft?: number;
  progress?: number;
  onClick: () => void;
}

export function ExerciseStatus({
  name, sets, duration, index,
  isActive, isCompleted,
  timeLeft = 0, progress = 0,
  onClick,
}: ExerciseStatusProps) {
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const getStatusBadge = () => {
    if (isCompleted) return { label: 'Erledigt', color: 'bg-[#1ED760]/20 text-[#1ED760]' };
    if (isActive) return { label: 'Aktiv', color: 'bg-[#00BCD4]/20 text-[#00BCD4] animate-pulse' };
    return { label: 'Bereit', color: 'bg-white/10 text-white/50' };
  };

  const badge = getStatusBadge();

  return (
    <div
      onClick={onClick}
      className={`rounded-xl p-5 cursor-pointer transition-all duration-300 ${
        isCompleted
          ? 'bg-white/5 opacity-60'
          : isActive
          ? 'bg-white/5 backdrop-blur-xl border-2 border-[#00BCD4]/50 shadow-[0_0_20px_-8px_#00BCD4]'
          : 'bg-white/5 backdrop-blur-xl border border-white/5 hover:border-white/10'
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-5">
          <div className={`transition-all duration-300 ${isActive ? 'scale-110' : ''}`}>
            {isCompleted ? (
              <CheckCircle2 size={28} className="text-[#1ED760]" />
            ) : isActive ? (
              <Timer size={28} className="text-[#00BCD4]" />
            ) : (
              <Circle size={28} className="text-white/30" />
            )}
          </div>
          <div>
            <h3 className={`text-lg mb-1 font-medium transition-colors duration-300 ${
              isCompleted ? 'text-white/50' : 'text-white'
            }`}>
              {name}
            </h3>
            <div className="flex gap-4 text-sm text-white/40">
              <span>{sets}</span>
              <span>•</span>
              <span>{duration}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {(isActive || isCompleted) && (
            <span className={`text-sm font-bold tabular-nums ${
              isActive ? 'text-[#00BCD4]' : 'text-[#1ED760]'
            }`}>
              {isActive ? formatTime(timeLeft) : formatTime(0)}
            </span>
          )}
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${badge.color}`}>
            {badge.label}
          </span>
          <span className={`text-3xl font-bold transition-colors duration-300 ${
            isActive ? 'text-[#00BCD4]/30' : isCompleted ? 'text-[#1ED760]/30' : 'text-white/10'
          }`}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      {isActive && (
        <div className="mt-3 space-y-2">
          <div className="flex items-center gap-2 text-sm text-[#00BCD4]/80">
            <Clock size={14} />
            <span>Countdown läuft...</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#00BCD4] to-[#00BCD4]/60 rounded-full transition-all duration-1000"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {isCompleted && (
        <div className="mt-3 flex items-center gap-2 text-sm text-[#1ED760]/60">
          <CheckCircle2 size={14} />
          <span>Abgeschlossen</span>
        </div>
      )}
    </div>
  );
}
