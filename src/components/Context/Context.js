import React, { createContext, useCallback, useState } from 'react';
import axios from 'axios';

/*
  Context provides a way to pass data through the component tree without having to pass props down manually at every level.

 In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
*/
export const myContext = createContext();

export const AppContext = ({ children }) => {
    const [meals, setMeals] = useState([]);
    const [categories, setCategories] = useState([]);
    const [randomMeal, setRandomMeal] = useState([]);

    // Create callback fn
    const fetchHomePageMeals = useCallback(searchTerm => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
            .then(response => {
                setMeals(response.data.meals);
            })
    }, []);

    const fetchCategories = useCallback(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then(response => {
                console.log(response.data.categories);
                setCategories(response.data.categories);
            });
    }, []);

    const fetchRandomMeal = useCallback(() => {
        axios
            .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
            .then(response => {
                setRandomMeal(response.data.meals);
            });
    }, []);

    return (
        <myContext.Provider
            value={{
                fetchHomePageMeals,
                meals,
                fetchCategories,
                categories,
                fetchRandomMeal,
                randomMeal
            }}
        >
            {children}
        </myContext.Provider>
    );
};

