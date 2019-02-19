import React from "react";
import green from "@material-ui/core/colors/green";
import amber from "@material-ui/core/colors/amber";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { withStyles } from "@material-ui/core/styles";
import CheckCircleIcon from "mdi-material-ui/CheckCircle";
import ErrorIcon from "mdi-material-ui/AlertCircle";
import InfoIcon from "mdi-material-ui/Information";
import WarningIcon from "mdi-material-ui/Alert";
import CloseIcon from "mdi-material-ui/Close";

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};
class CustomSnackbar extends React.Component {
  render() {
    const {
      classes,
      className,
      message,
      onClose,
      variant,
      isOpen,
      ...other
    } = this.props;
    const Icon = variantIcon[variant];
    return (
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={isOpen}
        onClose={onClose}
        autoHideDuration={4000}
      >
        <SnackbarContent
          className={`${classes[variant]} ${className}`}
          aria-describedby="client-snackbar"
          message={
            <span id="client-snackbar" className={classes.message}>
              <Icon className={`${classes.icon} ${classes.iconVariant}`} />
              {message}
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={onClose}
            >
              <CloseIcon className={classes.icon} />
            </IconButton>
          ]}
          {...other}
        />
      </Snackbar>
    );
  }
}

const styles1 = theme => ({
  success: {
    backgroundColor: green[600],
    padding: "6px 5px !important"
  },
  error: {
    backgroundColor: theme.palette.error.dark,
    padding: "6px 5px !important"
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
    padding: "6px 5px !important"
  },
  warning: {
    backgroundColor: amber[700],
    padding: "6px 5px !important"
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
});

export default withStyles(styles1)(CustomSnackbar);
