import React, {useState} from "react";
import "./landing.css";
import {SomeContext} from "../../../index";
import {SERVER_API_ENDPOINT} from "../../../constants/Credentials";

type SendMessageRequest = {
    userName: string
}

type SendMessageResponse = {
    output: string,
    exitCode: number,
    message: string
}

const Landing: React.FC = () => {

    const [apiResponse, setApiResponse] = useState('');

    const trigger = (userName: string) => {
        let bodyValue: SendMessageRequest = {userName: userName};
        fetch(SERVER_API_ENDPOINT +  "send-message", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(bodyValue)
        })
            .then(response => response.json())
            .then((response: SendMessageResponse) => {
                if (response.exitCode !== 200) {
                    throw new Error('send-message API call failed with message: ' + response.message)
                }
                setApiResponse(response.output);
            })
    };
    return (
        <SomeContext.Consumer>
            {({fieldA, fieldB, userName}) => (
                <div className={'landing-container'}>
                    <div className={'landing-title'}>
                        {'Sample Service'}
                    </div>
                    <div className={'landing-subtitle'}>
                        {'AI Startup'}
                    </div>
                    <div className={'landing-values'}>
                        {'userName = ' + userName}
                    </div>
                    <div className={'landing-values'}>
                        {'fieldA value = ' + fieldA}
                    </div>
                    <div className={'landing-values'}>
                        {'fieldB value = ' + fieldB}
                    </div>
                    <div className={'button-container'}>
                        <button className={'button-style'} onClick={() => trigger(userName)}>
                            {'Trigger API'}
                        </button>
                    </div>
                    <div className={'api-response'}>
                        {apiResponse}
                    </div>
                </div>
            )}
        </SomeContext.Consumer>
    );
};

export default Landing;