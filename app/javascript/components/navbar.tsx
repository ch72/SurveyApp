import React from "react";
import { Box, Button, AppBar, Grid, Toolbar, Typography, makeStyles, createStyles } from "@mui/material";

type NavProps = {
  label: string
  button: string
  changePage: (changeUrl: string) => void
}

const Navbar: React.FC<NavProps> = ({ label, button, changePage }) => {

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justifyContent='space-between'>
          <Grid item>
            <Box m={1}>
              <Typography variant='h6' fontFamily='Roboto' color='white'>{label}</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Button onClick={() => changePage('/resume')} variant='outlined' color='inherit' style={{ padding: 10 }}>
              <Typography fontFamily='Roboto' color='white'>{button}</Typography>
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )

}

export default Navbar