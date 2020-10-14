import React, {useRef, useEffect} from "react";
import styled from 'styled-components';

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
`;

const Content = styled.div`
  max-width: 500px;
  margin: 1.75rem auto;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: .3rem;
  outline: 0;
  box-sizing: border-box;
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
      <Main id={`modal-1`} role='dialog' aria-modal='true' aria-labelledby={props.title} aria-describedby={props.desc} style={{display: 'block'}}>
        <Content ref={modalContentRef}>
          {props.children}
        </Content>
      </Main>
      <Backdrop />
    </>    
  );
}

export default Modal;