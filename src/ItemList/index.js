import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Counter from './Counter';

import './itemlist.scss';

const ItemList = ({ data, values, onChange }) => {
    return (
        <form className="form" >
            <div className="recipe-heading">
                <div>
                    <label>Recipe</label>
                </div>
                <div>
                    <label>Minimum Portion Size</label>
                </div>
                <div>
                    <label>Portion size</label>
                </div>
            </div>
            {data.map((option, index) => (
                <div key={option.id}>
                    <div className="recipe-body">
                        <div className="recipe-name">
                            <label htmlFor={option.name}>{option.name}</label>
                        </div>
                        <div className="recipe-min-serving">
                            <label htmlFor={option.servings}>{option.servings}</label>
                        </div>
                        <div>
                            <Counter value={values[index].servings} minValue={option.servings} onChange={(servings) => {
                                onChange(index, servings);
                            }}/>
                        </div>
                    </div>
                </div>
            ))}
        </form>
    )
}

export default ItemList