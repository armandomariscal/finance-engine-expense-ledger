export function getPeriodDates(id: string) {
  const [year, month] = id.split("-").map(Number);

  return {
    start: new Date(year, month - 1, 1),
    end: new Date(year, month, 0),
  };
}
