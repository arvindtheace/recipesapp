import React, { useState, Component } from 'react';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'

import StepZilla from "react-stepzilla";

import Starters from './starters';
import Drinks from './drinks';
import MainCourse from './maincourse';
import Desserts from './desserts';
import { ToastContainer } from 'react-toastify';
import './App.css';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};



class App extends Component {
  constructor() {
    super();
    this.state = {
      starters: [],
      drinks: [],
      maincourse: [],
      dessert: []
    }
  }
  updateState(key, value) {
    this.setState({[key]: value});
  }
  render() {
    const { starters, drinks, maincourse, dessert } = this.state;
    const steps =
      [
        { name: 'Starters', component: <Starters state={starters} updateState={value => this.updateState('starters', value)} /> },
        { name: 'Drinks', component: <Drinks /> },
        { name: 'Main Course', component: <MainCourse /> },
        { name: 'Dessert', component: <Desserts /> },
      ]
    return (
      <Container fluid>
        <h1 className="header">Welcome to our Restaurant!</h1>
        <Row className="justify-content-md-center">
          <div className='step-progress p-5'>
            <StepZilla steps={steps} />
          </div>
        </Row>
        <ToastContainer />
      </Container>
    )
  }
}

export default App;