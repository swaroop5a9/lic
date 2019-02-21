import React from "react";
import { Card, CardContent, Select, MenuItem, InputLabel } from "@material-ui/core";
import ExpiringPolicies from "./ExpiringPolicies";
import { getExpiringPolicies, getAllPolicies } from "../../services/PolicyService";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expiringPolicies: [],
      expiringPoliciesTime:''
    };
  }

  componentDidMount = async () => {
    let expiringPolicies = await getExpiringPolicies()
    this.setState({
      expiringPolicies: expiringPolicies
    })
  }

  handleChange = async event => {
    let expiringPoliciesTime = event.target.value
    this.setState({
      expiringPoliciesTime : expiringPoliciesTime
    })
    await this.getPolicies(expiringPoliciesTime);
  };

  getPolicies = async range => {
    var policies = await getAllPolicies(range);
    this.setState({
      expiringPolicies: policies,
    });
  };

  render() {

    return (
      <div>
        <Card>
          <CardContent>
            <InputLabel htmlFor="age-simple" variant="outlined">Expiring Policies in</InputLabel>
            <Select
              value={this.state.expiringPoliciesTime}
              onChange={this.handleChange}
              style={styles.button}
              inputProps={{
                name: "age",
                id: "age-simple"
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="1week">
                <em>One Week</em>
              </MenuItem>
              <MenuItem value="2weeks">
                <em>Two Weeks</em>
              </MenuItem>
              <MenuItem value="1month">
                <em>One Month</em>
              </MenuItem>
              <MenuItem value="3month">
                <em>Three Months</em>
              </MenuItem>
            </Select>
            <ExpiringPolicies expiringPolicies={this.state.expiringPolicies} />
          </CardContent>
        </Card>
      </div>
    );
  }
}

const styles = {
  button: {
    display: 'flex'
  }
};

export default Home;
