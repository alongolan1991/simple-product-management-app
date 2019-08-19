import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getActiveProductDetails } from "../../redux/selectors/products.selectors";
import {updateProduct} from '../../redux/actions/products.action';

const ProductDetails = ({ product, updateProduct }) => {
  const [copyProduct, setProduct] = useState(product);
  const { id, name, description, image, price } = copyProduct  || {};


  useEffect(() => {
    setProduct(product);
  }, [product]);

  const validateDetails = () => {
    if (name > 30 || name.length === 0) {
      alert("name can contain up to 30 characters & can not be empty");
      return;
    }

    if (description.length > 200) {
      alert("description can contain up to 200 characters");
      return;
    }

    if (price.value <= 0) {
      alert("price must be greater then 0");
      return;
    }

    updateProduct(copyProduct);
  };

  const setCopyProduct = (e, type) => {
    setProduct({ ...copyProduct, [type]: e.target.value });
  };

  return (
    <>
        {copyProduct === undefined ? null :
        <DetailsContainer>
          <ProductImage src={image} />
          <FormControl>
            <Label>Name</Label>
            <Input
              value={name}
              onChange={e => setCopyProduct(e, "name")}
              maxLength="30"
              required
              placeholder={name}
            />
          </FormControl>
          <FormControl>
            <Label>Description</Label>
            <TextArea
              rows="4"
              value={description}
              onChange={e => setCopyProduct(e, "description")}
              maxLength="200"
              placeholder={description}
            />
          </FormControl>
          <FormControl>
            <Label>Price</Label>
            <PriceSection>
              <Inputprice
                onChange={e => setCopyProduct(e, "price")}
                type="number"
                min="1"
                value={price}
              />
            </PriceSection>
          </FormControl>
          <SaveButton onClick={validateDetails}>Save</SaveButton>
        </DetailsContainer>
        }
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

const mapStateToProps = state => {
  return {
    product: getActiveProductDetails(state)
  };
};

const mapDispatchToProps = dispatch => ({
  updateProduct: product =>
    dispatch(updateProduct(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
