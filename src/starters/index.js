import React, { Component } from 'react';
import data from './stater.json';
import ItemList from '../ItemList';

import { toast } from 'react-toastify';

class Starters extends Component {
    constructor(props) {
        super();
        let initialState = data.map(item => {
            return {
                name: item.name,
                servings: 0
            }
        })
        if(props.state.length > 0) {
            initialState = props.state.map(item => {
                return {
                    name: item.name,
                    servings: item.servings
                }
            })
        }
        this.state = { values: initialState };
    }
    isValidated() {
        const { values } = this.state;
        const isValid = values.some(value => value.servings > 0) ? true: false;
        isValid ? this.props.updateState(values) : toast.error('Please select at least one item serving')
        return isValid;
        
    }
    render() {
        return (
            <div>
                <h1>Starter</h1>
                <ItemList data={data} values={this.state.values} onChange={(index, servings) => {
                    const { values } = this.state;
                    values[index].servings = servings;
                    this.setState({ values });
                }} />
            </div>
        )
    }
}

export default Starters;