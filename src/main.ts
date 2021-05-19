import * as dayjs from "dayjs";
import * as weekOfYear from "dayjs/plugin/weekOfYear";
import * as timezone from "dayjs/plugin/timezone";
import * as utc from "dayjs/plugin/utc";

dayjs.extend(weekOfYear);
dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.tz.setDefault("UTC");

function week_num(date: dayjs.Dayjs): number {
  if (date.day() === 0) return date.week() - 1;
  return date.week();
}

function md_week_impl(date: dayjs.Dayjs): number {
  // TODO: This set("date", 0) is unnatural.
  // In order to set date to 1st of the month, we should call set("date", 1),
  // according to the dayjs document.
  // But, set("date", 1) returns date of 2nd of each month and
  // set("date", 0) returns date of 1st of each month in BigQuery.
  // And, actually, the behavior differs in local host.
  // At least my machine, the code works as documented.
  const start = date.set("month", 2).set("date", 0);
  console.log(start.toISOString());
  if (week_num(start) <= week_num(date))
    return week_num(date) - week_num(start) + 1;

  const jan1 = dayjs(new Date(date.year(), 0, 1)); // 同じ年の1月1日
  const ldly = jan1.add(-7, "day"); // Last Date of Last Year

  return md_week_impl(ldly) + week_num(date);
}

export function md_week(date: Date): number {
  const ret = md_week_impl(dayjs(date));
  return ret;
}
