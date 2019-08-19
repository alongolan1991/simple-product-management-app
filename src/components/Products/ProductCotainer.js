import React from "react";
import styled from "styled-components";
import ToolBar from "../ToolBar/toolbar";
import ProductList from "./ProducList";
import ProductDetails from "./ProductsDetails";
import { connect } from "react-redux";
import {
  getProductList,
  getActiveProductDetails
} from "../../redux/selectors/products.selectors";
import { addProduct } from "../../redux/actions/products.action";

class ProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  updateSearchState = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    if (this.props.productsList && this.props.productsList.length === 0) {
      return null;
    }
    return (
      <>
        <Container>
          <ToolBar
            addProduct={this.props.onAddProduct}
            checkSearch={this.updateSearchState}
            serachValue={this.state.search}
          />
          <ListAndDetailsContainer>
            <ProductList item={this.props.productsList} search={this.state.search} />
            <ProductDetails />
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

const mapStateToProps = state => {
  return {
    productsList: getProductList(state),
    activeProductId: getActiveProductDetails(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddProduct: () => dispatch(addProduct())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer);
