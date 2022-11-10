export const getPowerConsumption = (readings) => {
  const values = readings.map(({ value }) => value);
  return Math.round(values.reduce((x, y) => x + y));
};

export const getCost = (readings) => {
  const consumption = getPowerConsumption(readings);
  return Math.round(consumption * 0.138);
};

export const getFootPrint = (readings) => {
  const consumption = getPowerConsumption(readings);
  return (consumption * 0.0002532).toFixed(4);
};

export const renderBox = (data) => {
  const consumption = getPowerConsumption(data);
  const cost = getCost(data);
  const footprint = getFootPrint(data);

  document.getElementById("cost").innerHTML = cost.toString();
  document.getElementById("powerConsumption").innerHTML = consumption.toString();
  document.getElementById("footprint").innerHTML = footprint;
};
