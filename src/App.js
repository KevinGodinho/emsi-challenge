import React, { Component } from "react";
import Title from "./components/Title";
import LineChart from "./components/LineChart";
import OccupationSummary from "./components/OccupationSummary/OccupationSummary";
import EmployingIndustries from "./components/EmployingIndustries/EmployingIndustries";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    data: []
  };

  // Making server call and managing state to pass through application
  componentDidMount() {
    axios
      .get("http://www.mocky.io/v2/5a29b5672e00004a3ca09d33")
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
      .catch(err => console.log(err));
  }

  getPercentChange = (originalNumber, newNumber) => {
    const percent = ((newNumber - originalNumber) / originalNumber) * 100;
    return percent.toFixed(1);
  };

  render() {
    // destructure state values
    const { data } = this.state;
    const { getPercentChange } = this;

    if (data.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className={"container"}>
          <Title occupation={data.occupation} region={data.region} />
          <OccupationSummary
            summary={data.summary}
            getPercentChange={getPercentChange}
          />
          <LineChart
            trendComparison={data.trend_comparison}
            getPercentChange={getPercentChange}
          />
          <EmployingIndustries
            employingIndustries={data.employing_industries}
          />
        </div>
      );
    }
  }
}

export default App;
