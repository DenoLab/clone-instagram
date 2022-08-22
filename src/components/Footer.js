import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
height: 100px;
display: flex;
align-items: flex-end;
justify-content: center;
a{

}
`;

function Footer(props) {
  return (
    <div>
      <FooterDiv>
        <a>Footer</a>
      </FooterDiv>
    </div>
  );
}

export default Footer;