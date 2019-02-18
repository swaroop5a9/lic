import React from 'react'
import { Snackbar, SnackbarContent } from '@material-ui/core'
import Close from "mdi-material-ui/Close";
import CheckCircleOutline from "mdi-material-ui/CheckCircleOutline";
class SuccessSnackBar extends React.Component {

  render() {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={this.props.open}
      >
        <SnackbarContent
          style={{ backgroundColor: 'green' }}
          aria-describedby="client-snackbar"
          message={
            <span id="client-snackbar" style={{ display: 'flex' }}>
              <CheckCircleOutline />
              Policy details added successfully
            </span>
          }
          action={[

            <Close key='close' onClick={this.props.handleClose} />

          ]}
        />
      </Snackbar>
    )
  }
}

export default SuccessSnackBar;