import React from "react";
import { Card, CardContent } from "@material-ui/core";
import ExpiringPolicies from "./ExpiringPolicies";
import { getExpiringPolicies } from "../../services/PolicyService";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
      policies: [],
      expiringPolicies: [],
      open: false
    };
  }
  toggleDrawer = open => {
    this.setState({
      open: open
    });
  };

componentDidMount = async () => {
    let expiringPolicies = await getExpiringPolicies()
    this.setState({
        expiringPolicies: expiringPolicies
    })
}

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
        <Card>
          <CardContent>            
            <ExpiringPolicies expiringPolicies = {this.state.expiringPolicies}/>
          </CardContent>          
        </Card>
      </div>
    );
  }
}

export default Home;
