
import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "../components/Home/Home";
import RadioButton from "../components/radioButton";
import Test from '../components/test';
class PublicRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/radioButton" component={RadioButton}/>
                <Route exact path="/villeFrance" component={Test}/>
            </Switch>
        );
    }
}

export default PublicRouter;