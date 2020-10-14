import React from "react";
import styled from 'styled-components';

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

export default ModalFooter;