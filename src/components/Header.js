import React from "react";
import Logo from "../images/logo.png";
import styled from "styled-components";

const HeaderHodor = styled.header `
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Header() {
  return (
    <HeaderHodor className="ui centered">
      <img src={Logo} />
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </HeaderHodor>
  );
}
