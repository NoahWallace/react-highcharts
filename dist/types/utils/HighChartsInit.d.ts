/// <reference types="highcharts" />
import * as Highcharts from 'highcharts';
export interface IHighChartsInit {
    (id: string, config: Highcharts.Options, callbacks?: ((chart: Highcharts.ChartObject) => void)[]): Highcharts.ChartObject;
}
export interface IHInitCallbackFunction {
    (chart: Highcharts.ChartObject): void;
}
export declare const HInit: IHighChartsInit;
