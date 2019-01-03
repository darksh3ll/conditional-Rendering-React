import React, {Component} from 'react';
import Loader from 'react-loader-spinner'

class ConditionSpinner extends Component {
    state= {
        on:true
    }

    handleClick = () => {
        this.setState({on:!this.state.on})
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.on?"On":"Off"}</button>
                {
                    this.state.on &&
                    <Loader
                        type="Audio"
                        color="#00BFFF"
                        height="100"
                        width="100"
                    />
                }
            </div>
        );
    }
}

export default ConditionSpinner;