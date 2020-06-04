export default (state = {}, action) => {
    switch (action.type) {
        case "LOGOUT":
            return {}
        case "SAVE_DETAILS":
            return{
                ...state,
                fullName:action.fullName,
                emailId:action.emailId
            }
        default:
            return state;
    }
}