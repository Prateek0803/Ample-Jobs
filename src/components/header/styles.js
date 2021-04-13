import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  header: {
    backgroundColor: "black",
    color: "white",
    width:'100%',
    textAlign:'center',
  },
  header__title:{
    fontSize:'2rem !important',
    marginBottom:'2rem',
  },
  text:{
      marginLeft:'4rem',
  },
  button:{
      marginRight:'4rem',
      color:'lightblue !important',
  }
}));
