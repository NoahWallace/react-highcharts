import * as Highcharts from 'highcharts';

export declare module ICharts{
    export interface IChartProps{
        id:string;
        config: Highcharts.Options;
        callbacks?: ((charts:Highcharts.ChartObject) => void)[];
    }
    export interface IChartState{}
}