function productReducer(product = [], action) {
  switch (action.type) {
    case "ADD_PRODUCT": {
      return [];
    }

    case "REMOVE_PRODUCT":
      return null;

    default:
      return product;
  }
}

export default productReducer;
