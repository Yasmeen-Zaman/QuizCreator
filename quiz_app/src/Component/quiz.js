import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { RadioGroup, Radio } from 'react-radio-group';
import { CheckCircleFill, Trash, Link45deg } from 'react-bootstrap-icons';

function Quiz() {
    const [title, setTitle] = useState("");
    const [points, setPoints] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");

    let cancelQuiz = () => {
        setTitle("");
        setPoints("");
        setTime("");
        setDate("");
        this.props.data3.cancelQuiz();
    }
    const createQuiz = () => {
        setTitle("");
        setPoints("");
        setTime("");
        setDate("");
        this.props.data2.createQuiz();

    }
    const addQuestion = () => {
        if (title === "") {
            setTitle({ textTitle: this.props.tempQuizArray.title });
        }
        if (this.state.textPoints === "") {
            this.setState({ textPoints: this.props.tempQuizArray.points });
        }
        if (this.state.textDate === "") {
            this.setState({ textDate: this.props.tempQuizArray.date });
        }
        if (this.state.textTime === "") {
            this.setState({ textTime: this.props.tempQuizArray.timeDuration });
        }

        this.props.data.addQuestions(this.state.textTitle, this.state.textPoint, this.state.textTime, this.state.textDate);
    }
    const handleChangeTitle = (evt) => {
        this.setState({ textTitle: evt.target.value.substr(0, 100) });
    }
    const handleChangePoints = (evt) => {
        this.setState({ textPoint: evt.target.value.substr(0, 100) });
    }
    const handleChangeAllowedTime = (evt) => {
        this.setState({ textTime: evt.target.value.substr(0, 100) });
    }
    const handleChangeDate = (evt) => {
        this.setState({ textDate: evt.target.value.substr(0, 100) });
    }
    return (
        <Container>
            <h1 className="text-center m-4">Quiz Creator</h1>
            <Form>
                <div className="row">
                    <Form.Group controlId="formGroupTitle">
                        <Form.Label>Quiz Title</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPoints">
                        <Form.Label>Total Points</Form.Label>
                        <Form.Control type="number" placeholder="" />
                    </Form.Group>

                    <div className="col-md-6">
                        <Form.Group controlId="formGroupTime">
                            <Form.Label>Time Allowed (minutes)</Form.Label>
                            <Form.Control type="number" placeholder="" />
                        </Form.Group>
                    </div>

                    <div className="col-md-6">
                        <Form.Group controlId="formGroupDate">
                            <Form.Label>Deadline</Form.Label>
                            <Form.Control type="date" placeholder="" />
                        </Form.Group>
                    </div>
                </div>
            </Form>
            <h3 className="text-center">Questions</h3>
            <Card>
                <Card.Body>
                    <Table visibility='hidden'>
                        <thead>
                            <tr>
                                <th>Text</th>
                                <th className="text-center">Type</th>
                                <th className="text-center">Choices</th>
                                <th className="text-center">Points</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>lorem ipsom</td>
                                <td className="text-center">Multiple Choice</td>
                                <td className="text-center">5</td>
                                <td className="text-center">10</td>
                                <td className="text-center"><Link45deg /><Trash /></td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="text-center"><Button className="btn btn-primary" onClick={handleShow}>Add Questions</Button></div>
                </Card.Body>
            </Card>
            <div className="d-flex flex-row-reverse m-3">
                <Button variant="primary" onClick={handleClose}>Create Quiz</Button>
                <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            </div>
        </Container>
    );
}

export default Quiz;