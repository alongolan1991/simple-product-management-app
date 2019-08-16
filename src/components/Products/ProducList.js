import React from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";

const productList = ({ item, itemClicked, activeItem, deleteProduct }) => {
  return (
    <>
      <Container>
        {item.map((item, index) => {
            console.log('activeItem: ', activeItem, 'id: ', item.id);
          return (
            <ProductItem
              deleteProduct={() => deleteProduct(index)}
              activeItem={activeItem === item.id}
              item={item}
              itemClicked={itemClicked}
            />
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
  justify-content: space-between;
`;
export default productList;
