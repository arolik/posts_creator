import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React, { useState } from 'react';
import Register from './RegisterModal';
import Login from './LoginModal';

const AuthHandle:React.FC = ({}) => {

    const [isLogin, setLogin] = useState(false);
    const [isRegisterActive, setRegisterActive] = useState(false);
    const [isLoginActive, setLoginActive] = useState(false);

    return (
        <React.Fragment>
        {
            isLogin
            ?
            <Box>
                <Button>Logout</Button>
            </Box>
            :
            <Box>
                <Button color='inherit'>Register</Button>
                <Button color='inherit'>Login</Button>
            </Box>
            
        }
        {
            isRegisterActive && <Register />
        }
        {
            isLoginActive && <Login />
        }
        </React.Fragment>
    )
}

export default AuthHandle;