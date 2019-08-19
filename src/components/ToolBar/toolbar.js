import React from "react";
import Styled from "styled-components";
import { connect } from "react-redux";

const ToolBar = ({ addProduct, checkSearch, serachValue }) => {
  return (
    <Bar>
      <AddButton onClick={addProduct}>+ Add</AddButton>
      <SearchInput value={serachValue} onChange={e => checkSearch(e)} />
      Sort by
      <SelectButton>
        <option value="name">Name</option>
        <option value="recently">Recently Added</option>
      </SelectButton>
    </Bar>
  );
};

const AddButton = Styled.button`
    width : 70px;
    background-color : #84e3c0;
    margin-right : 10px;
`;

const SearchInput = Styled.input`
border-radius : 10px;
margin-right : 10px;
`;

const Bar = Styled.div`
margin-bottom : 10px;
`;

const SelectButton = Styled.select`
margin-left : 5px;
`;

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolBar);
