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
        autoHideDuration = {2000}
        open={this.props.open}
      >
        <SnackbarContent
          style={{ backgroundColor: 'green' }}
          aria-describedby="client-snackbar"
          message={
            <span id="client-snackbar" style={styles.spanClass}>
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

const styles = {
  spanClass: { display: 'flex', alignItems: 'center' }
}

export default SuccessSnackBar;