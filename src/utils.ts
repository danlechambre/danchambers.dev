export function getDateString(date: string | number | Date | undefined | null) {
  if (date) {
    const dt = new Date(date);
    return dt.toLocaleDateString();
  }
  return date;
}
