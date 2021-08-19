function productReducer(product = false, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      if (!product) {
        return action.payload;
      }
      return product;
    case "REMOVE_PRODUCT":
      return null;

    default:
      return product;
  }
}

export default productReducer;
