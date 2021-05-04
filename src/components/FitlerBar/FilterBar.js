import React, { useState } from "react";
import { Box, Button, CircularProgress, MenuItem, Select } from "@material-ui/core";
import useStyles from "./styles";
const FilterBar = ({fetchJobsCustom}) => {
  const [load, setLoad] = useState(false)
  const [jobSearch, setJobSearch] = useState({
    type:'Full time',
    location:'Remote',
  })

  const handleChange = (e) =>{
    e.preventDefault();
    setJobSearch({...jobSearch,[e.target.name]:[e.target.value]})
    console.log(jobSearch)
  }

  const search = async() =>{
    setLoad(true)
    await fetchJobsCustom(jobSearch)
    setLoad(false)
  }
  const classes = useStyles();
  return (
    <Box className={classes.filterBar}>
      <Select value= {jobSearch.type} name="type" onChange={handleChange} className={classes.selectMenu}>
        <MenuItem value="Full time">Full time</MenuItem>
        <MenuItem value="Internship">Internship</MenuItem>
        <MenuItem value="Contract">Contract</MenuItem>
      </Select>
      <Select value={jobSearch.location} name="location" onChange={handleChange} autoComplete="on" className={classes.selectMenu}>
        <MenuItem value="In-office">In-office</MenuItem>
        <MenuItem value="Remote">Remote</MenuItem>
      </Select>
      <Button
        variant="contained"
        color="primary"
        className={classes.selectMenu}
        disable={load}
        onClick={search}
      >
        {load ? (
          <CircularProgress color="secondary" size={22} />
        ):(
          "Search Job"
        )}
      </Button>
    </Box>
  );
};

export default FilterBar;
