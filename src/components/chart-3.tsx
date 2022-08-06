import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import { randomGenerator } from './getRandom';

export const Chart3 = () => {
  const divRef = useRef(null);
  const myChart =useRef(null)
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    setInterval(()=>{
      let newData = [randomGenerator.getArray(0.01,0.1,9),randomGenerator.getArray(0.01,0.1,9),randomGenerator.getArray(0.01,0.1,9),randomGenerator.getArray(0.01,0.1,9),randomGenerator.getArray(0.01,0.1,9)]
      renderChart(newData)
    },2000)
    const renderChart=(data)=>{
      myChart.current.setOption(createEchartsOptions({
        legend: {
          bottom: px(10),
          textStyle: {color: 'white'},
          itemWidth: px(30),
          itemHeight: px(16)
        },
        grid: {
          x: px(20),
          x2: px(20),
          y: px(20),
          y2: px(70),
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
          splitLine: {show: true, lineStyle: {color: '#073E78'}},
          axisTick: {show: false},
          axisLine: {show: false},
        },
        yAxis: {
          type: 'value',
          splitLine: {lineStyle: {color: '#073E78'}},
          axisLabel: {
            formatter(val) {
              return val * 100 + '%';
            }
          }
        },
        series: [
          {
            name: '抢劫',
            type: 'line',
            data: data[0]
          },
          {
            name: '醉驾',
            type: 'line',
            data: data[1]
          },
          {
            name: '盗窃',
            type: 'line',
            data: data[2]
          },
          {
            name: '故意杀人',
            type: 'line',
            data: data[3]
          },
          {
            name: '故意伤人',
            type: 'line',
            data: data[4]
          }
        ].map(obj => ({
          ...obj,
          symbol: 'circle',
          symbolSize: px(12),
          lineStyle: {width: px(2)}
        }))
      }));
    }
    renderChart([randomGenerator.getArray(0.01,0.1,9),randomGenerator.getArray(0.01,0.1,9),randomGenerator.getArray(0.01,0.1,9),randomGenerator.getArray(0.01,0.1,9),randomGenerator.getArray(0.01,0.1,9)])
  }, []);

  return (
    <div className="bordered 发案趋势">
      <h2>发案趋势分析</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};