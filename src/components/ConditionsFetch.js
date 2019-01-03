import React, {Component} from 'react';
import Loader from 'react-loader-spinner'

class ConditionsFetch extends Component {
    state={
        data:[]
    }
    render() {
        return (
            <div>
                {this.state.data.length > 0
                    ?<h1>true</h1>
                    :<Loader
                        type="Plane"
                        color="#00BFFF"
                        height="100"
                        width="100"
                    />
                }
            </div>
        );
    }
}

export default ConditionsFetch;