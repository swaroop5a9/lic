import React from "react";
import { Button, Card, Drawer, CardContent } from "@material-ui/core";
import ExpiringPolicies from "./ExpiringPolicies";
import Header from "./Header";
import { withRouter } from "react-router-dom";
import AddPolicy from "./AddPolicy";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
      policies: [],
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
    }else{
      //do something
    }
  };

  render() {
    const aStyle = { width: "50%" };
    return (
      <div>
        <Card className="card">
          <CardContent>            
            <ExpiringPolicies />
          </CardContent>          
        </Card>
        {/* <Drawer
          className="drawer"
          anchor="right"
          open={this.state.open}
          style={aStyle}
        >
          <AddPolicy closeDrawer={this.toggleDrawer} onPolicyAdd={this.onPolicyAdd} />
        </Drawer> */}
      </div>
    );
  }
}

export default Home;
