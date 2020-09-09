import React, { Fragment } from "react";

const GlobalData = (props) => {
  return (
    <Fragment>
      <h4>Global corona cases detail</h4>
      <div style={{ padding: "20px 20px", color: "Brown" }}>
        <div>
          Total Case: <b>{props.data.TotalConfirmed}</b>
        </div>
        <div>
          New Case: <b>{props.data.TotalConfirmed}</b>
        </div>
        <div>
          Total Deaths: <b>{props.data.TotalConfirmed}</b>
        </div>
        <div>
          New Deaths Case: <b>{props.data.NewDeaths}</b>
        </div>
        <div>
          Total Recovered: <b>{props.data.TotalConfirmed}</b>
        </div>
        <div>
          New Recovered Case: <b>{props.data.NewRecovered}</b>
        </div>
      </div>
    </Fragment>
  );
};

export default GlobalData;
