import React from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";
const JobCards = () => {
  const skills = ["Javascript", "react", "nodejs", "redux", "Rest Api"];
  const classes = useStyles();
  return (
    <Grid className={classes.JobCard}>
      <Grid container>
        <Grid item xs container className={classes.JobCard__roleContent}>
          <Grid item>
            <Typography variant="subtitle1">Frontend Developer</Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle2"
              className={classes.roleContent__companyName}
            >
              Razorpay
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs container className={classes.JobCard__skillsContent}>
          {skills.map((s) => (
            <Grid item key={s}>
              <Typography className={classes.skill}>{s}</Typography>
            </Grid>
          ))}
        </Grid>
        <Grid
          item
          xs
          container
          className={classes.JobCard__timeContent}
          direction="column"
        >
          <Grid item>
            <Typography variant="caption">
              25 min ago | Full Time | Remote{" "}
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary">
              Check
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default JobCards;
