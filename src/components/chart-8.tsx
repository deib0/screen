import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import { randomGenerator } from './getRandom'; 

export const Chart8 = () => {
  const divRef = useRef(null);
  const myChart =useRef(null)
  const colors = ['#856BED', '#F46064', '#F38E1C', '#1CDB7C', '#33A4FA'];
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    setInterval(()=>{
      const n =Math.floor(randomGenerator.getSingle(0,50))*0.01
      const newData = [n,0.5-n,0.35,0.15,0.25]
      renderChart(newData)
    },2000)
    const renderChart=(data)=>{
      myChart.current.setOption(createEchartsOptions({
        color: colors,
        xAxis: {show: false},
        yAxis: {show: false},
        legend: {show: false},
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['75%', '90%'],
            avoidLabelOverlap: false,
            label: {
              show: true, position: 'inside', textStyle: {color: 'white', fontSize: px(20)},
              formatter(options) {
                return (options.value * 100).toFixed(0) + '%';
              }
            },
            labelLine: {show: false},
            itemStyle: {
              borderColor: '#0F113A',
              borderWidth: px(4)
            },
            data: [
              {value: data[0], name: '10-20'},
              {value: data[1], name: '20-30'},
              {value: data[2], name: '30-40'},
              {value: data[3], name: '40-50'},
              {value: data[4], name: '50-60'},
            ]
          }
        ]
      }));
    }
    renderChart([0.07,0.10,0.23,0.28,0.32])
  }, []);

  return (
    <div className="年龄段-图2">
      <div className="chart">
        <div className="main" ref={divRef}/>
        <div className="text">年龄段</div>
      </div>
      <div className="legend">
        <span style={{background: colors[0]}} />10-20
        <span style={{background: colors[1]}} />20-30
        <span style={{background: colors[2]}} />30-40
        <span style={{background: colors[3]}} />40-50
        <span style={{background: colors[4]}} />50-60
      </div>
    </div>
  );
};