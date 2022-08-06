import React, {useEffect, useRef, useState} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import { randomGenerator } from './getRandom';

export const Chart1 = () => {
  const divRef = useRef(null);
  const myChart =useRef(null)
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    setInterval(()=>{
      let newData = randomGenerator.getArray(0,50,9)
      renderChart(newData)
    },2000)
    const renderChart=(data)=>{
      myChart.current.setOption(createEchartsOptions({
        xAxis: {
          data: ['城关区', '七里河区', '西固区', '安宁区', '红谷区', '永登区', '臬兰区', '榆中区', '兰州新区'],
          axisTick: {show: false},
          axisLine: {
            lineStyle: {color: '#083B70'}
          },
          axisLabel: {
            formatter(val) {
              if (val.length > 2) {
                const array = val.split('');
                array.splice(2, 0, '\n');
                return array.join('');
              } else {
                return val;
              }
            }
          },
        },
  
        yAxis: {
          splitLine: {show: false},
          axisLine: {
            show: true,
            lineStyle: {color: '#083B70'}
          }
        },
        series: [{
          type: 'bar',
          data: data
        }]
      }));
    }
    renderChart([10, 20, 36, 41, 15, 26, 37, 18, 29])
  }, []);

  return (
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart">

      </div>
    </div>
  );
};