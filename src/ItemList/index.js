import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Counter from './Counter';

const ItemList = ({ data, values, onChange }) => {
    return (
        <form className="form" >
            <Row>
                <Col sm={4}>
                    <label>Recipe</label>
                </Col>
                <Col sm={4}>
                    <label>Minimum Portion Size</label>
                </Col>
                <Col sm={4}>
                    <label>Portion size</label>
                </Col>
            </Row>
            {data.map((option, index) => (
                <div key={option.id}>
                    <Row>
                        <Col sm={4}>
                            <label htmlFor={option.name}>{option.name}</label>
                        </Col>
                        <Col sm={4}>
                            <label htmlFor={option.servings}>{option.servings}</label>
                        </Col>
                        <Col sm={4}>
                            <Counter value={values[index].servings} minValue={option.servings} onChange={(servings) => {
                                onChange(index, servings);
                            }}/>
                        </Col>
                    </Row>
                </div>
            ))}
        </form>
    )
}

export default ItemList