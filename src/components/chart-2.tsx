import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';

export const Chart2 = () => {
const px = (n) => n / 2420 * (window as any).pageWidth;
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption({
      grid: {
        x: px(100),
        y: px(40),
        x2: px(40),
        y2: px(40),
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLabel: {
            fontSize: px(12)
          }
      },
      yAxis: {
        type: 'category',
        data: ['城关区公安局', '七里河区公安局', '安宁区公安局', '红古区公安局', '永登区公安局', '臬兰区县公安局','榆中县公安局','新区公安局'],
        axisLabel: {
            fontSize: px(12)
          }
      },
      series: [
        {
          name: '2011年',
          type: 'bar',
          data: [18203, 23489, 23489,29034, 104970, 104970,131744, 630230]
        },
        {
          name: '2012年',
          type: 'bar',
          data: [ 681807,19325, 23438, 31000, 121594, 134141, 681807, 134141]
        }
      ]
    });
  }, []);

  return (
    <div className="bordered chart2">
      <h2>案件破获排名</h2>
      <div ref={divRef} className="chart">

      </div>
    </div>
  );
};