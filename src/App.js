import React, {Component} from 'react';
import './App.css';
import Condition1 from './components/Condition1';
import Condition2 from "./components/Condition2";
import ConditionButton from "./components/conditionButton";
import Condition3 from "./components/Condition3";
import ConditionSpinner from "./components/ConditionSpinner";
import ConditionsFetch from "./components/ConditionsFetch";

class App extends Component {
    state = {
        login: false
    }

    render() {

        return (
            <div className="App">
                <Condition1/>
                <Condition2/>
                <ConditionButton/>
                <Condition3/>
                <ConditionSpinner/>
                <ConditionsFetch/>
            </div>
        );
    }
}

export default App;
