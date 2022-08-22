import React from 'react';
import styled from 'styled-components';
const ModalDiv = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  z-index: 40;
`;
const BackgroundDiv = styled.div`
height: 100%;
width: 100%;
opacity: 0.3;
background: gray;
`;

const ModalContainerDiv = styled.div`
width: 450px;
height: 300px;
position: absolute;
background: #f9f9f9;
;
top: 150px;
left: 120px;
z-index: 50;
border-radius: 10px;
box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
form {
  margin: 50px;
}
`;

function Modal(props) {
  return (
    <ModalDiv>
      <BackgroundDiv />
      <ModalContainerDiv>
        <button onClick={e => props.onClickClose(e)}>Close</button>
        <form onSubmit={props.onSubmit}>
          <div>
            {props.signupFlag && <input type="text" placeholder="user name" value={props.user} onChange={e => props.onUserChange(e.target.value)}></input>}
          </div>
          <div>
            <input type="email" placeholder='email' value={props.email} onChange={e => props.onEmailChange(e.target.value)}></input>
          </div>
          <div>
            <input type="password" placeholder='password' value={props.password} onChange={e => props.onPasswordChange(e.target.value)}></input>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
        <div>
          {!props.signupFlag &&
            <p>Don't have account yet? <a href="" onClick={e => props.onClickSignup(e)}>Sign up</a> now.</p>
          }
          {props.signupFlag &&
            <p>Already have account? <a href="" onClick={e => props.onClickLogin(e)}>Log in</a> now.</p>
          }
        </div>
      </ModalContainerDiv>
    </ModalDiv>
  );
}

export default Modal;