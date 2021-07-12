import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Row, Col} from 'react-bootstrap';
  

function App() {
  return (
      

    <div className="app_form">
      
      <Form >
        <div className="Title">
          <h1 >Create Account</h1>
        </div>

        
        <div className="item">
        <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="email" placeholder="email@email.com" required />   
     <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
 <Form.Group controlId="formBasicPassword">
  <Form.Label className="label">Password (8 characters minimum)</Form.Label>
          <Form.Control type="password" placeholder="Password" minlength="8" required />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
        </div>
        <div className="item">
        <Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
        </div>
        <div className="item">
          <Form.Label className="label">Address</Form.Label>
          <Form.Control type="text" name="name" placeholder="Street address" required />
          <div className="city-item">
            <Form.Control type="text" name="name" placeholder="City" required />
            <Form.Control type="text" name="name" placeholder="Region" />
            <Form.Control type="text" name="name" placeholder="Postal / Zip code" required />
          </div>
        </div>
        <div className="item">
          <Form.Label className="label">Date of Birth</Form.Label>
          <Form.Control type="date" name="bdate" />
          <i class="fas fa-calendar-alt"></i>
        </div>

        <div className="item">
          <Form.Label className="label">Gender</Form.Label>
          <Form.Control as="select">
            <option></option>
            <option>Male</option>
            <option>Female</option>
          </Form.Control>
        </div>

        <div className="item">
          <Form.Label className="label">Phone Number</Form.Label>
          <Form.Control type="phone" name="phone" maxlength="8" minlength="8" placeholder="Phone number" required />
        </div>

        <div class="form-group">
        <label className="label1">We'de like to keep you informed with the latest information by email.</label>
        <Form.Check className="item" type="checkbox" label="Yes please,i'd like to be kept informed by email" />
        </div>

        <div class="btn-block btn">
        <button type="button" class="btn btn-outline-info" type="submit" href="/">Register Now</button>

        </div>
      </Form>
    </div>
  );
}

export default App