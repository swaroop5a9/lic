import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from 'mdi-material-ui/Menu';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom'

class Header extends React.Component {
  handleClick=(actionURL)=> {
    this.props.history.push('/'+actionURL)
  }
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon/>
          </IconButton>
          
          <Typography variant="h6" color="inherit" >
          <Button onClick={()=>this.handleClick('home')}>Our LIC</Button>
          </Typography>
          <Button onClick={()=>this.handleClick('policies')}>All policies</Button>
          <Button onClick={()=>this.handleClick('expiring-policies')}>Expiring policies</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withRouter(Header)