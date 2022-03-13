import { format, parseISO, intervalToDuration, formatDuration } from 'date-fns';

export const formatDate = (date: string | null) => {
  return date && format(parseISO(date), 'LLL yyyy');
};

export const duration = (from: string | null, to: string | null): string | null => {
  const start = from && parseISO(from);
  const end = (to && parseISO(to)) || Date.now();

  if (start) {
    const interval = intervalToDuration({
      start,
      end
    });

    return formatDuration(interval, { format: ['years', 'months'] }) || '1 month';
  }

  return null;
};
