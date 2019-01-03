import React, { Component } from 'react'

export default class Condition1 extends Component {
  state={
    on:true
  }
  render() {

    return (
      <div>
        <div>
        {this.state.on
        ?<h1>true</h1>
        :<h1>false</h1>
        }
      </div>
      </div>
    )
  }
}
