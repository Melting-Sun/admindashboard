import React, { useState } from 'react';
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [series, setSeries] = useState([44, 55, 13, 33]);
  const options = {
    chart: {
      width: 380,
      type: 'donut',
    },
    dataLabels: {
      enabled: false
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          show: false
        }
      }
    }],
    legend: {
      position: 'right',
      offsetY: 0,
      height: 230,
    }
  };

  const appendData = () => {
    setSeries(prevSeries => [...prevSeries, Math.floor(Math.random() * (100 - 1 + 1)) + 1]);
  };

  const removeData = () => {
    if (series.length === 1) return;
    setSeries(prevSeries => prevSeries.slice(0, prevSeries.length - 1));
  };

  const randomize = () => {
    setSeries(prevSeries => prevSeries.map(() => Math.floor(Math.random() * (100 - 1 + 1)) + 1));
  };

  const reset = () => {
    setSeries([44, 55, 13, 33]);
  };

  return (
    <div style={{flex:'4', justifyContent: 'center', marginLeft: '250px'}}>
      <div className="chart-wrap">
        <div id="chart">
          <ReactApexChart options={options} series={series} type="donut" width={750} />
        </div>
      </div>

      <div className="actions" style={{marginLeft: '175px'}}>
        <button onClick={appendData}>+ ADD</button>
        &nbsp;
        <button onClick={removeData}>- REMOVE</button>
        &nbsp;
        <button onClick={randomize}>RANDOMIZE</button>
        &nbsp;
        <button onClick={reset}>RESET</button>
      </div>
    </div>
  );
};

export default ApexChart;
