"use strict";
const React = require('react');
const utils_1 = require('./utils');
class Chart extends React.Component {
    componentDidMount() {
        utils_1.HInit(this.props.id, this.props.config, this.props.callbacks);
    }
    render() {
        return (React.createElement("div", {id: this.props.id}));
    }
}
exports.Chart = Chart;
