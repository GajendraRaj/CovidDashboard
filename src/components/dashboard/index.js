import React, { useState, useEffect } from "react";
import PieChart from "./pie-chart";
import CountriesData from "./countries-data";
import GlobalData from "./global-data/index";
import { fetchData } from "../../api/services";

const Dashboard = () => {
  const initialState = {
    Global: {},
    Countries: [],
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const fetchCovieData = async () => {
      const data = await fetchData();
      //console.log(data);
      setState((prevState) => {
        return {
          ...prevState,
          Global: data.Global,
          Countries: data.Countries,
        };
      });
    };
    fetchCovieData();
  }, []);

  if (state.Countries.length < 1) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <span style={{ width: "25%" }}>
          <GlobalData data={state.Global} />
        </span>
        <span style={{ width: "75%" }}>
          <PieChart data={state.Countries} />
        </span>
      </div>
      <br />
      <CountriesData Countries={state.Countries} />
    </div>
  );
};

export default Dashboard;
