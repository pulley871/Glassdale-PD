import React, { useState, useContext } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ConvictionsContext } from '../ConvictionsProvider';

const ModalExample = ({criminals}) => {
    
    
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    
    return (
        <div>
        {console.log(criminals)}
      <Button color="danger" onClick={toggle}>Known Associates</Button>
      <Modal isOpen={modal} toggle={toggle} className="">
        <ModalHeader toggle={toggle}><h1>Known Associates</h1></ModalHeader>
        <ModalBody>
          {criminals.known_associates.map(associate =>{
              return (<><h4>Associate Name: {associate.name}</h4>
                        <p>Alibi: {associate.alibi}</p></>)
          })}
        </ModalBody>
        <ModalFooter>
          
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
export default ModalExample;