import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";

const PieChart = (props) => {
  const initialState = {
    Data: {},
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    const countries = [];
    const totalCase = [];
    const sliceColor = [];

    const dynamicColors = () => {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      return "rgb(" + r + "," + g + "," + b + ")";
    };

    props.data.forEach((country) => {
      countries.push(country.Country);
      totalCase.push(country.TotalConfirmed);
      sliceColor.push(dynamicColors());
    });

    setState((prevState) => {
      return {
        ...prevState,
        Data: {
          labels: countries,
          datasets: [
            {
              label: countries,
              data: totalCase,
              backgroundColor: sliceColor,
            },
          ],
        },
      };
    });
  }, [props]);

  return (
    <div>
      <Pie
        data={state.Data}
        height={300}
        width={1000}
        options={{
          title: {
            display: true,
            text: "Country wise corona cases",
            fontSize: 25,
          },
          legend: {
            display: false,
          },
        }}
      />
    </div>
  );
};

export default PieChart;
