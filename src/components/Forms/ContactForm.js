import { Form, Button } from "react-bootstrap";
import {Link} from "react-router-dom"
import "../../styles/SignInFormContainer.css";

const ContactForm = () => {
  return (
    <div className="container">
      <form className="signIn-form-container">
        <h1>Contact</h1>
        <p>felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae</p>
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" placeholder="Message" rows={5} />
            </Form.Group>
            <Button variant="danger" type="submit">
              Login
            </Button>
            <div className="d-flex justify-content-between align-items-center py-3">
              <Link to="/sign-up" className="text-decoration-none text-white">
                Don't have an account?
              </Link>
              <Link
                to="/reset-password"
                className="text-decoration-none text-white"
              >
                Forget Password
              </Link>
            </div>
          </Form>
        </div>
      </form>
    </div>
  );
}

export default ContactForm