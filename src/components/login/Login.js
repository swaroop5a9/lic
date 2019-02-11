import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Card, CardContent, Typography } from '@material-ui/core';
import {withRouter} from 'react-router-dom'
// import '.././css/drawer.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // user: {
            username: '',
            password: '',
            selected: [],
            uerror: false,
            perror: false,
            // }
        }
    }

    handleChange = (event) => {
        const eve = { ...event }
        this.setState(prevState => ({
            // ...prevState, user: {
            [eve.target.name]: eve.target.value
            // }
        }))
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    handleClick = () => {

        if (this.state.username === '' || this.state.password === '') {
            if (this.state.username === '') {
                this.setState({
                    uerror: true
                })
            } else {
                this.setState({
                    uerror: false
                })
            }
            if (this.state.password === '') {
                this.setState({
                    perror: true
                })
            }
            else {
                this.setState({
                    perror: false
                })

            }
        } else {
            this.props.history.push('/home')
        }
    }

    render() {

        return (
            <div>
                {/* <Card> style={{ minWidth: 275 }} */}
                <Card style={{ width: 275, display: 'inline-block' }}>
                    <CardContent>
                        <Typography color="textPrimary">
                            Login Page
                        </Typography>
                        <div>
                            <TextField id="username" name="username" label="User Name"
                                error={this.state.uerror} variant="outlined" onChange={this.handleChange} />
                            <br /><br />
                            <TextField id="password" name="password" type="password"
                                error={this.state.perror} label="Password" variant="outlined" onChange={this.handleChange} />
                        </div>
                        <br />
                        <div>
                            {/* <Link to="/home"> */}
                            <Button variant="outlined" size="medium" id="login" color="primary" name="login" onClick={() => this.handleClick()}>Login</Button>
                            {/* </Link> */}
                        </div>
                    </CardContent>

                </Card>

                <br />

            </div>
        );
    }
}

export default withRouter(Login);