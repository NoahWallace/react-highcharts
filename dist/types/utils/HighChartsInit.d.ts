/// <reference types="highcharts" />
import * as Highcharts from 'highcharts';
export interface IHighChartsInit {
    (id: string, config: Highcharts.Options): Highcharts.ChartObject;
}
export declare const HInit: IHighChartsInit;
