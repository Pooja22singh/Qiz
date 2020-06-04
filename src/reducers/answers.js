const defaulState=[];
export default (state = defaulState, action) => {
    switch (action.type) {
        case "SAVE_ANS_INDEX":
            return state.concat(action.value);
        default:
            return state;
    }
}
