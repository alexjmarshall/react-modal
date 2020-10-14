import React from "react";
import styled from 'styled-components';

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

export default ModalBody;