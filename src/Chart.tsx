import * as React from 'react';
import {HInit} from './utils';
import {ICharts} from './Types';
import * as deepExtend from 'deep-extend'


export class Chart extends React.Component<ICharts.IChartProps,ICharts.IChartState> {
    state = {
        chart:{
            type: 'line',
        }
    };
    componentDidMount() {
        let config = deepExtend(this.state,this.props.config);
        HInit(this.props.id, config, this.props.callbacks );
    }

    render(): JSX.Element {
        return (
            <div id={this.props.id}/>
        );
    }
}


