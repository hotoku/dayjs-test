import * as dayjs from "dayjs";
import * as weekOfYear from "dayjs/plugin/weekOfYear";
import * as timezone from "dayjs/plugin/timezone";
import * as utc from "dayjs/plugin/utc";

dayjs.extend(weekOfYear);
dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.tz.setDefault("UTC");

interface Ret {
  offset: number;
  orig: string;
  set1: string;
  set0: string;
}

export function myfunc(date: Date): Ret {
  const offset = date.getTimezoneOffset();
  const orig = dayjs(date);
  const set1 = orig.set("date", 1);
  const set0 = orig.set("date", 0);
  return {
    offset: offset,
    orig: orig.toISOString(),
    set1: set1.toISOString(),
    set0: set0.toISOString(),
  };
}
