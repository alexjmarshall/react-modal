import React, {useState, useRef, useEffect} from "react";
import styled from 'styled-components';

const OpenButton = styled.button`

`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000;
  opacity: 0.5;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: .3rem;
  outline: 0;
  box-sizing: border-box;
`;

const Main = styled.div`
  display: block;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
  transition: opacity .15s linear;
`;

const Dialog = styled.div`
  max-width: 500px;
  margin: 1.75rem auto;
  position: relative;
  width: auto;
  pointer-events: none;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(.3rem - 1px);
  border-top-right-radius: calc(.3rem - 1px);
  box-sizing: border-box;
`;

const Body = styled.div`
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
  box-sizing: border-box;
`;

const Footer = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding: .75rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: calc(.3rem - 1px);
  border-bottom-left-radius: calc(.3rem - 1px);
  box-sizing: border-box;
`;

const Title = styled.h4`
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.5;
`;

const Modal = (props) => {
  const modalContentRef = useRef();

  useEffect(() => {
    const handleClick = e => {
      if (!(modalContentRef.current?.contains(e.target)))
        props.handleClose();
    }
    if(props.isOpen) {
      window.addEventListener("click", handleClick);
    }
    return () => {
      window.removeEventListener("click", handleClick);
    };
  },[props])

  return (
    <>
      <Main id={`modal-1`} role="dialog" style={{display: 'block'}}>
        <Dialog>
          <Content ref={modalContentRef}>
            <Header>
              <Title>Title</Title>
              <button type="button" onClick={props.handleClose} >&times;</button>
            </Header>
            <Body>
              {props.children}
            </Body>
            <Footer>
              <button type="button" onClick={props.handleClose} >Edit</button>
              <button type="button" onClick={props.handleClose} >Close</button>
            </Footer>
          </Content>
        </Dialog>
      </Main>
      <Backdrop />
    </>    
  );
}

export default Modal;