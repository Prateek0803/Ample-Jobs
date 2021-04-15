import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(() => ({
  JobCard: {
    boxShadow: "0px 1px 5px rgba(0,0,0,0.4)",
    borderRadius: "0.4rem",
    margin: "1rem 1rem",
  },
  JobCard__roleContent: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "1rem",
  },
  JobCard__skillsContent: {
    display: "flex",
    alignItems: "center",
    marginLeft: "1rem",
  },
  JobCard__timeContent: {
    display: "flex",
    alignItems: "flex-end",
    marginRight: "1rem",
  },
  skill:{
      margin:'0.3rem',
  }
}));