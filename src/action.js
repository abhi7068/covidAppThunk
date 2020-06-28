import axios from "axios";

export const getstate = () => {
   return(dispatch)=>{
       return axios
       .get("https://api.covid19india.org/raw_data3.json")
       .then((res)=>{
           dispatch(goingToReducer(res.data))
       })
   }
  };

  export const goingToReducer=(details)=>{
    return {
        type:"DISPLAY_STATE",
        details:details.raw_data,
    }
  }