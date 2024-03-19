import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, FormControlLabel, Switch, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { IFormValues, ILoginPropsModal } from "../interfaces/common";
import { useAppDispatch } from "../redux/hooks";
import { loginUserThunk } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { useForm, Controller, SubmitHandler } from "react-hook-form";


const Login: React.FC<ILoginPropsModal> = ({ isOpen, setOpen }) => {

    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<IFormValues>();


    const handleLoginData: SubmitHandler<IFormValues> = (data) => {
        dispatch(loginUserThunk({username: data.login, password: data.password}))
        navigate('/');
        setOpen(false);
        console.log(data)
    }

    return (
        <Dialog
        open={isOpen}
        onClose={() => { setOpen(false) }}
        >
            <DialogTitle>
                <Typography sx={{ textAlign: 'center' }}>
                    Login
                </Typography>
            </DialogTitle>
            <Divider />
            <DialogContent>
                <form onSubmit={handleSubmit(handleLoginData)} >
                    <Controller 
                        control={control}
                        name="login"
                        defaultValue=""
                        rules={{ required: 'Login must be to type', minLength: { value: 3, message: 'Login must be min 3 characters' } }}
                        render={({field}) => (
                            <TextField label="Login" type="text" placeholder="Login" fullWidth sx={{ margin: '0.5rem 0' }} 
                            autoComplete="username"
                            onChange={(event) => {field.onChange(event)}}
                            value={field.value}
                            error={!!errors.login?.message}
                            helperText={errors.login?.message}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="password"
                        defaultValue=""
                        rules={{ required: 'Password must be to type', minLength: { value: 3, message: 'Password must be min 3 characters' } }}
                        render={({field}) => (
                            <TextField label="password" type={showPassword ? 'text' : 'password' } fullWidth sx={{ margin: '0.5rem 0' }}
                            autoComplete="current-password"
                            onChange={(event) => {field.onChange(event)}}
                            value={field.value}
                            error={!!errors.password?.message}
                            helperText={errors.password?.message}
                            />
                        )}
                    />
                    <FormControl>
                        <FormControlLabel 
                            control={<Switch checked={showPassword} onChange={ (event: React.ChangeEvent<HTMLInputElement>) => { setShowPassword(event.target.checked) } } />}
                            label="Show password"
                        />
                    </FormControl>
                    <DialogActions>
                        <Button type="submit" >Login</Button>
                        <Button onClick={ () => { setOpen(false) } }>Cancel</Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default Login;