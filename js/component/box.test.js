import { getConsumption } from "./box";

describe("#box", function () {
  describe("#getConsumption", () => {
    it("should calculate last 30 days power consumption", () => {
      const readings = [
        { time: new Date(2021, 12, 17, 10, 24).getTime(), value: 50 },
        {
          time: new Date(2021, 12, 17, 9, 24).getTime(),
          value: 40,
        },
        {
          time: new Date(2021, 12, 16, 10, 34).getTime(),
          value: 35,
        },
      ];
      const powerConsumption = getConsumption(readings);
      // expect(typeof powerConsumption).toHaveLength(2);
      expect(powerConsumption).toEqual(125);
    });
  });
});
