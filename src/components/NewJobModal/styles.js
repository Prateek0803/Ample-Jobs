import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(() => ({
  skills: {
    margin: "0.2rem",
    fontSize: "1rem",
    border: "1px solid blue",
    padding: "6px",
    display: "inline-block",
    borderRadius: "5px",
    transition: ".3s",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
  included: {
    backgroundColor: "black",
    color: "white",
  },
  skillWrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    textAlign: "center",
    height: "5rem",
  },
}));