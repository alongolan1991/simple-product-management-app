import React from "react";
import styled from "styled-components/macro";
import { connect } from "react-redux";
import { getActiveProductId } from "../../redux/selectors/products.selectors";
import {
  deleteProduct,
  selectProduct
} from "../../redux/actions/products.action";

const ProductItem = ({
  product,
  deleteProduct,
  selectProduct,
  activeProductId
}) => {
  const { image, id, description, price, name } = product;

  return (
    <Container
      selected={activeProductId === id}
      onClick={() => selectProduct(id)}
    >
      <ProductImage src={image} alt="product image" />
      <CotentContainer>
        <ProductHeader>{name}</ProductHeader>
        <DescriptionArea>{description}</DescriptionArea>
      </CotentContainer>
      <DeleteButton
        onClick={e => {
          e.stopPropagation();
          deleteProduct(id);
        }}
      >
        Delete
      </DeleteButton>
    </Container>
  );
};

const Container = styled.section`
  height: 90px;
  border: 1px solid black;
  padding: 10px;
  display: flex;
  background-color: ${({ selected }) => (selected ? "gray" : "white")};
  margin-bottom: 10px;
`;

const ProductImage = styled.img`
  width: 90px;
  height: 90px;
  border: 1px solid black;
`;

const ProductHeader = styled.h3`
  display: inline-block;
  margin: 0px;
`;

const CotentContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 90%;
`;

const DescriptionArea = styled.p`
  margin: 0px;
  width: 80%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const DeleteButton = styled.button`
  background-color: #edbb8c;
  width: 20%;
  height: 20px;
  align-self: flex-end;
  font-weight: bold;
`;

const mapStateToProps = state => {
  return {
    activeProductId: getActiveProductId(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteProduct: id => dispatch(deleteProduct(id)),
    selectProduct: id => dispatch(selectProduct(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductItem);
