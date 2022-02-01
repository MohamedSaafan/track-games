import { useState } from "react";
import { BiUnlink } from "react-icons/bi";
import { Modal, Button } from "react-bootstrap";

const ConnectDiscordModal = (props) => {
  return (
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header className="border-none" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Connect your Discord Account to Gala!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
          Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

const Discord = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="settings-tab mx-3">
      <h3 className="fw-bold mb-4 text-capitalize">Discord</h3>
      <div className="bg-secondary p-2 text-white rounded p-3">
        <p>Status</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <BiUnlink className="me-2" size={"1.9rem"} />
            Disconnected
          </div>
          <Button onClick={handleShow} className="text-white px-4">
            Connect
          </Button>
        </div>
      </div>
      <ConnectDiscordModal show={show} onHide={handleClose} animation={false} />
    </div>
  );
};

export default Discord;
