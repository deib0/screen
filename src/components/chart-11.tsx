import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import { randomGenerator } from './getRandom'; 

export const Chart11 = () => {
  const divRef = useRef(null);
  const myChart =useRef(null)
  const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
  useEffect(() => {
    myChart.current = echarts.init(divRef.current); 
    setInterval(()=>{
      let n =Math.floor(randomGenerator.getSingle(0,50))*0.01
      const newData = [n,0.5-n,0.35,0.15]
      renderChart(newData)
    },4000)
    const renderChart=(data)=>{
      myChart.current.setOption(createEchartsOptions({
        color: colors,
        xAxis: {show: false},
        yAxis: {show: false},
        legend: {show: false},
        series: [
          {
            startAngle: -20,
            type: 'pie',
            radius: ['25%', '90%'],
            avoidLabelOverlap: false,
            label: {
              show: true, position: 'outside', textStyle: {color: 'white', fontSize: px(20)},
              distanceToLabelLine: 0,
              formatter(options) {
                return options.value * 100 + '%';
              }
            },
            labelLine: {show: true, length: 0},
            roseType: 'area',
            itemStyle: {
              shadowBlur: px(200),
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            data: [
              {value: data[0], name: '刑事案件'},
              {value: data[1], name: '民事案件'},
              {value: data[2], name: '经济案件'},
              {value: data[3], name: '其他案件'},
            ]
          }
        ]
      }));
    }
    renderChart([0.36,0.20,0.18,0.24])
  }, []);

  return (
    <div className="年龄段-图1">
      <div className="chart">
        <div className="main" ref={divRef}/>
      </div>
      <div className="legend">
        <span style={{background: colors[0]}} />刑事
        <span style={{background: colors[1]}} />民事
        <span style={{background: colors[2]}} />经济
        <span style={{background: colors[3]}} />其他
      </div>
    </div>
  );
};