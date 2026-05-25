const LAUNCH_DATE = new Date("2026-05-26T00:00:00Z");
const STARTING_COUNT = 127;
const AVERAGE_PER_DAY = 4;

export function getWaitlistCount(): number {
  const now = new Date();
  const diffMs = now.getTime() - LAUNCH_DATE.getTime();
  const diffDays = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
  const variance = (diffDays % 7) - (diffDays % 11);
  return STARTING_COUNT + diffDays * AVERAGE_PER_DAY + variance;
}
