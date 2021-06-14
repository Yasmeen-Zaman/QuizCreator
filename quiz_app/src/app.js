import logo from './logo.svg';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { RadioGroup, Radio } from 'react-radio-group';
import { CheckCircleFill, Trash, Link45deg } from 'react-bootstrap-icons';
// import AddChoice from './components/AddChoice';
import QuizForm from "./components/quizForm";
import './App.css';
import { Table } from 'react-bootstrap';
import axios from 'axios';

function App() {
  const [show, setShow] = useState(false);
  // const [windFlag, setWindFlag] = useState(0);
  const [pop, setPop] = useState(false);

  // const [allQuestions, setAllQuestions] = useState([]);
  // const [QuestionArray, setQuestionArray] = useState([]);
  // const [allChoices, setAllChoices] = useState([]);
  // const [quizArray, setQuizArray] = useState([]);
  // const [myQuiz, setMyQuiz] = useState([]);
  // let choiceArray = [];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleHide = () => setPop(false);
  const handlePop = () => setPop(true);
  // // const handleAddChoice = () => setShow(true);

  // let quizCancel = () => {
  //   setAllChoices([]);
  //   setAllQuestions([]);
  //   setQuestionArray([]);
  //   setQuizArray([]);
  //   setWindFlag(0);
  // }

  // let createQuiz = () => {
  //   var quiz = quizArray;
  //   var quizInfo = { title: quiz.title, points: quiz.points, duration: quiz.duration, date: quiz.date, questions: allQuestions };

  //   setMyQuiz(quizInfo);
  //   setAllChoices([]);
  //   setQuizArray([]);
  //   setAllQuestions([]);
  //   setQuestionArray([]);
  //   setWindFlag(0);

  //   axios.post('http://localhost:8080/qiuzmanager', quizInfo).then(function (reponse) {
  //     console.log(response);
  //   }).catch(function (error) {
  //     console.log(error);
  //   });
  // }

  // let addQuestion = (title, points, duration, date) => {
  //   var tempQArray = quizArray;
  //   if (title === "") {
  //     title = tempQArray.title;
  //   }
  //   if (points === "") {
  //     points = tempQArray.points;
  //   }
  //   if (duration === "") {
  //     duration = tempQArray.duration;
  //   }
  //   if (date === "") {
  //     date = tempQArray.date;
  //   }

  //   let questionInfo = { title, points, duration, date };
  //   setQuizArray(questionInfo);
  //   setWindFlag(1);
  // }

  // let addChoice = (question, type, points) => {
  //   var tempQsArray = QuestionArray;
  //   if (question === "") {
  //     question = tempQsArray.question;
  //   }
  //   if (type === "") {
  //     type = tempQsArray.type;
  //   }
  //   if (points === "") {
  //     points = tempQsArray.points;
  //   }


  //   let choiceInfo = { question, type, points };
  //   setQuestionArray(choiceInfo);
  //   setWindFlag(2);
  // }

  // let setChoice = (choice, isCorrect) => {
  //   var myChoice = { choice, isCorrect };
  //   choiceTemp = allChoices;
  //   choiceTemp.push(myChoice);
  //   setAllChoices(choiceTemp)
  // }

  // let choiceCancel = () => {
  //   setWindFlag(1);
  // }

  // let setQuestions = () => {
  //   var myQuestion = allQuestions;
  //   var qsArray = QuestionArray;
  //   var qsObj = { question: qsArray.question, type: qsArray.type, points: qsArray.points, choices: allChoices }
  //   myQuestion.push(qsObj);
  //   setAllQuestions(myQuestion);
  //   setQuestionArray([]);
  //   setAllChoices([]);
  //   setWindFlag(0);
  // }

  // let questionCancel = () => {
  //   setQuestionArray([]);
  //   setAllChoices([]);
  //   setWindFlag(0);
  // }

  // if (windFlag === 0) {

  // }

  const [showre, setShowre] = useState(false);
  const handleShowre = () => setShowre(true);
  const handleclosere = () => setShowre(false);


  const [currentQuestion, setCurrentQuestion] = useState('Add Question');
  const [question, setQuestion] = useState([]);

  const [currentPoints, setCurrentPoints] = useState('Add Points');
  const [points, setPoints] = useState([]);

  const [currentType, setCurrentType] = useState('Add Type');
  const [type, setType] = useState([]);

  const [currentOp, setCurrentOp] = useState(0);
  const [Op, setOp] = useState([]);
  const [counter, setcounter] = useState(0);


  function question(e) {
    setCurrentQuestion(e.target.value);
  }
  function choice(e) {
    setCurrentPoints(e.target.value);
  }
  function questionchoice(e) {
    setCurrentType(e.target.value);
  }
  function handleOption() {
    setCurrentOp(currentOp + 1);
  }

  const handleCreate = () => {
    setcounter(counter + 1);
    setQuestion((olddata) => {
      return [...olddata, currentQuestion];
    });
    setCurrentQuestion('');

    setPoints((olddata1) => {
      return [...olddata1, currentPoints];
    });
    setCurrentPoints('');

    setType((olddata2) => {
      return [...olddata2, currentType];
    });
    setCurrentType('');

    setOp((olddata3) => {
      return [...olddata3, currentOp];
    });
    setCurrentOp('');
    console.log(question);
    console.log(currentQuestion);
  };
  const array = [question, Op, type, points];


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
              {Op.map((traverse, index1) => {
                return(
                  <tr>
                    {question.map((data, index)=>{
                      return(
                        <td>{data}</td>
                      );
                    })}
                    {Op.map((data1, index) => {
                  return (
                    <td className="text-center">{data1}</td>
                  );
                })}
                  {type.map((data2, index) => {
                    return (
                      <td className="text-center">{data2}</td>
                    );
                  })}
                  {points.map((data3, index) => {
                    return (
                      <td className="text-center">{data3}</td>
                    );
                  })}
                  <td className="text-center"><Link45deg /><Trash /></td>
                )
                </tr>);
              })}
            </tbody>
          </Table>
          <div className="text-center"><Button className="btn btn-primary" onClick={handleShow}>Add Questions</Button></div>
        </Card.Body>
      </Card>
      <div className="d-flex flex-row-reverse m-3">
        <Button variant="primary" onClick={handleClose}>Create Quiz</Button>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
      </div>

      {/* Add question starts here */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h1>Question</h1>
        </Modal.Header>
        <Modal.Body>
          <Form.Control as="textarea" rows={3} placeholder="Add Question" onChange={question}/>
          <div className="d-flex justify-content-between">
            <div className="col-md-6">
              <h5>Question Type</h5>
              <RadioGroup name="choice" /*selectedValue={this.state.selectedValue} onChange={this.handleChange}*/>
                <Radio value="Single Choice" onChange={questionchoice} /> Single Choice
                <br />
                <Radio value="Multiple Choice" onChange={questionchoice} /> Multiple Choice
              </RadioGroup>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formGroupPoints">
                <Form.Label as="h5">Points</Form.Label>
                <Form.Control type="number" placeholder="" onChange={choice} />
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
                    <td className="text-center"><CheckCircleFill fill="green" /></td>
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
          <Button variant="primary" onClick={handleCreate}>Create</Button>
        </Modal.Footer>
      </Modal>

      {/* get choices */}
      {/* <AddChoice /> */}
      <Modal show={pop} onHide={handleHide}>
        <Modal.Header closeButton>
          <h1>Choice</h1>
        </Modal.Header>
        <Modal.Body>
          <Form.Control as="textarea" rows={3} placeholder="Add Option" />
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Correct Option" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHide}>Cancel</Button>
          <Button variant="primary" onClick={handleOption}>Add Choice</Button>
        </Modal.Footer>
      </Modal>

    </Container >

  );
}

export default App;
