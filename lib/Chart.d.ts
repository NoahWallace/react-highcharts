/// <reference types="react" />
import * as React from 'react';
import { ICharts } from './Types';
export declare class Chart extends React.Component<ICharts.IChartProps, ICharts.IChartState> {
    state: {
        chart: {
            type: string;
            height: number;
            width: number;
        };
    };
    componentDidMount(): void;
    render(): JSX.Element;
}
