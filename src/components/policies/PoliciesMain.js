import React from "react";
import Policies from "./Policies";
import { Button, Drawer } from "@material-ui/core";
import AddPolicy from "../home/AddPolicy";
import SuccessSnackBar from "../common/SuccessSnackBar";
class PoliciesMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      snackbarOpen : false
    };
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
      this.toggleSnackbar(true)
    } else {
      //do something
    }
  };

  editPolicy = ()=>{
    this.toggleDrawer(true);
  }
  

  render() {
    return (
      <div>
        <Button color="secondary" variant="contained" onClick={()=>this.toggleDrawer(true)}>Add Policy</Button>
        <Policies editPolicy={this.editPolicy}/>
        <Drawer
          className="drawer"
          anchor="right"
          open={this.state.open}
        >
          <AddPolicy
            closeDrawer={this.toggleDrawer}
            onPolicyAdd={this.onPolicyAdd}
          />
        </Drawer>
        <SuccessSnackBar open={this.state.snackbarOpen} handleClose = {()=>this.toggleSnackbar(false)}/>
      </div>
    );
  }
}
export default PoliciesMain;
