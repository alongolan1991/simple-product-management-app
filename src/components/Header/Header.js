import React from "react";
import Styled from "styled-components";

const Header = props => {
  return (
    <Nav>
      <h1>My store</h1>
    </Nav>
  );
};

const Nav = Styled.section`
padding : 10px;
height : 80px;
background-color: powderblue;
border : 2px solid black;
`;

export default Header;
