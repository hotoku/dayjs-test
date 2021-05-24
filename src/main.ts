import * as dayjs from "dayjs";

interface Ret {
  offset: number;
  orig: string;
  set0: string;
  set1: string;
  set2: string;
}

export function myfunc(date: Date): Ret {
  const offset = date.getTimezoneOffset();
  const orig = dayjs(date);
  const set0 = orig.set("date", 0);
  const set1 = orig.set("date", 1);
  const set2 = orig.set("date", 2);
  return {
    offset: offset,
    orig: orig.toISOString(),
    set0: set0.toISOString(),
    set1: set1.toISOString(),
    set2: set2.toISOString(),
  };
}
