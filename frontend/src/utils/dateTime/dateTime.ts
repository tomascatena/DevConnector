import { IEducation, IExperience } from '../../typings/types';
import { format, formatDuration, intervalToDuration, parseISO } from 'date-fns';

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

type ExperienceOrEducation = Partial<IExperience> | Partial<IEducation>

export const sortISODates = (
  firstDate: ExperienceOrEducation,
  secondDate: ExperienceOrEducation
) => {
  if (firstDate.from && secondDate.from) {
    const firstDateUnix = parseISO(firstDate.from).getTime();
    const secondDateUnix = parseISO(secondDate.from).getTime();

    if (firstDateUnix && secondDateUnix) {
      return firstDateUnix - secondDateUnix;
    }
  }

  return 0;
};
