import { Box, Container, Grid, Typography } from "@mui/material";



const MainPage = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{ marginTop: 0, justifyContent: 'center' }} >
                <Grid item xs={8} sx={{ textAlign: 'left' }}>
                    <Typography variant="h6" >
                        Hello guest!
                    </Typography>
                    <Typography variant="subtitle1" >
                        To create post, or watch other posts you need to register
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default MainPage;