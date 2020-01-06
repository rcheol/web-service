import React from 'react';
import './App.css';
import Splash from "./components/page/splash";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router';
import LandingHandler from "./components/page/landing/context";


const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact={true} path={'/'} component={Splash}/>
                    <Route exact={true} path={'/home'} component={LandingHandler}/>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
