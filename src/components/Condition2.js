import React, {Component} from 'react';

class Condition2 extends Component {
    state={
        login:false
    }
    render() {
        return (
            <div>
                {
                    this.state.login?(
                        <h1>true</h1>
                    ):(
                        <h1>false</h1>
                    )
                }
            </div>
        );
    }
}

export default Condition2;