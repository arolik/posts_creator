import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, FormControlLabel, Switch, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from 'react';
import { RegisterPropsModalI } from "../interfaces/common";
import { useAppDispatch } from "../redux/hooks";
import { registerUserThunk } from "../redux/authSlice";


const Register: React.FC<RegisterPropsModalI> = ({ isOpen, setOpen }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();


    function handleSubmit() {
        dispatch(registerUserThunk({username, password}))
    }

    return (
        <Dialog
            open={isOpen}
            onClose={() => { setOpen(false) }}
        >
            <DialogTitle>
                <Typography sx={{ textAlign: 'center' }}>
                    Register
                </Typography>
            </DialogTitle>
            <Divider />
            <DialogContent>
                <form>
                    <TextField label="Login" type="text" fullWidth sx={{ margin: '0.5rem 0' }}
                        value={username} autoComplete="username"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setUsername(event.target.value) }}
                    />
                    <TextField label="Password" type={showPassword ? 'text' : 'password'} fullWidth sx={{ margin: '0.5rem 0' }}
                        value={password} autoComplete="current-password"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setPassword(event.target.value) }}
                    />
                    <FormControl>
                        <FormControlLabel
                            control={<Switch checked={showPassword} onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setShowPassword(event.target.checked) }} />}
                            label="Show password"
                        />
                    </FormControl>
                    <DialogActions>
                        <Button onClick={handleSubmit}>Register</Button>
                        <Button onClick={() => { setOpen(false) }}>Cancel</Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default Register;