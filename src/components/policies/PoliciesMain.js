import React from "react";
import Policies from "./Policies";
import { Button, Drawer } from "@material-ui/core";
import AddPolicy from "../home/AddPolicy";
import { getAllPolicies, deletePolicy } from "../../services/PolicyService";
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

  deletePolicy = async range => {
    var result = await deletePolicy(range);
    if(result.success){
      await this.getPolicies("all");
      this.toggleSnackbar(true, result.message, "success");
    }else{
      this.toggleSnackbar(true, result.message, "error");
    }
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
          <Policies editPolicy={this.editPolicy} policies={this.state.policies} deletePolicy={this.deletePolicy}/>
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
