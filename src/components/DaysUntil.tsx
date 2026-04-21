'use client';

import { useEffect, useState } from 'react';

type Props = {
  target: string;
};

export default function DaysUntil({ target }: Props) {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const targetDate = new Date(`${target}T00:00:00`);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diff = Math.max(
      0,
      Math.round(
        (targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
      )
    );
    setDays(diff);
  }, [target]);

  return (
    <span className="tabular-nums">
      {days === null ? '—' : days.toLocaleString()}
    </span>
  );
}
