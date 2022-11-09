export const getConsumption = (readings) => {
  const values = readings.map(({ value }) => value);
  const powerConsumption = Math.round(values.reduce((x, y) => x + y));
  const cost = Math.round(powerConsumption * 0.138);
  const footprint = (powerConsumption * 0.0002532).toFixed(4);

  return [cost, powerConsumption, footprint];
};

export const renderBox = (data) => {
  const Consumption = getConsumption(data);

  document.getElementById("cost").innerHTML = Consumption[0].toString();
  document.getElementById("powerConsumption").innerHTML =
    Consumption[1].toString();
  document.getElementById("footprint").innerHTML = Consumption[2].toString();
};
