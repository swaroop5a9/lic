import React from 'react';
import Login from '../components/login/Login';
class LoginPage extends React.Component {

    render() {

        return (
            <div style={styles.loginForm}>
                <Login />
            </div>
        );
    }
}

const styles = {
    loginForm: {
      padding: 16,
      display:'flex'
    }
  };

export default LoginPage;