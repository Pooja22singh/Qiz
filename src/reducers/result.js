export default (state = {}, action) => {
    switch (action.type) {
        case "SAVE_ANSWER":
            return{
                ...state,
                result:action.result
            }
        default:
            return state;
    }
}