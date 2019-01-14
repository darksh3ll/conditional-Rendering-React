import React, { Component } from 'react'

class componentName extends Component {
    state = {
        on:false
    }

    handleClick = () => {
        this.setState({on:!this.state.on})
    }
    render () {

        return (
            <div>
                <button disabled={this.state.on?true:false}>
                    {this.state.on?"disabled":"enabled"}
                </button>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export default componentName