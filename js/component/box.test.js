import { getCost, getFootPrint, getPowerConsumption } from "./box";

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
      const powerConsumption = getPowerConsumption(readings);
      expect(powerConsumption).toEqual(125);
    });

    it("should calculate cost and round to the nearest integer", () => {
      const consumption = 125;
      const cost = getCost(consumption);
      expect(cost).toEqual(17);
    });

    it("should calculate footprint and get 4 digits after the decimal point", () => {
      const consumption = 125;
      const footprint = getFootPrint(consumption);
      expect(footprint).toEqual("0.0316");
    });
  });
});
