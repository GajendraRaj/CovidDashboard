import React from "react";
import moment from "moment";

const CountriesData = (props) => {
  return (
    <div>
      <h3>Country wise corona cases details</h3>
      <table className="table">
        <thead style={{ color: "Brown", backgroundColor: "Grey" }}>
          <tr>
            <th>Country</th>
            <th>New Cases</th>
            <th>Total Cases</th>
            <th>Total Deaths</th>
            <th>Total Recovered</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {props.Countries.length > 0 &&
            props.Countries.map((data) => (
              <tr key={data.CountryCode}>
                <td>{data.Country}</td>
                <td>{data.NewConfirmed}</td>
                <td>{data.TotalConfirmed}</td>
                <td>{data.TotalDeaths}</td>
                <td>{data.TotalRecovered}</td>
                <td>{moment(data.Date).format("YYYY-MM-DD")}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CountriesData;
