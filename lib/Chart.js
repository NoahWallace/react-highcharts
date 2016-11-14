"use strict";
const React = require('react');
const utils_1 = require('./utils');
const deepExtend = require('deep-extend');
class Chart extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            chart: {
                type: 'bar',
                height: 300,
                width: 300,
            }
        };
    }
    componentDidMount() {
        let config = deepExtend(this.state, this.props.config);
        console.log(config);
        utils_1.HInit(this.props.id, config, this.props.callbacks);
    }
    render() {
        return (React.createElement("div", {id: this.props.id}));
    }
}
exports.Chart = Chart;
