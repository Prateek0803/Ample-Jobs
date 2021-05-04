import React, { useState } from "react";
import {
  Box,
  Grid,
  FilledInput,
  Dialog,
  Select,
  MenuItem,
  DialogActions,
  DialogContent,
  Typography,
  Button,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./styles";
const skills = [
  "Javascript",
  "ReactJS",
  "Nodejs",
  "Redux",
  "Rest Api",
  "MongoDB",
  "Java",
  "Spring",
  "Postgres",
  "SASS",
  "Data Structures",
  "Algorithms",
];

const initState = {
  title: "",
  type: "Full time",
  companyName: "",
  companyUrl: "",
  location: "",
  jobLink: "",
  skills: [],
  description: "",
};

const NewJobModal = ({ show, showModal, postJob }) => {
  const [jobInfo, setJobInfo] = useState(initState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setJobInfo({ ...jobInfo, [e.target.name]: [e.target.value] });
    console.log(jobInfo);
  };

  const addRemoveSkill = (s) => {
    jobInfo.skills.includes(s)
      ? setJobInfo({
          ...jobInfo,
          skills: jobInfo.skills.filter((skill) => skill !== s),
        })
      : setJobInfo({ ...jobInfo, skills: jobInfo.skills.concat(s) });
  };

  const handleSubmit = async () => {
    for(const field in jobInfo){
      if(typeof jobInfo[field] && !jobInfo[field]) return;
    }
    if(!jobInfo.skills.length) return;
    setLoading(true);
    await postJob(jobInfo);
    closeModal()
  };

  const closeModal = () =>{
    setJobInfo(initState);
    setLoading(false)
    showModal();
  }

  const classes = useStyles();

  return (
    <Dialog open={show}>
      <Box
        m={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <h3>Post Job</h3>
        <CloseIcon onClick={closeModal} />
      </Box>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FilledInput
              name="title"
              value={jobInfo.title}
              onChange={handleChange}
              disableUnderline
              placeholder="Title"
              fullWidth
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              name="type"
              value={jobInfo.type}
              disableUnderline
              variant="filled"
              fullWidth
              onChange={handleChange}
            >
              <MenuItem value="Full time">Full time</MenuItem>
              <MenuItem value="Internship">Internship</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              name="companyName"
              value={jobInfo.companyName}
              onChange={handleChange}
              disableUnderline
              placeholder="Company Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              disableUnderline
              name="companyUrl"
              value={jobInfo.companyUrl}
              onChange={handleChange}
              placeholder="Company Url"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              value={jobInfo.location}
              name="location"
              onChange={handleChange}
              disableUnderline
              variant="filled"
              className={classes.selectMenu}
              fullWidth
            >
              <MenuItem value="In-office">In-office</MenuItem>
              <MenuItem value="Remote">Remote</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              placeholder="Job Link"
              name="jobLink"
              value={jobInfo.jobLink}
              onChange={handleChange}
              fullWidth
              disableUnderline
            />
          </Grid>
          <Grid item xs={12}>
            <FilledInput
              placeholder="Job Description"
              disableUnderline
              multiline
              rows={3}
              fullWidth
              name="description"
              value={jobInfo.description}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography>Skills</Typography>
          <Box display="flex" className={classes.skillWrapper}>
            {skills.map((s) => (
              <Box
                key={s}
                onClick={() => addRemoveSkill(s)}
                className={`${classes.skills} ${
                  jobInfo.skills.includes(s) && classes.included
                }`}
              >
                {s}
              </Box>
            ))}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Box
          display="flex"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="caption">*Required Fields</Typography>
          <Button onClick={handleSubmit} variant="outlined" color="primary">
            Post Job
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default NewJobModal;
