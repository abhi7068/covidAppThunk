import React, { Component } from 'react'
import {connect} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
 
 const ShowPatient=(props)=> {
   // render() {
        console.log("this is the paramss",props.match.params)
        const classes = useStyles();
        const StyledTableCell = withStyles((theme) => ({
            head: {
              backgroundColor: theme.palette.common.black,
              color: theme.palette.common.white,
            },
            body: {
              fontSize: 14,
            },
          }))(TableCell);
          
          const StyledTableRow = withStyles((theme) => ({
            root: {
              '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.background.default,
              },
            },
          }))(TableRow);
          function createData(entryid,dateannounced,notes,detecteddistrict,detectedstate,currentstatus ) {
            return {  entryid,dateannounced,notes,detecteddistrict,detectedstate,currentstatus};
          }
        








        return (
          <div>

<Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
             
            <StyledTableCell>entryid</StyledTableCell>
            <StyledTableCell align="right">dateannounced</StyledTableCell>
            <StyledTableCell align="right">notes</StyledTableCell>
            <StyledTableCell align="right">detecteddistrict</StyledTableCell>
            <StyledTableCell align="right">detectedstate</StyledTableCell>
            <StyledTableCell align="right">currentstatus</StyledTableCell>
          

            </TableRow>
          </TableHead>
          <TableBody>



           {props.match.params.district==="Other State"?(props.initialdetails.filter(element=>
            element.detecteddistrict==="Other State" && element.detectedstate===props.match.params.state
            ) 
           .filter((value, index, self) => self.indexOf(value) === index)
           .map((element) => (
            //  <Link to={`/showpatient/${element}`}>

            <TableRow >
            <TableCell align="right">{element.entryid}</TableCell>
            <TableCell align="right">{element.dateannounced}</TableCell>
            <TableCell align="right">{element.notes}</TableCell>
            <TableCell align="right">{element.detecteddistrict}</TableCell>
            <TableCell align="right">{element.detectedstate}</TableCell>
            <TableCell align="right">{element.currentstatus}</TableCell>
            <TableCell align="right">
                  </TableCell>
                  </TableRow>

           ))):props.initialdetails.filter(element=>
            element.detecteddistrict===props.match.params.district
            ) 
           .filter((value, index, self) => self.indexOf(value) === index)
           .map((element) => (
            //  <Link to={`/showpatient/${element}`}>

            <TableRow >
            <TableCell align="right">{element.entryid}</TableCell>
            <TableCell align="right">{element.dateannounced}</TableCell>
            <TableCell align="right">{element.notes}</TableCell>
            <TableCell align="right">{element.detecteddistrict}</TableCell>
            <TableCell align="right">{element.detectedstate}</TableCell>
            <TableCell align="right">{element.currentstatus}</TableCell>
            <TableCell align="right">
                  </TableCell>
                  </TableRow>


           ))}
           </TableBody>
        </Table>
       </div>
       )
  // }
}
function mapStateToProps(state) {
    return { initialdetails:state.initialdetails};
  }
  
  export default connect(mapStateToProps)(ShowPatient);