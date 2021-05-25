import * as dayjs from "dayjs";

interface Ret {
  offset: number;
  orig: string;
  set0: string;
  set1: string;
  set2: string;
}

export function adjust(dates: Array<Date>, offset: number, sign: 1 | -1): void {
  dates.map((d) => {
    d.setMinutes(d.getMinutes() + offset * sign);
  });
}

export function myfunc(date: Date): Ret {
  const offset = date.getTimezoneOffset();
  adjust([date], offset, 1);
  const orig = dayjs(date);
  const set0 = orig.set("date", 0).toDate();
  const set1 = orig.set("date", 1).toDate();
  const set2 = orig.set("date", 2).toDate();
  adjust([date, set0, set1, set2], offset, -1);
  return {
    offset: offset,
    orig: date.toISOString(),
    set0: set0.toISOString(),
    set1: set1.toISOString(),
    set2: set2.toISOString(),
  };
}
