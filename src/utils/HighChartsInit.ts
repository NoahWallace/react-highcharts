import * as Highcharts from 'highcharts';

export interface IHighChartsInit{(
    id:string,
    config:Highcharts.Options,
    callbacks?:((chart:Highcharts.ChartObject)=> void)[]):Highcharts.ChartObject;
}
export interface IHInitCallbackFunction {
    (chart:Highcharts.ChartObject):void;
}

export const HInit:IHighChartsInit = (id,config,callbacks) => {
    let callbackArr:IHInitCallbackFunction[] = [];
    const wrapRedraw = (chart:Highcharts.ChartObject) => {
        let redraw = chart.redraw;
        chart.redraw = () => {
            redraw.apply(chart,null);
            console.log('redraw')
        }
    }
    if(callbacks){
        callbacks.map((f)=>{callbackArr.push(f)})
    }
    return Highcharts.chart(id, config, (chart:Highcharts.ChartObject)=> {
            wrapRedraw(chart);
        for (var i = 0; i < callbackArr.length; i++) {
            var cb = callbackArr[i];
            cb(chart);
        }
    });
};