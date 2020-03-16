import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const processIngredients = (ingredients, servingFactor) => {
    let measures = {
        tablespoon: 15,
        cup: 128,
        teaspoon: 5,
        pound: 450,
    }
    let processedIngredients = ingredients.map(ingredient => {
        let tempArray = ingredient.split(' ');
        let value = 0;
        if (measures[tempArray[1]]) {
            let quantity = parseInt(tempArray[0]);
            if (quantity === 0) quantity = parseFloat(tempArray[0]);
            value = measures[tempArray[1]] * quantity * servingFactor;
            tempArray.splice(0, 2, value + 'gms');
        }
        return tempArray.join(' ');
    })
    return processedIngredients;
}
const Summary = ({ summaryData }) => {
    const keys = Object.keys(summaryData);
    const summary = keys.map((key) => {
        let data = summaryData[key];
        data = data.filter((item) => item.servings > 0);
        let values = data.map((item) => {
            let { name, ingredients, minServing, servings } = item;
            return {
                name,
                ingredients: processIngredients(ingredients, servings / minServing)
            }
        })
        return { type: key, values };
    })
    return (
        <div>
            <h1>Summary</h1>
            <Row>
                {summary.map((item) => (
                    <Col sm={6}>
                        <h2>{item.type}</h2>
                        {item.values.map((dish) => (
                            <div sm={6}>
                                <h3>{dish.name}</h3>
                                <ul>
                                    {dish.ingredients.map(ingredient => (<li>{ingredient}</li>))}
                                </ul>
                            </div>
                        ))}
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Summary;