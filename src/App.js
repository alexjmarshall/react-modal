import React, {useState} from 'react';
import Modal from './Modal.js'
import ModalHeader from './ModalHeader.js'
import './App.css';
import ModalBody from './ModalBody.js';
import ModalFooter from './ModalFooter.js';
import styled from 'styled-components';

const Title = styled.h4`
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.5;
`;

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState();
  const onClose = () => setIsOpen(false);
  const onSave = () => {console.log(value)};

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen &&
        <Modal isOpen={isOpen} title={'Modal Title'} handleClose={onClose}>
          <ModalHeader handleClose={onClose}>
            <Title className='title'>Modal Title</Title>
            <button type="button" onClick={onClose} >&times;</button>
          </ModalHeader>
          <ModalBody>
            <input type="text" onChange={e => setValue(e.target.value)}/>
          </ModalBody>
          <ModalFooter>
            <button type="button" onClick={onSave}>Save</button>
            <button type="button" onClick={onClose}>Close</button>
          </ModalFooter>
        </Modal>
      }
    </>
  );
}

export default App;
