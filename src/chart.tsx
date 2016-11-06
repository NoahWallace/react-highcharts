import React from 'react';
import * as Highcharts from 'highcharts';
import {HInit} from './utils';

export class Chart extends React.Component<{id:string,config:any},{}> {
    componentDidMount() {
        HInit(this.props.id, this.props.config);
    }

    render() {
        return (
            <div id={this.props.id}/>
        );
    }
}

