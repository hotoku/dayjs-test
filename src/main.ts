import * as dayjs from "dayjs";

interface Ret {
  orig: Date;
  set0: Date;
  set1: Date;
  set2: Date;
}

export function myfunc(date: Date): Ret {
  const orig = dayjs(date);
  const set0 = orig.set("date", 0).toDate();
  const set1 = orig.set("date", 1).toDate();
  const set2 = orig.set("date", 2).toDate();
  return {
    orig: date,
    set0: set0,
    set1: set1,
    set2: set2,
  };
}
