export const getProductList = state => state.products.productsList;

export const getActiveProductDetails = state => {
  const activeProductId = state.products.activeProductId;
  const productList = state.products.productList;
  const product = productList.find(element => {
    return element.id === activeProductId;
  });

  return  product ;
};

export const getActiveProductId = state => state.products.activeProductId;
