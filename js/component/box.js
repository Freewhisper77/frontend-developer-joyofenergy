export const getPowerConsumption = (readings) => {
  const values = readings.map(({ value }) => value);
  return Math.round(values.reduce((x, y) => x + y));
};

export const getCost = (consumption) => {
  return Math.round(consumption * 0.138);
};

export const getFootPrint = (consumption) => {
  return (consumption * 0.0002532).toFixed(4);
};

export const renderBox = (data) => {
  const consumption = getPowerConsumption(data);
  const cost = getCost(consumption);
  const footprint = getFootPrint(consumption);

  document.getElementById("cost").innerHTML = cost.toString();
  document.getElementById("powerConsumption").innerHTML = consumption.toString();
  document.getElementById("footprint").innerHTML = footprint;
};
