import { formatDistanceToNow } from 'date-fns';

export default function dateFormat(time: number ): string {
  return `${formatDistanceToNow(new Date(time * 1000))} ago`;
}
