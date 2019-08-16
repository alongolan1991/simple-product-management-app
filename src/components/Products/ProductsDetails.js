import React from "react";
import styled from "styled-components";

const ProductDetails = ({ item, updateProduct }) => {
  const { id, description, image, price, name } = item;
  let nameInput = null;
  let descriptionInput = null;
  let priceInputt = null;

  const validateDetails = () => {
    if (nameInput.value.length > 30 || nameInput.value.length === 0) {
      alert("name can contain up to 30 characters & can not be empty");
      return;
    }

    if (descriptionInput.value.length > 200) {
      alert("description can contain up to 200 characters");
      return;
    }

    if (priceInputt.value <= 0) {
      alert("price must be greater then 0");
      return;
    }

    let tempProduct = {
      id: id,
      name: nameInput.value,
      image:
        "https://i.pinimg.com/originals/26/76/3d/26763d481172f5dc599d151570b38ded.png",
      description: descriptionInput.value,
      price: priceInputt.value
    };

    updateProduct(tempProduct);
  };

  return (
    <>
      <DetailsContainer>
        <ProductImage src={image} />
        <FormControl>
          <Label>Name</Label>
          <Input
            ref={el => (nameInput = el)}
            maxLength="30"
            required
            placeholder={name}
          />
        </FormControl>
        <FormControl>
          <Label>Description</Label>
          <TextArea
            ref={el => (descriptionInput = el)}
            rows="4"
            maxLength="200"
            placeholder={description}
          />
        </FormControl>
        <FormControl>
          <Label>Price</Label>
          <PriceSection>
            <Inputprice
              ref={el => (priceInputt = el)}
              type="number"
              min="1"
              placeholder={price}
            />{" "}
            $
          </PriceSection>
        </FormControl>
        <SaveButton onClick={validateDetails}>Save</SaveButton>
      </DetailsContainer>
    </>
  );
};

const DetailsContainer = styled.section`
  width: 40%;
  border: 1px solid black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const TextArea = styled.textarea``;

const Label = styled.label``;

const Input = styled.input``;

const ProductImage = styled.img`
  width: 90px;
  height: 90px;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
`;

const Inputprice = styled.input`
  width: 20%;
`;

const PriceSection = styled.section`
  display: flex;
`;

const SaveButton = styled.button`
  background-color: #81e3b1;
  width: 50px;
  height: 30px;
  align-self: flex-end;
`;

export default ProductDetails;
