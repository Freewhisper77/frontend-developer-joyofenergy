import { renderChart } from "./chart.js";
import { getReadings, groupByDay, sortByTime } from "./reading";

const readings = await getReadings();
export const data = sortByTime(groupByDay(readings)).slice(-30);

renderChart(data);
