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

class Policies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      policies: {}
    };
  }

  componentWillMount() {
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

  handlePencilClick = () => {};
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
              {this.state.policies.map((policy, index) => (
                <TableRow key={index}>
                  <TableCell>{policy.holderName}</TableCell>
                  <TableCell>{policy.policyNumber}</TableCell>
                  <TableCell>{policy.mobileNumber}</TableCell>
                  <TableCell>{policy.amount}</TableCell>
                  <TableCell>{policy.email}</TableCell>
                  <TableCell>{policy.dateOfPayment}</TableCell>
                  <TableCell>
                    <Pencil onClick={() => this.handlePencilClick(index)} />
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
