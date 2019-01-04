import React, {Component} from 'react';

class ConditionButton extends Component {
    state={
        on:true
    }
    handleClick = () => {
        this.setState({on:!this.state.on})
    };
    render() {
        return (
            <div className="box">
                <button onClick={this.handleClick} >
                    {this.state.on?"On":"Off"}
                </button>
            </div>
        );
    }
}

export default ConditionButton;