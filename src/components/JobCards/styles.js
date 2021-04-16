import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(() => ({
  JobCard: {
    border:'1px solid #e8e8e8',
    borderRadius: "0.5rem",
    margin: "1rem 1rem",
    padding: "1rem",
    transition:'.3s',

    '&:hover':{
      boxShadow:'0px 5px 25px rgba(0,0,0,0.2)',
      borderLeft:'5px solid grey',
    },
  },
  JobCard__roleContent: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "0.5rem",
  },
  JobCard__skillsContent: {
    display: "flex",
    alignItems: "center",
  },
  JobCard__timeContent: {
    display: "flex",
    alignItems: "flex-end",
    marginRight: "0.5rem",
  },
  skill: {
    margin: "0.2rem",
    fontSize: "0.8rem",
    padding: "6px",
    display: "inline-block",
    backgroundColor: "lightGrey",
    borderRadius: "15px",
    fontWeight: "600",
    transition:'.3s',
    cursor:'pointer',
  },
  roleContent__companyName: {
    fontSize: "0.9rem",
    padding: "6px",
    display: "inline-block",
    backgroundColor: "lightblue",
    borderRadius: "15px",
  },
}));