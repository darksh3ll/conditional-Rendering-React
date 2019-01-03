import React, {Component} from 'react';

class Condition3 extends Component {
    state={
        on:false
    }
    render() {
        return (
            <div>
                {
                    this.state.on &&
                    <h1>on conditions 3</h1>
                }
            </div>
        );
    }
}

export default Condition3;