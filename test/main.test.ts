import { expect } from "chai";
import * as main from "../src/main";

function adjust(date: Date): void {
  date.setTime(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
}

describe("test", () => {
  it("2000-03-02", () => {
    const d = new Date(2000, 2, 2);
    adjust(d);
    const ret = main.myfunc(d);
    console.log(ret);
  });
});
