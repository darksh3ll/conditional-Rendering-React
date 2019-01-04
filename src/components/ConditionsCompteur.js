import React, {Component} from 'react';
import Loader from 'react-loader-spinner'

class ConditionsCompteur extends Component {
    state={
        compteur:0,
        data:[]
    }
    addPlus = () => {
        this.setState({compteur:this.state.compteur + 1} )
    }
    addMoins = () => {
        this.setState({compteur:this.state.compteur - 1} )
        if (this.state.compteur === 0) {
            this.setState({compteur:0})
        }
    }

    render() {
        return (
            <div className="box">
                <h1>{this.state.compteur}</h1>
                <button onClick={this.addPlus}>+</button>
                <button onClick={this.addMoins}>-</button>
                {this.state.compteur > 0
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

export default ConditionsCompteur;