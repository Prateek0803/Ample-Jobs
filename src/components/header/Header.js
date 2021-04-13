import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";
const Header = () => {
  const classes = useStyles();
  return (
    <Box width="100%" py={6} className={classes.header}>
      <Typography className={classes.header__title}>Ample Jobs</Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        className="classes.header__contentbox"
      >
        <Typography className={classes.text} variant="h5">
          Job List
        </Typography>
        <Button variant="outlined" className={classes.button} color="primary">
          Post Job
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
