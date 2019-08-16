import React from "react";
import Styled from "styled-components";

const ToolBar = ({addProduct, checkSearch}) => {
  return (
    <Bar>
      <AddButton onClick={addProduct}>+ Add</AddButton>
      <SearchInput onChange={(e) => checkSearch(e)} />
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

export default ToolBar;
