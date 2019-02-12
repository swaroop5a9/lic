import React from "react";
import { Card, CardContent } from "@material-ui/core";
import ExpiringPolicies from "./ExpiringPolicies";
import { withRouter } from "react-router-dom";
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
    
    return (
      <div>
        <Card className="card">
          <CardContent>            
            <ExpiringPolicies />
          </CardContent>          
        </Card>
      </div>
    );
  }
}

export default Home;
