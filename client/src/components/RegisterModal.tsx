import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, FormControlLabel, Switch, TextField, Typography } from "@mui/material";
import React, { useState } from 'react';
import { IFormValues, IRegisterPropsModal } from "../interfaces/common";
import { useAppDispatch } from "../redux/hooks";
import { registerUserThunk } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler, Controller } from 'react-hook-form'


const Register: React.FC<IRegisterPropsModal> = ({ isOpen, setOpen }) => {

    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { handleSubmit, control, formState: { errors } } = useForm<IFormValues>();

    const handleRegisterData: SubmitHandler<IFormValues> = (data) => {
        dispatch(registerUserThunk({username: data.login, password: data.password}));
        navigate('/')
        setOpen(false);
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
                <form onSubmit={handleSubmit(handleRegisterData)} >
                    <Controller
                        name="login"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Login must be to type', minLength: { value: 3, message: 'Login must be min 3 characters' },}}
                        render={({ field }) => (
                            <TextField label="Login" type="text" placeholder="Login" fullWidth sx={{ margin: '0.5rem 0' }}
                                autoComplete="username"
                                onChange={(event) => { field.onChange(event) }}
                                value={field.value}
                                error={!!errors.login?.message}
                                helperText={errors.login?.message}
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Password must be to type', minLength: { value: 3, message: 'Password must be min 3 characters' } }}
                        render={({ field }) => (
                            <TextField label="Password" type={showPassword ? 'text' : 'password'} placeholder="Password"
                                fullWidth sx={{ margin: '0.5rem 0' }} autoComplete="current-password"
                                onChange={(event) => { field.onChange(event) }}
                                value={field.value}
                                error={!!errors.password?.message}
                                helperText={errors.password?.message}
                            />
                        )}
                    />
                    <FormControl>
                        <FormControlLabel
                            control={<Switch checked={showPassword} onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setShowPassword(event.target.checked) }} />}
                            label="Show password"
                        />
                    </FormControl>
                    <DialogActions>
                        <Button type="submit" >Register</Button>
                        <Button onClick={() => { setOpen(false) }}>Cancel</Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default Register;