import React, { useState } from 'react'
import Chart from 'react-apexcharts'

class PieChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [44, 55, 13, 43, 22],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 500
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    }

    render() {
      return (
        <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="pie" width={580} />
        </div>
    );
    }
  }

export default PieChart
