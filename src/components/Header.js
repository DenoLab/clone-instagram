import React from 'react';
import styled from 'styled-components';

const HeaderContainerDiv = styled.div`
  height: 50px;
  width: 100%;
  background: #bbccdd;
  display: flex;
  align-items: center;
`;
const HeaderNavbarDiv = styled.div`
width: 600px;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
`;
const ImageDiv = styled.div``;
const SearchDiv = styled.div``;
const LoginDiv = styled.div``;

function Header(props) {


  return (
    <HeaderContainerDiv>
      <HeaderNavbarDiv>
        <ImageDiv>
          <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Logo" />
        </ImageDiv>
        <SearchDiv>
          <input type="text" placeholder="Search" />
          <i>Icon</i>
        </SearchDiv>
        <LoginDiv>
          <button onClick={props.onClick}>Login</button>
        </LoginDiv>
      </HeaderNavbarDiv>
    </HeaderContainerDiv>
  );
}

export default Header;