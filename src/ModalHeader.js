import React from "react";
import styled from 'styled-components';

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

export default ModalHeader;