// calculate values -> power-consumption(substitute 895)

export const getConsumption = (readings) => {
  const values = readings.map(({ value }) => value);
  return Math.round(values.reduce((x, y) => x + y));
};

export const renderBox = (data) => {
  const powerConsumption = getConsumption(data);
  document.getElementById("powerConsumption").innerHTML =
    powerConsumption.toString();
};
