import React, { useState, useCallback, useContext } from 'react';
import { myContext } from '../Context/Context';

import './HomePage.scss';

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    // Pull out fetchContext
    const { fetchHomePageMeals, meals } = useContext(myContext);

    // Get new meal from input
    const fetchMealsHandler = useCallback(() => {
        fetchHomePageMeals(searchTerm);
    }, [searchTerm, fetchHomePageMeals]);

    return (
        <div className="home">
            <div className="home__search">
                <input type="text"
                    placeholder="Type a meal name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={fetchMealsHandler}>Search meal</button>
            </div>
            <div className="home__grid">
                {meals ? (
                    meals.map((meal) => (
                        <div className="home__meal" key={meal.idMeal}>
                            <img src={meal.strMealThumb} alt="#" />
                            <h4>{meal.strMeal}</h4>
                        </div>
                    ))
                ) : (
                    <h2>No meals found! Try another word...</h2>
                )}
            </div>
        </div>
    );
};

export default HomePage;