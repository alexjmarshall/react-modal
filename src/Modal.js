import React, {useState, useRef} from "react";
import styled from 'styled-components';

const OpenModalButton = styled.button`

`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-color: #000;
  opacity: 0.5;
`;

const ModalContent = styled.div`
  background-color: #ffffff;
  z-index: 1041;
`;

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {/* Trigger the modal with a button */}
      <OpenModalButton type="button" onClick={toggleIsOpen}>Open Modal</OpenModalButton>

      {isOpen &&
        <>
          {/* Modal */}
          <div id={`modal-1`} className="modal fade" role="dialog" >
            <div className="modal-dialog">

              {/* Modal content */}
              <ModalContent>
                <div className="modal-header">
                  <h4 className="modal-title">Edit Todo</h4>
                  <button type="button" className="close" data-dismiss="modal" >&times;</button>
                </div>
                <div className="modal-body">
                  <input type="text" className="form-control"  />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-warning" data-dismiss="modal" >Edit</button>
                  <button type="button" className="btn btn-default" data-dismiss="modal" >Close</button>
                </div>
              </ModalContent>

            </div>
          </div>
          <Backdrop />
        </>
      }
    </>
    
  );
}

export default Modal;