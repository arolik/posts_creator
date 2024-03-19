import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Register from './RegisterModal';
import Login from './LoginModal';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const AuthHandle:React.FC = () => {

    const [isActiveRegisterModal, setActiveRegisterModal] = useState(false);
    const [isActiveLoginModal, setActiveLoginModal] = useState(false);
    const token = useAppSelector(state => state.authSlice.token);
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    
    function leaveApp () {
        dispatch(logout());
        window.localStorage.removeItem('token');
        navigate('/')
    }
    
    return (
        <React.Fragment>
        {
            token
            ?
            <Box>
                <Button color='inherit' onClick={leaveApp} >Logout</Button>
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