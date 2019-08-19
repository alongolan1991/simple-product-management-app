export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const SELECT_PRODUCT = "SELECT_PRODUCT";

export const addProduct = (id, name) => ({
  type: ADD_PRODUCT,
  payload: {
    id,
    name
  }
});

export const deleteProduct = id => ({
    type: DELETE_PRODUCT,
    payload: {
      id
    }
});

export const updateProduct = product => ({
    type: UPDATE_PRODUCT,
    payload: {
      product
    } 
});

export const selectProduct = id => ({
    type: SELECT_PRODUCT,
    payload: {
      id
    }
});
