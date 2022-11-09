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
      expect(powerConsumption[1]).toEqual(125);
    });

    it("should calculate cost and round to the nearest integer", () => {
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
      expect(powerConsumption[0]).toEqual(17);
    });

    it("should calculate footprint and get 4 digits after the decimal point", () => {
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
      expect(powerConsumption[2]).toEqual(0.0316);
    });
  });
});
