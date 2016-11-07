import * as React from 'react';
import {HInit} from './utils';
import {ICharts} from './Types';


export class Chart extends React.Component<ICharts.IChartProps,ICharts.IChartState> {

    componentDidMount() {
        HInit(this.props.id, this.props.config);
    }

    render(): JSX.Element {
        return (
            <div id={this.props.id}/>
        );
    }
}


