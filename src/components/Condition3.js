import React, {Component} from 'react';

class Condition3 extends Component {
    state={
        on:true
    }
    render() {
        return (
            <div className="box">
                {
                    this.state.on &&
                    <h1>on condition</h1>
                }
            </div>
        );
    }
}

export default Condition3;