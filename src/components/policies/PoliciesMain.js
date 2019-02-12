import React from "react";
import Policies from "./Policies";
import { Button, Drawer } from "@material-ui/core";
import AddPolicy from "../home/AddPolicy";
class PoliciesMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleDrawer = open => {
    this.setState({
      open: open
    });
  };

  onPolicyAdd = result => {
    if (result) {
      this.toggleDrawer(false);
    } else {
      //do something
    }
  };

  render() {
    return (
      <div>
        <Button color="secondary" variant="contained" onClick={()=>this.toggleDrawer(true)}>Add Policy</Button>
        <Policies />
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
      </div>
    );
  }
}
export default PoliciesMain;
