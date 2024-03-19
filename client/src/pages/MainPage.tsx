import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getMe } from "../redux/authSlice";
import AllPosts from "./AllPostsPage";



const MainPage = () => {

    const token = useAppSelector(state => state.authSlice.token);

    return (
        <React.Fragment>
            {
                token ?
                <AllPosts />
                :
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
            }
        </React.Fragment>
    )
}

export default MainPage;