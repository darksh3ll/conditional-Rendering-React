import React, {Component} from 'react';
import './App.css';
import PublicRouter from "./routes/PublicRouter";


class App extends Component {

    render() {

        return (
            <div className="App">
                <PublicRouter/>
            </div>
        );
    }
}

export default App;
