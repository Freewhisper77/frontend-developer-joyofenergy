import { renderChart } from "./chart.js";
import { getReadings, groupByDay, sortByTime } from "./reading";

const readings = await getReadings();
renderChart(sortByTime(groupByDay(readings)).slice(-30));

// calculate values -> power-consumption(substitute 895)
const getConsumption = (readings) =>{
    const values = readings.map(({ value }) => value);
    return Math.round(values.reduce((x, y) => x + y));
}

const result = getConsumption(sortByTime(groupByDay(readings)).slice(-30));

document.getElementById("getConsumption").innerHTML = result;
