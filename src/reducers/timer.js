export default (state = {}, action) => {
    switch (action.type) {
         case "UPDATE_TIME":
            return{
                ...state,
                ...action.timer
            }
           
        default:
            return state;
    }
}