import {Grid, Typography} from "@mui/material"

const Footer = () => {
    return (
      <>
        <Grid container spacing={2} p={2}>
            <Grid item>
                <Typography component="p" align="left">
                    &copy; 2021 NJ Unearthed, All Rights Reserved.
                </Typography>
            </Grid>
            <Grid item ml="auto">
                <Typography component="p" align="left">
                    instagram
                    twitter 
                    facebook
                </Typography>
            </Grid>
        </Grid>
      </>
    )
}

export default Footer
