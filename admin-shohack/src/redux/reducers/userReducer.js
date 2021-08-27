function userReducer(user = false, action) {
  switch (action.type) {
    case "ADD_USER":
      if (!user) {
        return action.payload;
      }

      return user;
    case "REMOVE_USER":
      return null;

    case "UPDATE_ROLE":
      return { ...user, role: action.payload };

    default:
      return user;
  }
}
export default userReducer;
