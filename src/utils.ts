/**
 * Given a valid input for the Date constructor, returns a date label in the format "January 2020" (unless options object overrides)
 *
 * @param value
 * @returns
 */
export function getDateText(
  value: number | string | Date,
  options?: Intl.DateTimeFormatOptions,
) {
  const date = new Date(value);

  if (isNaN(date.valueOf())) {
    throw new Error(`[getShortDateText]: ${value} is not a valid date`);
  }

  return date.toLocaleDateString(
    "en-GB",
    options ?? { month: "long", year: "numeric" },
  );
}
