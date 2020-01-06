import * as React from "react";

export type CognitoData = {
    idToken: string;
    accessToken: string;
    refreshToken: string;
    expiresIn: string;
};

export type Session = {
    cognitoData: CognitoData;
    ipAddress: string;
    setIpAddress: (s: string) => void;
};

export const initialSession = {
    cognitoData: {
        idToken: '',
        accessToken: '',
        refreshToken: '',
        expiresIn: ''
    },
    ipAddress: '',
    setIpAddress: () => {}
};

const SessionContext = React.createContext<Session>(initialSession);

export default SessionContext;