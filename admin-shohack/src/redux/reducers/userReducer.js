function userReducer(user = false, action) {
  switch (action.type) {
    case "ADD_USER":
      if (!user) {
        return action.payload;
      }

      return user;
    case "REMOVE_USER":
      return null;

    default:
      return user;
  }
}
export default userReducer;
