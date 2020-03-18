import React from 'react';
import Counter from './Counter';
import DetailsModal from './DetailsModal';
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
                            <DetailsModal data={option}/>
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