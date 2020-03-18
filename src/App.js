import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
// import StepZilla from "react-stepzilla";

import startersData from './data/starter.json';
import drinksData from './data/drink.json';
import mainsData from './data/main.json';
import dessertData from './data/dessert.json';

import Items from "./Items/Items";
import Summary from "./Summary";
import { ToastContainer, toast } from 'react-toastify';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starters: [],
      drinks: [],
      maincourse: [],
      dessert: [],
      showMenuView: true
    }
  }
  updateState(key, value) {
    this.setState({ [key]: value });
  }
  getMenuView() {
    const { starters, drinks, maincourse, dessert } = this.state;
    return (
      <React.Fragment>
        <Items
          data={startersData}
          state={starters}
          title="Starters"
          updateState={value => this.updateState('starters', value)}
        />
        <Items
          data={drinksData}
          state={drinks}
          title="Drinks"
          updateState={value => this.updateState('drinks', value)}
        />
        <Items
          data={mainsData}
          state={maincourse}
          title="Main Course"
          updateState={value => this.updateState('maincourse', value)}
        />
        <Items
          data={dessertData}
          state={dessert}
          title="Dessert"
          updateState={value => this.updateState('dessert', value)}
        />
        <Row className="justify-content-md-center">
          <Button size="md" onClick={() => {
            this.setState({ showMenuView: false })
          }}>Show Summary</Button>
        </Row>
      </React.Fragment>
    )
  }
  isValid(values) {
    return values.some(value => value.servings > 0) ? true : false;
  }
  getSummaryView() {
    const { starters, drinks, maincourse, dessert } = this.state;
    const valuesArray = [
      { name: 'starters', values: starters },
      { name: 'drinks', values: drinks },
      { name: 'maincourse', values: maincourse },
      { name: 'dessert', values: dessert }
    ]
    const invalidEntry = valuesArray.find(item => !this.isValid(item.values));
    if (invalidEntry) {
      this.setState({ showMenuView: true });
      return toast.error(`${invalidEntry.name} values are not defined`);
    }
    else {
      return (
        <React.Fragment>
          <Summary summaryData={{ starters, drinks, maincourse, dessert }} />
          <Row className="justify-content-md-center">
            <Button size="md" onClick={() => {
              this.setState({ showMenuView: true })
            }}>Back</Button>
          </Row>
        </React.Fragment>
      )
    }

  }
  render() {
    const { showMenuView } = this.state;
    return (
      <Container fluid>
        <h1 className="header">Welcome to our Restaurant!</h1>
        <div className="stepsContainer justify-content-md-center">
          {/* <div className='step-progress p-5'>
            <StepZilla steps={steps} />
          </div> */}
          {showMenuView ? this.getMenuView() : this.getSummaryView()}
        </div>
        <ToastContainer />
      </Container>
    )
  }
}

export default App;