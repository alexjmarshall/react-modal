import React, {useState} from 'react';
import Modal from './Modal.js'
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} >Open Modal</button>
      {isOpen &&
        <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
          <input type="text" />
          <button onClick={() => setIsOpen(false)}>Close</button>
        </Modal>
      }
    </>
  );
}

export default App;
