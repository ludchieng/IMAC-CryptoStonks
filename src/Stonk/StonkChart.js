import React from 'react';
import { Line } from 'react-chartjs-2';
import fetchExchangeRates from './StonkFetcher';

class StonkChart extends React.Component {

  chartRef = React.createRef();
  state = {
    data: []
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Prevent chartjs reloading
    return false;
  }

  componentDidMount() {
    this.chart = this.chartRef.current.chartInstance;
    this.interval = setInterval(() =>
      fetchExchangeRates()
        .then((resp) => resp.json())
        .then((respData) => {
          const data = this.chart.data.datasets[0].data;
          // Push new data in front
          data.push(respData.message[this.props.cryptoSymbol]);
          // Pop oldest data
          if (data.length > 35)
            data.shift();

          // Match labels length to data length
          while (data.length > this.chart.data.labels.length)
            this.chart.data.labels.push('');

          this.chart.update();
        })
      , 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
            borderColor: '#f52e7a',
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
              ticks: {
                maxTicksLimit: 3,
                fontFamily: "'Rubik', Verdana, sans-serif",
                fontColor: "#a56982",
                fontSize: 18,
              },
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
