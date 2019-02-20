import React from "react";
import Policies from "./Policies";
import { Button, Drawer, Select, MenuItem, CircularProgress } from "@material-ui/core";
import AddPolicy from "../home/AddPolicy";
import { getAllPolicies } from "../../services/PolicyService";
import CustomSnackbar from "../common/CustomSnackbar";
class PoliciesMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedPolicy: undefined,
      snackBar: {
        open: false,
        variant: "",
        message: ""
      },
      policies: [],
      loading: false,
    };
  }

  async componentDidMount() {
    await this.getPolicies("all");
  }

  getPolicies = async range => {
    var policies = await getAllPolicies(range);
    this.enableLoading(true);
    this.setState({
      policies: policies,
      loading:false
    });
  };

  enableLoading = (value) => {
    this.setState({
      loading: value
    })
  }

  toggleDrawer = open => {
    this.setState({
      open: open
    });
  };

  handleSnackBarClose = () => {
    this.setState({
      snackBar: {
        open: false
      }
    });
  };

  toggleSnackbar = (open, message, variant) => {
    this.setState({
      snackBar: {
        open: open,
        message: message,
        variant: variant
      }
    });
  };

  onPolicyAdd = result => {
    if (result.success) {
      this.toggleDrawer(false);
      let data = [...this.state.policies];
      data.unshift(result.data);
      this.setState({
        policies: data
      });
      this.toggleSnackbar(true, result.message, "success");
    } else {
      this.toggleSnackbar(true, result.message, "error");
    }
  };

  editPolicy = policy => {
    this.toggleDrawer(true);
    this.setState({
      selectedPolicy: policy
    });
  };

  handleChange = async event => {
    await this.getPolicies(event.target.value);
  };

  render() {
    return (
      <div>
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

          {/* {this.state.loading && <CircularProgress size={24} variant="indeterminate" />} */}
          <Policies editPolicy={this.editPolicy} policies={this.state.policies} />
        </div>
        <Drawer className="drawer" anchor="right" open={this.state.open} onClose={() => this.toggleDrawer(false)}>
          <AddPolicy
            closeDrawer={this.toggleDrawer}
            onPolicyAdd={this.onPolicyAdd}
            policy={this.state.selectedPolicy}
          />
        </Drawer>
        {this.state.snackBar.open && (
          <CustomSnackbar
            isOpen={this.state.snackBar.open}
            message={this.state.snackBar.message}
            variant={this.state.snackBar.variant}
            onClose={this.handleSnackBarClose}
          />
        )}
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
