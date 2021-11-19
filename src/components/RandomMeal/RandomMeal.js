import React, { useEffect, useContext } from "react";
import { myContext } from "../Context/Context";

import "./RandomMeal.scss";
const RandomMeal = () => {
    const { randomMeal, fetchRandomMeal } = useContext(myContext);

    useEffect(() => {
        fetchRandomMeal();
    }, [fetchRandomMeal]);
    return (
        <div className="random">
            {randomMeal.map((meal) => (
                <div key={meal.idMeal} className="random__grid">
                    <div className="random-grid__controls">
                        <img src={meal.strMealThumb} alt="#" />
                        <button onClick={fetchRandomMeal}> Generate Another Meal</button>
                    </div>

                    <div className="random-grid__instructions">
                        <h4>Instructions</h4>
                        <p>{meal.strInstructions}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RandomMeal;