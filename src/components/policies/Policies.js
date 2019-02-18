import React from "react";
import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";
import Pencil from "mdi-material-ui/Pencil";
import MinusCircle from "mdi-material-ui/MinusCircle";
import { getAllPolicies } from "../../services/PolicyService";

class Policies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      policies: {}
    };
  }

  componentWillMount() {
    console.log(getAllPolicies())
    var policies = JSON.parse(localStorage.getItem("policies"));
    this.setState({
      policies: policies
    });
  }

  UNSAFE_componentWillReceiveProps() {
    var policies = JSON.parse(localStorage.getItem("policies"));
    this.setState({
      policies: policies
    });
  }

  handlePencilClick = () => {
    this.props.editPolicy(true)
  };

  handleMinusClick = () => {
    // Delete policy
  };
  render() {
    return (
      <div>
        <div>
          <Typography variant="h6" id="tableTitle">
            All Policies
          </Typography>
        </div>
        <div>
          <Table variant="outlined">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Policy Number</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Date of Payment</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.policies && this.state.policies.map((policy, index) => (
                <TableRow key={index}>
                  <TableCell>{policy.holderName}</TableCell>
                  <TableCell>{policy.policyNumber}</TableCell>
                  <TableCell>{policy.mobileNumber}</TableCell>
                  <TableCell>{policy.amount}</TableCell>
                  <TableCell>{policy.email}</TableCell>
                  <TableCell>{policy.dateOfPayment}</TableCell>
                  <TableCell>
                    <span>
                      <Pencil onClick={() => this.handlePencilClick(index)} />
                      <MinusCircle onClick={() => this.handleMinusClick(index)} />
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Policies;
