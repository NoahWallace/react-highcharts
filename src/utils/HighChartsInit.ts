import * as Highcharts from 'highcharts';

export interface IHighChartsInit{
    (id:string,config:Highcharts.Options):Highcharts.ChartObject;
}

export const HInit:IHighChartsInit = (id:string,config:Highcharts.Options) => {
    return Highcharts.chart(id, config, (chart)=> {
            let redraw=chart.redraw;
            chart.redraw = () => {
                redraw.apply(chart,null);
                console.log("redraw")
            }
    });
}