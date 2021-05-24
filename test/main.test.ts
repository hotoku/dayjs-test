import * as main from "../src/main";

function adjust(date: Date): void {
  date.setTime(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
}

describe("test", () => {
  it("2000-03-01", () => {
    const d = new Date(2000, 2, 1); // JavaScriptの日付は、月だけ0始まり
    adjust(d);
    const ret = main.myfunc(d);
    console.log(ret);
  });
});
