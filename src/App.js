import React, { Component } from "react";
import Title from "./components/Title";
import LineChart from "./components/LineChart";
import OccupationSummary from "./components/OccupationSummary/OccupationSummary";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    occupationTitle: "",
    regionTitle: "",
    jobs: {},
    jobsGrowth: {},
    earnings: {}
  };

  // Making server call and managing state to pass through application
  componentDidMount = () => {
    axios
      .get("http://www.mocky.io/v2/5a29b5672e00004a3ca09d33#")
      .then(res => {
        const data = res.data;
        this.setState({
          occupationTitle: data.occupation.title,
          regionTitle: data.region.title,
          jobs: data.summary.jobs,
          jobsGrowth: data.summary.jobs_growth,
          earnings: data.summary.earnings
        });
      })
      .catch(err => console.log(err));
  };

  getPercentChange = (originalNumber, newNumber) => {
    return Math.round(((newNumber - originalNumber) / originalNumber) * 100);
  };

  render() {
    // destructure state values
    const {
      occupationTitle,
      regionTitle,
      jobs,
      jobsGrowth,
      earnings
    } = this.state;

    return (
      <div className={"container"}>
        <Title occupationTitle={occupationTitle} regionTitle={regionTitle} />
        <OccupationSummary
          jobs={jobs}
          jobsGrowth={jobsGrowth}
          earnings={earnings}
          getPercentChange={this.getPercentChange}
        />
        <LineChart />
      </div>
    );
  }
}

export default App;
