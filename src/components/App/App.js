import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from '../NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import Categories from '../Categories/Categories';
import Random from '../RandomMeal/RandomMeal';
import Footer from '../Footer/Footer';

const App = () => {
    return (
        <div className="app">
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/categories" component={Categories} />
                    <Route exact path="/random" component={Random} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
};

export default App;