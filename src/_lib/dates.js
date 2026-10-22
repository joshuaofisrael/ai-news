import { DateTime } from "luxon";

export const ZONE = "America/New_York";

export function toDate(value) {
  if (!value) return null;
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

export function dateTime(value) {
  const date = toDate(value);
  if (!date) return null;
  return DateTime.fromJSDate(date, { zone: "utc" });
}

export function isoDate(value) {
  const dt = dateTime(value);
  return dt ? dt.toISO() : "";
}

export function utcPathDate(value) {
  const dt = dateTime(value);
  return dt ? dt.toFormat("yyyy/LL/dd") : "";
}

export function readableDate(value, withTime = false) {
  const dt = dateTime(value);
  if (!dt) return "";
  const zoned = dt.setZone(ZONE);
  if (withTime) return zoned.toFormat("LLLL d, yyyy 'at' h:mm a ZZZZ");
  return zoned.toFormat("LLLL d, yyyy");
}

export function rfc822(value) {
  const dt = dateTime(value);
  return dt ? dt.toRFC2822() : "";
}

export function monthKey(value) {
  const dt = dateTime(value);
  return dt ? dt.setZone(ZONE).toFormat("yyyy-LL") : "";
}

export function monthLabel(value) {
  const dt = dateTime(value);
  return dt ? dt.setZone(ZONE).toFormat("LLLL yyyy") : "";
}

export function thisYear() {
  return DateTime.now().setZone(ZONE).toFormat("yyyy");
}

export function plusDaysIso(days) {
  return DateTime.utc().plus({ days }).startOf("second").toISO({ suppressMilliseconds: false });
}
