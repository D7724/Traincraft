import { useState, useEffect, useRef, useCallback } from 'react';

interface UseCountdownOptions {
  duration: number;
  onComplete?: () => void;
}

export function useCountdown({ duration, onComplete }: UseCountdownOptions) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const start = useCallback(() => setIsRunning(true), []);

  const pause = useCallback(() => {
    setIsRunning(false);
    clearTimer();
  }, [clearTimer]);

  const reset = useCallback(() => {
    pause();
    setTimeLeft(duration);
  }, [duration, pause]);

  const restart = useCallback(() => {
    setTimeLeft(duration);
    setIsRunning(true);
  }, [duration]);

  const toggle = useCallback(() => setIsRunning((r) => !r), []);

  useEffect(() => {
    if (!isRunning) {
      clearTimer();
      return;
    }
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearTimer();
          setIsRunning(false);
          onCompleteRef.current?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return clearTimer;
  }, [isRunning, clearTimer]);

  const progress = duration > 0 ? ((duration - timeLeft) / duration) * 100 : 0;

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return {
    timeLeft,
    isRunning,
    progress,
    formatted: formatTime(timeLeft),
    start,
    pause,
    reset,
    restart,
    toggle,
  };
}
