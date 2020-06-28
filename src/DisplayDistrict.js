import React, { Component } from 'react'
import {connect} from "react-redux";
import {Link} from "react-router-dom";
 class DisplayDistrict extends Component {
    render() {console.log(this.props.match.params)
     const somevariable= this.props.initialdetails.filter(element=>
     element.detectedstate===this.props.match.params.state)
        console.log("this is somevariable",somevariable);
        const {state}=this.props.match.params;
        let M="M";
        let F="F";
        let U=" ";
    let female=0;
   let male=0;
   let unknown=0;
   somevariable.reduce((acc, item) => {
    return item.gender === "M"
      ? (male = male + 1)
      : item.gender === "F"
      ? (female = female + 1)
      : item.gender === ""
      ? (unknown = unknown + 1)
      : "";
  }, {});
  const uniquethings = Array.from(
    new Set(somevariable.map((item) => item.detecteddistrict))
  );
 return (
               <div style={{textAlign:"center"}}>
              
              {uniquethings.map((element) => (
                  <Link to={`/showpatient/${element}/${state}`}>
                    <p>{element}</p>
             
                  </Link>
                 
                ))}
                <>
                <Link to ={`/Male/${M}/${state}`}>
                <p>Male:{male}</p>
                </Link>
                <Link to ={`/Female/${F}/${state}`}>
                <p>Female:{female}</p>
                </Link>
                <Link to ={`/Unknown/${M}/${F}/${state}`}>
                <p>Unknown:{unknown}</p>
                </Link>
                
            {/* <p>unknown:{unknown}</p> */}
              </>
            

            </div>
           
        )
    }
}
function mapStateToProps(state) {
    return { initialdetails:state.initialdetails};
  }
  
  export default connect(mapStateToProps)(DisplayDistrict);