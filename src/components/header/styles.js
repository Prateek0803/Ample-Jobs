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
      marginLeft:'3rem',
  },
  button:{
      marginRight:'3rem',
      color:'lightblue !important',
  }
}));
