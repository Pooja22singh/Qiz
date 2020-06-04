export default (state = {}, action) => {
    switch (action.type) {
        case "SAVE_INDEX":
            return{
                ...state,
                questionIndex:action.questionIndex,
            }
        default:
            return state;
    }
}