import { Form, Button } from "react-bootstrap";

const PhoneNumber = () => {
  return (
    <div className="settings-tab">
      <h3 className="fw-bold mb-4">Phone Number</h3>
      <p>Your phone number may be used to send payment alerts, ID reminders, and login codes.</p>
      <Form>
        <Form.Group className="mb-3" controlId="changePhoneNumber">
          <Form.Control type="tel" placeholder="Enter phone number" className="py-3" />
        </Form.Group>
        <Button variant="primary" className="text-white">
          Edit
        </Button>
      </Form>
    </div>
  );
};

export default PhoneNumber;
