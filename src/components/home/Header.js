import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from 'mdi-material-ui/Menu';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom'

class Header extends React.Component {
  handleClick=(action)=>{
    var url
    if(action==='home'){
      url='home'
    }else if(action==='allpolicies'){
      url='policies'
    }else if(action==='expiringpolicies'){
      url='expiringpolicies'
    }
    this.props.history.push('/'+url)
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
          <Button onClick={()=>this.handleClick('allpolicies')}>All policies</Button>
          <Button onClick={()=>this.handleClick('expiringpolicies')}>Expiring policies</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withRouter(Header)