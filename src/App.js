import React, { Component } from 'react'
import { AppBar } from '@material-ui/core';
import {connect} from "react-redux";
import {getstate} from "./action";
import {Link,Route,Switch} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

 
class Displaystates extends Component {
   constructor(props){
     super(props)
   }

componentDidMount(){
  console.log('first step');
  this.props.dispatch(getstate());
}
  
    render() {
    //  const classes = useStyles();
      console.log("byeeee",this.props.initialdetails);
        return (
          <div style={{textAlign:"center"}} >
        
           {this.props.initialdetails.map((item) => item.detectedstate)
          .filter((value, index, self) => self.indexOf(value) === index)
          .map((element) => (
            <Link to={`/displaydistrict/${element}`}style={{ textDecoration: 'none'}}>
              <p>{element}</p>
            </Link>
          ))}
               
  </div> ) 
      }
}
function mapStateToProps(state) {
    return { initialdetails:state.initialdetails};
  }
  export default connect(mapStateToProps)(Displaystates);