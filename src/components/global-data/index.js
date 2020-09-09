import React, { Fragment } from "react";

const GlobalData = (props) => {
  return (
    <Fragment>
      <h4>Global corona cases detail</h4>
      <div style={{ padding: "20px 20px", color: "Brown" }}>
        <div>
          Total Cases: <b>{props.data.TotalConfirmed}</b>
        </div>
        <div>
          New Cases: <b>{props.data.TotalConfirmed}</b>
        </div>
        <div>
          Total Deaths: <b>{props.data.TotalConfirmed}</b>
        </div>
        <div>
          New Deaths Cases: <b>{props.data.NewDeaths}</b>
        </div>
        <div>
          Total Recovered Cases: <b>{props.data.TotalConfirmed}</b>
        </div>
        <div>
          New Recovered Case: <b>{props.data.NewRecovered}</b>
        </div>
      </div>
    </Fragment>
  );
};

export default GlobalData;
