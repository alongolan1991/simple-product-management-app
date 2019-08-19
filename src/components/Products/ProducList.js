import React from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";

const ProductList = ({ productsList, search }) => {
  const newArray = productsList.filter(elem => {
    return elem.name.includes(search);
  });
  return (
    <>
      <Container>
        {newArray.map((product, index) => {
          return (
            <ProductItem key={product.id} product={product} index={index} />
          );
        })}
      </Container>
    </>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  justify-content: start;
  width: 60%;
`;

const mapStateToProps = state => {
  return {
    productsList: state.products.productList
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
