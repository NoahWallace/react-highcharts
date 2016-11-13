"use strict";
const Highcharts = require('highcharts');
exports.HInit = (id, config, callbacks) => {
    let callbackArr = [];
    const wrapRedraw = (chart) => {
        let redraw = chart.redraw;
        chart.redraw = () => {
            redraw.apply(chart, null);
            console.log('redraw');
        };
    };
    if (callbacks) {
        callbacks.map((f) => { callbackArr.push(f); });
    }
    return Highcharts.chart(id, config, (chart) => {
        wrapRedraw(chart);
        for (var i = 0; i < callbackArr.length; i++) {
            var cb = callbackArr[i];
            cb(chart);
        }
    });
};
