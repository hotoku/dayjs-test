import * as main from "../src/main";

describe("test", () => {
  it("2000-03-01", () => {
    const d = new Date(2000, 2, 1); // JavaScriptの日付は、月だけ0始まり
    const ret = main.myfunc(d);
    console.log(ret);
  });
});
