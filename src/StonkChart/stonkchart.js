import React from 'react';
import { Line } from 'react-chartjs-2';
import fetchExchangeRates from'../StonkFetcher/stonkfetcher';

class StonkChart extends React.Component {

  chartRef = React.createRef(); 

  componentDidMount() {
    this.chart = this.chartRef.current.chartInstance
    this.interval = setInterval(() =>
      fetchExchangeRates()
      .then((resp) => resp.json())
      .then((respData) => {
        const data = this.chart.data.datasets[0].data
        // Push new data in front
        data.push(respData.message.stonkimac)
        // Pop oldest data
        if (data.length > 35)
          data.shift()
        
        // Match labels length to data length
        while (data.length > this.chart.data.labels.length)
          this.chart.data.labels.push('')

        this.chart.update()
      })
    , 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
  
  render() {
    return (
      <Line
        ref={this.chartRef}

        data={{
          labels: [],
          datasets: [{
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            pointRadius: 0,
            pointHitRadius: 0,
            data: []
          }]
        }}

        options={{
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              ticks: { display: false },
              
              gridLines: {
                color: "transparent",
              }
            }],
            yAxes: [{
              position: 'right',
              ticks: { /*stepSize: 10*/ },
            }]
          },
          layout: {
              padding: {
                  left: 0,
                  right: 10,
                  top: 20,
                  bottom: 10
              }
          }
        }} />
      )
    };

}

export default StonkChart;
