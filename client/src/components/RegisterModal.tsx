import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";


const Register = () => {

    return (
        <Dialog open={ false } onClose={ () => {} }>
            <DialogTitle>register</DialogTitle>
            <DialogContent>register content</DialogContent>
            <DialogActions>
                <Button>Register</Button>
                <Button>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Register;