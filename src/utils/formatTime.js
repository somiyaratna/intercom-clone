import { formatDistanceToNowStrict, parseISO } from "date-fns";

export function formatRelativeTime(isoDate) {
  const date = parseISO(isoDate); // Convert ISO string to Date
  let result = formatDistanceToNowStrict(date, { addSuffix: false });

  // Replace full words with short versions
  result = result
    .replace(" minutes", "m")
    .replace(" minute", "m")
    .replace(" hours", "h")
    .replace(" hour", "h")
    .replace(" days", "d")
    .replace(" day", "d")
    .replace(" seconds", "s")
    .replace(" second", "s");

  return result + " ago";
}
