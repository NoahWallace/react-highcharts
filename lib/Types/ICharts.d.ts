/// <reference types="highcharts" />
import * as Highcharts from 'highcharts';
export declare module ICharts {
    interface IChartProps {
        id: string;
        config: Highcharts.Options;
        callbacks?: ((charts: Highcharts.ChartObject) => void)[];
    }
    interface IChartState {
    }
}
