'use client';

import ReactEChart from 'echarts-for-react';
import { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import { data } from '../data';

export function ScatterChart() {
  const [option, setOption] = useState({});

  useEffect(() => {
    const scatterOption: echarts.EChartsOption = {
      title: {
        text: 'Scatter Chart Example', // タイトルを追加
      },
      tooltip: {}, // ツールチップの設定
      xAxis: {
        type: 'value', // x軸の設定
      },
      yAxis: {
        type: 'value', // y軸の設定
      },
      series: [{
        type: 'scatter',
        data: data.map((point: { x: number, y: number }) => [point.x, point.y]),
        symbolSize: 20,
      }]
    };

    setOption(scatterOption); // カンマではなくセミコロンで終わる
  }, []);

  return (
    <div style={{ width: '100%', height: '400px' }}> {/* サイズ指定 */}
      <ReactEChart option={option} />
    </div>
  );
}
