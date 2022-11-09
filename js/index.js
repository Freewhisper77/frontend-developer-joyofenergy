import { renderChart } from "./component/chart.js";
import { getReadings, groupByDay, sortByTime } from "./component/reading";
import { renderBox } from "./component/box";

const readings = await getReadings();
export const data = sortByTime(groupByDay(readings)).slice(-30);

renderChart(data);
renderBox(data);
