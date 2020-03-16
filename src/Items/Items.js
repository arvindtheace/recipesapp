import React, { Component } from 'react';
import ItemList from '../ItemList';

import { toast } from 'react-toastify';

import './Items.scss';

class Items extends Component {
    constructor(props) {
        super();
        this.state = { values: this.getValues(props) };
    }
    getValues = (props) => {
        let values = props.data.map(item => {
            return {
                name: item.name,
                servings: 0,
                ingredients: item.ingredients,
                minServing: item.servings
            }
        })
        if(props.state.length > 0) {
            values = props.state.map(item => {
                return {
                    name: item.name,
                    servings: item.servings,
                    ingredients: item.ingredients,
                    minServing: item.minServing
                }
            })
        }
        return values;
    }
    componentDidUpdate(prevProps) {
        if(prevProps.title !== this.props.title) {
            this.setState({ values: this.getValues(this.props) });
        }
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
                <h1>{this.props.title}</h1>
                <ItemList data={this.props.data} values={this.state.values} onChange={(index, servings) => {
                    const { values } = this.state;
                    values[index].servings = servings;
                    this.setState({ values });
                }} />
            </div>
        )
    }
}

export default Items;