import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterDivS >
      <span>We talk about tech sometimes</span>
    </FooterDivS>
  );
}

export default Footer

const FooterDivS = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3e4347;
  color: wheat;
  height: 4rem;
`

