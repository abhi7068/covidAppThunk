import React, { Component } from 'react'
//import DisplayDistrict from "./DisplayDistrict"
import App from "./App";
import {Link,Route,Switch} from "react-router-dom";
import DisplayDistrict from './DisplayDistrict';
import ShowPatient from './ShowPatient';
import Male from "./Male";
import Female from "./Female";
import Unknown from "./Unknown";
const Routes =()=>{
    return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/displaydistrict/:state" component={(props)=><DisplayDistrict{...props}/>} />
      <Route exact path="/showpatient/:district/:state" component={(props)=><ShowPatient{...props}/>} />
      <Route exact path="/Male/:M/:state" component={(props)=><Male{...props}/>} />
      <Route exact path="/Female/:F/:state" component={(props)=><Female{...props}/>} />
      <Route exact path="/Unknown/:M/:F/:state" component={(props)=><Unknown{...props}/>} />
    </Switch>
    )
}
export default Routes;