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

  useEffect(() => {
    // const addRef = c => {
    //   Array.isArray(c) && c.forEach(c => {
    //     c.ref && refs.push(c.ref);
    //     if(c.props.children)
    //       addRef(c.props.children);
    //   })
    // }
    // let refs = [];
    // addRef(props.children)
    // console.log(refs[1].current)
    // refs[1].current.focus();
    let focusable = modalContentRef.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    let firstFocusable = focusable[0];
    let lastFocusable = focusable[focusable.length - 1];
    firstFocusable.focus();
    focusable.forEach(elm => {
      elm.addEventListener('keydown', e => {
        if(e.key === 'Escape') {
          props.handleClose();
        }
      })
    })
    lastFocusable.addEventListener('keydown', e => {
      if(!e.shiftKey && e.key === 'Tab') {
        firstFocusable.focus();
        console.log(document.activeElement)
        e.preventDefault();
      }
        
    });
    firstFocusable.addEventListener('keydown', e => {
      if(e.shiftKey && e.key === 'Tab') {
        lastFocusable.focus();
        e.preventDefault();
      }
        
    });
    return () => {
      // lastFocusable.removeEventListener('keydown', e => {
      //   if(e.key === 'Tab') {
      //     console.log(firstFocusable);
      //     firstFocusable.focus();
      //   }
          
      // });
    };
  },[])

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

const ModalHeader = (props) => {

  return (
    <Header>
      {props.children}
    </Header> 
  );
}

const Body = styled.div`
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
  box-sizing: border-box;
`;

const ModalBody = (props) => {

  return (
    <Body>
      {props.children}
    </Body> 
  );
}

const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: .75rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: calc(.3rem - 1px);
  border-bottom-left-radius: calc(.3rem - 1px);
  box-sizing: border-box;
`;

const ModalFooter = (props) => {
  return (
    <Footer>
      {props.children}
    </Footer>
  );
}

export {Modal, ModalHeader, ModalBody, ModalFooter};