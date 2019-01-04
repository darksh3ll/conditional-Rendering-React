import React, {Component} from 'react';

class Testing extends Component {
    state={
        compteur:112,
    }
    render() {
        return (
            <div>
                {
                   this.state.compteur === 8 //if
                    ? <h1>8</h1>
                       :(this.state.compteur === 6 //else if
                       ? <h1>6</h1>
                           :(this.state.compteur === 4 //if
                               ? <h1>4</h1>
                                   : <h1>hello</h1> //else
                           )
                       )
                }
            </div>
        );
    }
}

export default Testing;