import React, { Component } from "react";
import Title from "./components/Title";
import RegionalTrends from "./components/RegionalTrends/RegionalTrends";
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

  // get percentage difference of job numbers between years
  getPercentChange = (originalNumber, newNumber) => {
    const percent = ((newNumber - originalNumber) / originalNumber) * 100;
    return Number(percent.toFixed(1));
  };

  // get percentages for occupation in industry and total jobs in industry
  getIndustryPercent = (occupationNumber, jobsNumber) => {
    const percent = (occupationNumber / jobsNumber) * 100;
    return percent.toFixed(1);
  };

  render() {
    // destructure values
    const { data } = this.state;
    const {
      occupation,
      region,
      summary,
      trend_comparison,
      employing_industries
    } = data;
    const { getPercentChange, getIndustryPercent } = this;

    if (data.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className={"container"}>
          <Title occupation={occupation} region={region} />
          <OccupationSummary
            summary={summary}
            getPercentChange={getPercentChange}
          />
          <RegionalTrends
            trendComparison={trend_comparison}
            getPercentChange={getPercentChange}
          />
          <EmployingIndustries
            employingIndustries={employing_industries}
            getIndustryPercent={getIndustryPercent}
          />
        </div>
      );
    }
  }
}

export default App;
