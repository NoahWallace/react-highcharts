import React from 'react';
import Highcharts from 'highcharts';

export class Chart extends React.Component {
    componentDidMount() {
        Highcharts.chart(this.props.id, this.props.config, (chart)=> {

        });
    }

    render() {
        return (
            <div id={this.props.id}/>
        );
    }
}

Chart.propTypes = {
    id: React.PropTypes.string.isRequired,
    config: React.PropTypes.object.isRequired
};
