import React from "react";
import SomeContext from "../../../context/SomeContext";
import Landing from "./index";
import SessionContext from "../../../context/Session";

const LandingHandler: React.FC = () => {
    return (
        <SomeContext.Consumer>
            {({fieldA, fieldB, userName}) =>
                <SessionContext.Consumer>
                    {({ipAddress, setIpAddress}) =>
                        <Landing
                            fieldA={fieldA}
                            fieldB={fieldB}
                            userName={userName}
                            ipAddress={ipAddress}
                            setIpAddress={setIpAddress}
                        />
                    }
                </SessionContext.Consumer>
            }
        </SomeContext.Consumer>
    );
};

export default LandingHandler;
