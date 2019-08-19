import * as AT from "../actions/products.action";
import nextId from "react-id-generator";

const createProducts = () => {
  let result = [];

  for (let i = 0; i < 5; i++) {
    const item = {
      id: nextId(),
      name: `Product ${i}`,
      image:
        "https://i.pinimg.com/originals/26/76/3d/26763d481172f5dc599d151570b38ded.png",
      description:
        " bla bla bla bla blaewf bla bla bla bla blaewf bla bla bla bla blaewf bla bla bla bla blaewf bla bla bla bla blaewf bla bla ",
      price: 10
    };
    result.push(item);
  }
  return result;
};

const initialState = {
  activeProductId: null,
  productList: createProducts()
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.ADD_PRODUCT: {
      let tempCount = state.counter;
      const item = {
        id: nextId(),
        name: "",
        image:
          "https://i.pinimg.com/originals/26/76/3d/26763d481172f5dc599d151570b38ded.png",
        description: "",
        price: 1
      };
      return {
        ...state,
        productList: state.productList.concat(item),
        counter: tempCount + 1
      };
    }
    case AT.DELETE_PRODUCT: {
      let tempArray = [...state.productList];
      const newArray = tempArray.filter(elem =>{
          return elem.id !== action.payload.id
      })
  
      return {
        ...state,
        productList: newArray
      };
    }
    case AT.UPDATE_PRODUCT: {
      let tempArray = [...state.productList];
      const newList = tempArray.map((item, index) => {
        if (item.id === action.payload.product.id) {
          tempArray[index] = action.payload.product;
        }
      });
      return {
        ...state,
        productList: tempArray
      };
    }
    case AT.SELECT_PRODUCT: {
        console.log(action.payload.id);
      return {
        ...state,
        activeProductId: action.payload.id
      };
    }

    default:
      return state;
  }
};

export default productsReducer;
