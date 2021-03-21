import React from 'react';
import { Line } from 'react-chartjs-2';
import { time, depth } from './data';
import './DiveChart.css';

function DiveChart() {
  /*
    // data- configuración a mostrar en la gráfica
  const data = {
    // labels - parámetros a comparar
    labels: ['a', 'b', 'c', 'd', 'e'],
    // personalización de la gráfica
    datasets: [{
      // profundidad?
      label: 'Profundidad',
      backgroundColor: '#000000'

    }]
};
 */

  const state = {
    labels: time,
    datasets: [
      {
        label: 'Rainfall',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 3,
        data: depth
      }
    ]
  };
  return (
    <div className="dive-chart">
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: 'Depth by time',
            fontSize: 20
          },
          legend: {
            display: false,
            position: 'right'
          }
        }}
      />
    </div>
  );
}

export default DiveChart;
