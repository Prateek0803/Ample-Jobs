import {makeStyles} from '@material-ui/core/styles'


export default makeStyles(()=>({
    filterBar:{
       display:'flex',
       boxShadow:'0px 1px 5px rgba(0,0,0,0.4)',
       backgroundColor:'#fff',
       borderRadius:'0.5rem',
       marginTop:'-1.2rem',
       marginLeft:'10px',
       marginRight:'10px',
    },
    selectMenu:{
        display:'flex',
        flex:'1',
        height:'3rem',
        margin:'0.5rem',
        padding:'0.5rem',
    }
}))