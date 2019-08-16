import React from "react";
import styled from "styled-components";
import ToolBar from "../ToolBar/toolbar";
import ProductList from "./ProducList";
import ProductDetails from "./ProductsDetails";

const createProducts = () => {
  let result = [];
  for (let i = 0; i < 5; i++) {
    const item = {
      id: i,
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

class ProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProductId: 0,
      productlist: [],
      activeProduct: ""
    };
  }

  componentDidMount() {
    this.setState({
      productlist: createProducts()
    });
  }

  setActiveitem = id => {
    this.state.productlist.map((item, index) => {
      if (item.id === id) {
        this.setState({
          activeProductId: id,
          activeProduct: item
        });
      }
    });
  };

  deleteProductByIndedx = index => {
    let tempArray = [...this.state.productlist];
    console.log(tempArray);
    tempArray.splice(index, 1);
    console.log(tempArray);
    this.setState({
      productlist: tempArray
    });
  };

  updateProduct = product => {
    let tempArray = [...this.state.productlist];
    this.state.productlist.map((item, index) => {
      if (item.id === product.id) {
        tempArray[index] = product;
      }
      this.setState({ productlist: tempArray });
    });
  };

  addProduct = () => {
    let tempArray = [...this.state.productlist];
    const item = {
      id: this.state.productlist.length,
      name: "",
      image:
        "https://i.pinimg.com/originals/26/76/3d/26763d481172f5dc599d151570b38ded.png",
      description: "",
      price: 1
    };
    tempArray.push(item);
    this.setState({
      productlist: tempArray
    });
  };

  checkSearch = (e) => {
    console.log(e.target.value);
  };

  render() {
    return (
      <>
        <Container>
          <ToolBar addProduct={this.addProduct} checkSearch={this.checkSearch} />
          <ListAndDetailsContainer>
            <ProductList
              item={this.state.productlist}
              itemClicked={this.setActiveitem}
              activeItem={this.state.activeProductId}
              deleteProduct={this.deleteProductByIndedx}
            />
            <ProductDetails
              item={this.state.activeProduct}
              updateProduct={this.updateProduct}
            />
          </ListAndDetailsContainer>
        </Container>
      </>
    );
  }
}

const Container = styled.section`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const ListAndDetailsContainer = styled.section`
  display: flex;
  height: 600px;
`;
export default ProductContainer;
