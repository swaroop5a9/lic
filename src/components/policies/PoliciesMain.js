import React from "react";
import Policies from "./Policies";
import { Button, Drawer, Select, MenuItem } from "@material-ui/core";
import AddPolicy from "../home/AddPolicy";
import SuccessSnackBar from "../common/SuccessSnackBar";
import { getAllPolicies } from "../../services/PolicyService";
class PoliciesMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      snackbarOpen: false,
      policies : []
    };
  }

  
  async componentDidMount() {
    await this.getPolicies("all");
  }

  getPolicies = async (range) => {
    var policies = await getAllPolicies(range);
    this.setState({
      policies: policies
    });
  }

  toggleDrawer = open => {
    this.setState({
      open: open
    });
  };

  toggleSnackbar = open => {
    this.setState({
      snackbarOpen: open
    });
  };

  onPolicyAdd = result => {
    if (result) {
      this.toggleDrawer(false);
      this.toggleSnackbar(true);
    } else {
      //do something
    }
  };

  editPolicy = () => {
    this.toggleDrawer(true);
  };

  handleChange = async event => {
    await this.getPolicies(event.target.value);
  };

  render() {
    return (
      <div>
        <Button
          color="secondary"
          variant="contained"
          style={styles.button}
          onClick={() => this.toggleDrawer(true)}
        >
          Add Policy
        </Button>
        <Select
          value=""
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
        <Policies editPolicy={this.editPolicy} policies = {this.state.policies}/>
        <Drawer className="drawer" anchor="right" open={this.state.open}>
          <AddPolicy
            closeDrawer={this.toggleDrawer}
            onPolicyAdd={this.onPolicyAdd}
          />
        </Drawer>
        <SuccessSnackBar
          open={this.state.snackbarOpen}
          handleClose={() => this.toggleSnackbar(false)}
        />
      </div>
    );
  }
}

const styles = {
  button: {
    float: "right"
  }
};

export default PoliciesMain;
