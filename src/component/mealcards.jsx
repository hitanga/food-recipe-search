import React from 'react';
import { NavLink } from 'react-router-dom';

const Mealcards = ({ detail }) => {
    //console.log(detail);

    return (
        <div className="meals">
            {!detail ? (
                <p></p>
            ) : detail.length === 0 ? (
                <p>No meals found</p>
            ) : (
                detail.map((curItem) => (
                    <div className="mealcards" key={curItem.idMeal}>
                        <img src={curItem.strMealThumb} alt={curItem.strMeal} />
                        <p>{curItem.strMeal}</p>
                        <NavLink to={`/mealinfo/${curItem.idMeal}`}>
                            <button type="button" className="btn btn-danger">View Recipe</button>
                        </NavLink>
                    </div>
                ))
            )}
        </div>
    );
};

export default Mealcards;
