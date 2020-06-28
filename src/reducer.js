const initialState = {
    initialdetails:[],
}
const reducer=(state=initialState,action) => {
    switch(action.type){
        case "DISPLAY_STATE":
            return {
                ...state,
                initialdetails : action.details,
            }
    }
    return state;
}
export default reducer;