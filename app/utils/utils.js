// useful functions!
export const flattenArrayOfObjects = (arr) =>
  arr.flatMap(Object.entries).map(([k, v]) => ({ [k]: v }));

export const flattenArray = (arr) => {
  return arr.flatMap(([role, data]) => {
    return Object.entries(data).map(([unitId, code]) => ({
      role,
      unitId,
      code,
    }));
  });
};

export const shortestTime = (dateTime) => {
  const dateObj = new Date(dateTime);

  const formattedTime = new Intl.DateTimeFormat("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  })
    .format(dateObj)
    .replace(/(\d+)/g, (match) => match.padStart(2, "0"));
  return formattedTime;
};

export function convertTimeStrToDate(timeStr) {
  const date = new Date();
  const [hours, minutes] = timeStr.split(":");
  date.setHours(hours, minutes);
  return date;
}
