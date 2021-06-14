import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Input, Row, Col } from 'react-bootstrap';
import './App.css';

function AddQuestions() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h1>Question</h1>
        </Modal.Header>
        <Modal.Body>
          <Form.Control as="textarea" rows={3} placeholder="Add Question" />
          <div className="d-flex justify-content-between">
            <div className="col-md-6">
              <h5>Question Type</h5>
              <RadioGroup name="choice" /*selectedValue={this.state.selectedValue} onChange={this.handleChange}*/>
                <Radio value="Single Choice" /> Single Choice
                <br />
                <Radio value="Multiple Choice" /> Multiple Choice
              </RadioGroup>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formGroupPoints">
                <Form.Label as="h5">Points</Form.Label>
                <Form.Control type="number" placeholder="" />
              </Form.Group>
            </div>
          </div>
          <h3 className="text-center">Choices</h3>
          <Card>

            <Card.Body>
              <Table visibility='hidden'>
                <thead>
                  <tr>
                    <th>Text</th>
                    <th>Is Correct</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>lorem ipsom</td>
                    <td className="text-center"><CheckCircleFill fill="green"/></td>
                    <td className="text-center"><Link45deg /><Trash /></td>
                  </tr>
                </tbody>
              </Table>
              <div className="text-center"><Button className="btn btn-primary" onClick={handlePop}>Add Choice</Button></div>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handleClose}>Create</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default AddQuestions;
