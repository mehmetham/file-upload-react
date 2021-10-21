import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';


export default function Routes () {
    return (
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/about" exact component={ About } />
            <Route path="/contact" exact component={ Contact } />
        </Switch>
    );
  }
  




