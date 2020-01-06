import * as React from "react";
import SessionContext, {initialSession, Session} from "./index";

type Props = {}

type State = Session;

class SessionProvider extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            ...initialSession,
            setIpAddress: this.setIpAddress
        };
        this.setIpAddress = this.setIpAddress.bind(this);
    }

    setIpAddress = (s: string) => {
        this.setState({ipAddress: s});
    };

    render() {
        return (
            <SessionContext.Provider value={this.state}>
                {this.props.children}
            </SessionContext.Provider>
        );
    }
}

export default SessionProvider;
