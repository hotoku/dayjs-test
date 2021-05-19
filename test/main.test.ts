import { expect } from "chai";
import * as main from "../src/main";

function adjust(date: Date): void {
  date.setTime(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
}

describe("test for 1st, Mar.", () => {
  let year = 2000;
  while (year < 2040) {
    const local_test = (() => {
      const y = year;
      return () => {
        const date = new Date(y, 2, 1);
        adjust(date);
        expect(main.md_week(date)).to.equal(1);
      };
    })();
    it(year.toString(), local_test);
    year += 1;
  }
});

describe("test other days.", () => {
  it("2005-01-03", () => {
    expect(main.md_week(new Date(2005, 0, 3))).to.equal(45);
  });

  it("2006-12-27", () => {
    expect(main.md_week(new Date(2006, 11, 27))).to.equal(44);
  });
});
