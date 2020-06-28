import React, { Component } from 'react'
import {connect} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
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
 const  Female =(props)=> {
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
      function createData(entryid,detecteddistrict ) {
        return {  entryid,detecteddistrict};
      }
    
 const somevariable= props.initialdetails.filter(element=>
            (element.detectedstate===props.match.params.state) && (element.gender===props.match.params.F))
        return (
            <div>
<Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
             
            <StyledTableCell>entryid</StyledTableCell>
            
            <StyledTableCell align="right">detecteddistrict</StyledTableCell>
            

            </TableRow>
          </TableHead>
          <TableBody>
           {somevariable.map(element=>{
                    return(
                     
                    <TableRow >
                    <TableCell align="right">{element.entryid}</TableCell>
                  
                    <TableCell align="right">{element.detecteddistrict}</TableCell>
                   
                    <TableCell >
                          </TableCell>
                          </TableRow>
                    )

                })}
                  </TableBody>
        </Table>
        
            </div>
        )
   // }
}
function mapStateToProps(state) {
    return { initialdetails:state.initialdetails};
  }
  
  export default connect(mapStateToProps)(Female);