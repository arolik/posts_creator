import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React, { useState } from 'react';
import Register from './RegisterModal';
import Login from './LoginModal';

const AuthHandle:React.FC = () => {

    const [isLogin, setLogin] = useState(false);
    const [isActiveRegisterModal, setActiveRegisterModal] = useState(false);
    const [isActiveLoginModal, setActiveLoginModal] = useState(false);
    
    
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
                <Button color='inherit' onClick={ () => {setActiveRegisterModal(true)} } >Register</Button>
                <Button color='inherit' onClick ={ () => {setActiveLoginModal(true)} } >Login</Button>
            </Box>
            
        }
        {
            isActiveRegisterModal && <Register isOpen={isActiveRegisterModal} setOpen={setActiveRegisterModal} />
        }
        {
            isActiveLoginModal && <Login isOpen={isActiveLoginModal} setOpen={setActiveLoginModal} />
        }
        </React.Fragment>
    )
}

export default AuthHandle;