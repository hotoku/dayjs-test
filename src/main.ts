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

function adjust(date: Date, sign: number): void {
  date.setTime(date.getTime() + sign * date.getTimezoneOffset() * 60 * 1000);
}

export function myfunc(date: Date): Ret {
  adjust(date, 1);
  const offset = date.getTimezoneOffset();
  const orig = dayjs(date);
  const orig2 = orig.toDate();
  const set1 = orig.set("date", 1).toDate();
  const set0 = orig.set("date", 0).toDate();
  adjust(orig2, -1);
  adjust(set1, -1);
  adjust(set0, -1);
  return {
    offset: offset,
    orig: orig2.toISOString(),
    set1: set1.toISOString(),
    set0: set0.toISOString(),
  };
}
