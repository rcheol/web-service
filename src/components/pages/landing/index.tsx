import React from "react";
import "./landing.css";
import {SomeContext} from "../../../index";

const Landing: React.FC = () => {
    return (
        <SomeContext.Consumer>
            {({fieldA, fieldB}) => (
                <div className={'landing-container'}>
                    <div className={'landing-title'}>
                        {'Sample Service'}
                    </div>
                    <div className={'landing-subtitle'}>
                        {'AI Startup'}
                    </div>
                    <div className={'landing-values'}>
                        {'fieldA value = ' + fieldA}
                    </div>
                    <div className={'landing-values'}>
                        {'fieldB value = ' + fieldB}
                    </div>
                </div>
            )}
        </SomeContext.Consumer>
    );
};

export default Landing;