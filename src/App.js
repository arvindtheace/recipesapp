import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

import StepZilla from "react-stepzilla";

import startersData from './data/starter.json';
import drinksData from './data/drink.json';
import mainsData from './data/main.json';
import dessertData from './data/dessert.json';

import Items from "./Items/Items";
import Summary from "./Summary";
import { ToastContainer } from 'react-toastify';
import './App.scss';

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
    this.setState({ [key]: value });
  }
  render() {
    const { starters, drinks, maincourse, dessert } = this.state;
    const steps =
      [
        {
          name: 'Starters',
          component: <Items
            data={startersData}
            state={starters}
            title="Starters"
            updateState={value => this.updateState('starters', value)}
          />
        },
        {
          name: 'Drinks', component: <Items
            data={drinksData}
            state={drinks}
            title="Drinks"
            updateState={value => this.updateState('drinks', value)}
          />
        },
        {
          name: 'Main Course', component: <Items
            data={mainsData}
            state={maincourse}
            title="Main Course"
            updateState={value => this.updateState('maincourse', value)}
          />
        },
        {
          name: 'Dessert', component: <Items
            data={dessertData}
            state={dessert}
            title="Dessert"
            updateState={value => this.updateState('dessert', value)}
          />
        },
        {
          name: 'Summary', component: <Summary summaryData={this.state}/>
        }
      ]
    return (
      <Container fluid>
        <h1 className="header">Welcome to our Restaurant!</h1>
        <div className="stepsContainer justify-content-md-center">
          <div className='step-progress p-5'>
            <StepZilla steps={steps} />
          </div>
        </div>
        <ToastContainer />
      </Container>
    )
  }
}

export default App;