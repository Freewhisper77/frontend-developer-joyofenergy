import { renderChart } from "./chart.js";
import { getReadings, groupByDay, sortByTime } from "./reading";

const readings = await getReadings();
const data = sortByTime(groupByDay(readings)).slice(-30);

renderChart(data);

// calculate values -> power-consumption(substitute 895)
const getConsumption = (readings) =>{
    const values = readings.map(({ value }) => value);
    return Math.round(values.reduce((x, y) => x + y));
}

const powerConsumption = getConsumption(data);

document.getElementById("powerConsumption").innerHTML = powerConsumption.toString();
