import React from "react";
import styled from "styled-components";

const ProductItem = ({ item, itemClicked, activeItem, deleteProduct }) => {
  const { image, id, description, price, name } = item;

  return (
    <Container onClick={() => itemClicked(id)} activeItem={activeItem}>
      <ProductImage src={image} alt="product image" />
      <CotentContainer>
        <ProductHeader>{name}</ProductHeader>
        <DescriptionArea>{description}</DescriptionArea>
      </CotentContainer>
      <DeleteButton onClick={deleteProduct}>Delete</DeleteButton>
    </Container>
  );
};

const Container = styled.section`
  height: 90px;
  border: 1px solid black;
  padding: 10px;
  display: flex;
  background-color: ${({ activeItem }) => (activeItem ? "gray" : "white")};
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
`;

const DescriptionArea = styled.p`
  margin: 0px;
  width: 80%;
`;

const DeleteButton = styled.button`
  background-color: #edbb8c;
  width: 20%;
  height: 20px;
  align-self: flex-end;
  font-weight: bold;
`;

export default ProductItem;
