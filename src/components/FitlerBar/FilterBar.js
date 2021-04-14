import React from "react";
import { Box, Button, MenuItem, Select } from "@material-ui/core";
import useStyles from "./styles";
const FilterBar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.filterBar}>
      <Select defaultValue="Full time" className={classes.selectMenu}>
        <MenuItem value="Full time">Full time</MenuItem>
        <MenuItem value="Internship">Internship</MenuItem>
        <MenuItem value="Contract">Contract</MenuItem>
      </Select>
      <Select defaultValue="location" className={classes.selectMenu}>
        <MenuItem value="location">Location</MenuItem>
        <MenuItem value="Remote">Remote</MenuItem>
      </Select>
      <Button
        variant="contained"
        color="primary"
        className={classes.selectMenu}
      >
        Search
      </Button>
    </Box>
  );
};

export default FilterBar;
