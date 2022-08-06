import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import { randomGenerator } from './getRandom';

export const Chart9 = () => {
  const divRef = useRef(null);
  const myChart =useRef(null)
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    setInterval(()=>{
      const newData = randomGenerator.getArray(0.08,0.38,3)
      renderChart(newData)
    },1500)
    const renderChart=(data)=>{
      myChart.current.setOption(createEchartsOptions({
        color: '#F7A110',
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [0, 18, 28, 38, 48, 58, 68, 78],
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
        series: [{
          type: 'line',
          data: [
            data[0], 0.20, 0.26,
            data[1], 0.26, 0.20,
            data[2], 0.06
          ],
          symbol: 'circle',
          symbolSize: px(12),
          lineStyle: {width: px(2)},
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#F7A110'
            }, {
              offset: 1,
              color: '#1B1D52'
            }]),
          }
        }]
      }));
    }
    renderChart([0.19,0.35,0.08])
  }, []);

  return (
    <div className="年龄段-图3">
        <h3>犯罪年龄趋势图</h3>
        <div ref={divRef} className="chart">
        </div>
    </div>
  );
};