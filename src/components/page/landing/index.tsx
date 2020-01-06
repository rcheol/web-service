import React, {useEffect, useState} from "react";
import "./styles.css";
import {SERVERLESS_API_ENDPOINT} from "../../../constants/Credentials";
import publicIp from 'public-ip';

type SendMessageRequest = {
    userName: string
}

type SendMessageResponse = {
    output: string,
    exitCode: number,
    message: string
}

type Props = {
    fieldA: number;
    fieldB: string;
    userName: string;
    ipAddress: string;
    setIpAddress: (s: string) => void;
}

const Landing: React.FC<Props> = (props: Props) => {
    const {fieldA, fieldB, userName, ipAddress, setIpAddress} = props;

    const [apiResponse, setApiResponse] = useState('');

    useEffect(() => {
        const fetchIpAddress = async () => await publicIp.v4().then(response => setIpAddress(response));
        fetchIpAddress().then(_ => console.log('fetch-ip-address is executed'));
    }, [setIpAddress]);

    const trigger = (userName: string) => {
        let bodyValue: SendMessageRequest = {userName: userName};
        fetch(SERVERLESS_API_ENDPOINT + "send-message", {
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
            <div className={'landing-values'}>
                {'ip address = ' + ipAddress}
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
    );
};

export default Landing;