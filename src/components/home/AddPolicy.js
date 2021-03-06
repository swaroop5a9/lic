import React from "react";
import { addPolicy } from "../../services/PolicyService";
import { Button, TextField, Typography } from "@material-ui/core";
import Close from "mdi-material-ui/Close";

class AddPolicy extends React.Component {
  constructor(props) {
    super(props);
    let policy;
    let isEdit;
    if (props.policy !== undefined) {
      policy = props.policy;
      isEdit = true;
    } else {
      policy = {
        fullName: "",
        policyNumber: "",
        policyName: "",
        policyType: "",
        paymentMode: "",
        dateOfPayment: "",
        amount: "",
        tenure: "",
        mobileNumber: "",
        email: "",
        address: "",
        nomineeName: ""
      };
      isEdit = false;
    }
    this.state = {
      isError: false,
      policy: policy,
      isEdit: isEdit
    };
  }

  handleSave = async () => {
    if (
      this.state.policy.fullName === "" ||
      this.state.policy.policyNumber === "" ||
      this.state.policy.policyName === "" ||
      this.state.policy.policyType === "" ||
      this.state.policy.paymentMode === "" ||
      this.state.policy.dateOfPayment === "" ||
      this.state.policy.amount === "" ||
      this.state.policy.mobileNumber === "" ||
      this.state.policy.tenure === "" ||
      this.state.policy.email === "" ||
      this.state.policy.address === "" ||
      this.state.policy.nomineeName === ""
    ) {
      this.setState({ isError: true });
    } else {
      let result = await addPolicy(this.state.policy, this.state.isEdit);
      this.props.onPolicyAdd(result);
    }
  };

  handleChange = event => {
    const eve = { ...event };
    this.setState(prevState => ({
      policy: {
        ...prevState.policy,
        [eve.target.name]: eve.target.value
      }
    }));
  };

  render() {
    return (
      <div>
        <div>
          <Typography>Add Policy</Typography>
          <Close
            className="closeDrawer"
            onClick={() => this.props.closeDrawer(false)}
          />
          <TextField
            onChange={this.handleChange}
            required
            fullWidth
            value={this.state.policy.fullName}
            margin="normal"
            variant="outlined"
            label="Policy Holder name"
            name="fullName"
            id="fullName"
            InputLabelProps={{ shrink: true }}
            error={this.state.isError && this.state.policy.fullName === ""}
          />

          <TextField
            onChange={this.handleChange}
            required
            fullWidth
            value={this.state.policy.policyNumber}
            margin="normal"
            variant="outlined"
            label="Policy Number"
            name="policyNumber"
            InputLabelProps={{ shrink: true }}
            id="policyNumber"
            error={this.state.isError && this.state.policy.policyNumber === ""}
          />
          <TextField
            onChange={this.handleChange}
            required
            fullWidth
            value={this.state.policy.policyName}
            margin="normal"
            variant="outlined"
            label="Policy Name"
            name="policyName"
            InputLabelProps={{ shrink: true }}
            id="policyName"
            error={this.state.isError && this.state.policy.policyName === ""}
          />
          <TextField
            onChange={this.handleChange}
            required
            fullWidth
            value={this.state.policy.policyType}
            margin="normal"
            variant="outlined"
            label="Policy Type"
            name="policyType"
            InputLabelProps={{ shrink: true }}
            id="policyType"
            error={this.state.isError && this.state.policy.policyType === ""}
          />
          <TextField
            onChange={this.handleChange}
            required
            fullWidth
            value={this.state.policy.paymentMode}
            margin="normal"
            variant="outlined"
            label="Payment Mode"
            name="paymentMode"
            InputLabelProps={{ shrink: true }}
            id="paymentMode"
            error={this.state.isError && this.state.policy.paymentMode === ""}
          />
          <TextField
            onChange={this.handleChange}
            type="date"
            required
            fullWidth
            value={this.state.policy.dateOfPayment}
            margin="normal"
            variant="outlined"
            label="Date of Payment"
            name="dateOfPayment"
            id="dateOfPayment"
            InputLabelProps={{ shrink: true }}
            error={this.state.isError && this.state.policy.dateOfPayment === ""}
          />
          <TextField
            onChange={this.handleChange}
            required
            fullWidth
            value={this.state.policy.amount}
            type="number"
            margin="normal"
            variant="outlined"
            label="Amount"
            name="amount"
            id="amount"
            InputLabelProps={{ shrink: true }}
            error={this.state.isError && this.state.policy.amount === ""}
          />
          <TextField
            onChange={this.handleChange}
            required
            fullWidth
            value={this.state.policy.tenure}
            type="number"
            margin="normal"
            variant="outlined"
            label="Tenure"
            name="tenure"
            id="tenure"
            InputLabelProps={{ shrink: true }}
            error={this.state.isError && this.state.policy.tenure === ""}
          />
          <TextField
            onChange={this.handleChange}
            required
            fullWidth
            value={this.state.policy.mobileNumber}
            type="number"
            margin="normal"
            variant="outlined"
            label="Mobile Number"
            name="mobileNumber"
            id="mobileNumber"
            InputLabelProps={{ shrink: true }}
            //   inputProps={{size:10}}
            error={this.state.isError && this.state.policy.mobileNumber === ""}
          />
          <TextField
            onChange={this.handleChange}
            required
            fullWidth
            value={this.state.policy.email}
            margin="normal"
            variant="outlined"
            label="Email"
            name="email"
            id="email"
            InputLabelProps={{ shrink: true }}
            error={this.state.isError && this.state.policy.email === ""}
          />
          <TextField
            onChange={this.handleChange}
            required
            fullWidth
            margin="normal"
            multiline
            value={this.state.policy.address}
            variant="outlined"
            label="Address"
            rows="5"
            name="address"
            id="address"
            InputLabelProps={{ shrink: true }}
            error={this.state.isError && this.state.policy.address === ""}
          />
          <TextField
            onChange={this.handleChange}
            required
            fullWidth
            value={this.state.policy.nomineeName}
            margin="normal"
            variant="outlined"
            label="Nominee Name"
            name="nomineeName"
            id="nomineeName"
            InputLabelProps={{ shrink: true }}
            error={this.state.isError && this.state.policy.nomineeName === ""}
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="secondary"
            name="saveButton"
            onClick={this.handleSave}
          >
            Save
          </Button>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}
export default AddPolicy;
