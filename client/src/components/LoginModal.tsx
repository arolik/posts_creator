import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";


const Login = () => {

    return (
        <Dialog open={ false } onClose={ () => {} }>
            <DialogTitle>login</DialogTitle>
            <DialogContent>login content</DialogContent>
            <DialogActions>
                <Button>Login</Button>
                <Button>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Login;