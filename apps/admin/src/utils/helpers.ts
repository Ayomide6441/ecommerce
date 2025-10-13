export function formatRelativeDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  // Within seconds
  if (diffSeconds < 60) return "just now";

  // Within minutes
  if (diffMinutes < 60)
    return `${diffMinutes} minute${diffMinutes > 1 ? "s" : ""} ago`;

  // Within hours
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;

  // Yesterday
  if (diffDays === 1) return "yesterday";

  // Within a week
  if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;

  // Weeks ago
  if (diffWeeks === 1) return "last week";
  if (diffWeeks === 2) return "two weeks ago";
  if (diffWeeks === 3) return "three weeks ago";

  // Months ago
  if (diffMonths === 1) return "last month";
  if (diffMonths > 1 && diffMonths < 12) return `${diffMonths} months ago`;

  // Years ago
  if (diffYears === 1) return "last year";
  if (diffYears > 1) return `${diffYears} years ago`;

  // Fallback: show full date
  return date.toLocaleDateString();
}
