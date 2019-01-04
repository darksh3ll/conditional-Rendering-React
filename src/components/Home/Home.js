import React, {Component} from 'react';
import ConditionSpinner from "../ConditionSpinner";
import Condition1 from "../Condition1";
import Condition2 from "../Condition2";
import Condition3 from "../Condition3";
import ConditionButton from "../conditionButton";
import ConditionsCompteur from "../ConditionsCompteur";
import "./Home.css"
import Testing from "../Testing";
import ConditionButton1 from "../ConditionButton1";
class Home extends Component {
    render() {
        return (
            <div className="boxHome">
                <Condition1/>
                <Condition2/>
                <Condition3/>
                <ConditionButton/>
                <ConditionsCompteur/>
                <ConditionSpinner/>
                <Testing/>
                <ConditionButton1/>
            </div>
        );
    }
}

export default Home;