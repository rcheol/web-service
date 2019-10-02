import React from 'react';
import './App.css';
import Splash from "./components/pages/splash";
import Landing from "./components/pages/landing";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router';


const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact={true} path={'/'} component={Splash}/>
                    <Route exact={true} path={'/home'} component={Landing}/>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
