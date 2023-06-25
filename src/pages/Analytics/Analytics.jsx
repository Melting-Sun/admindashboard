import React, { useState } from "react";
import "./Analytics.css";
import Chart from "react-apexcharts";

const App = () => {
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

  return (
    <div className="analyticsContainer">
      <Chart options={options} series={series} type="bar" width="1000" />
    </div>
  );
};

export default App;
