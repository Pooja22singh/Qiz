export const saveDetails = (fullName,emailId) =>({
       type: "SAVE_DETAILS",
       fullName,
       emailId
});
export const logout = () => ({
       type: "LOGOUT"
}
);