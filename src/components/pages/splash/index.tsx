import React, {useEffect} from "react";
import './splash.css'

type Props = {
    history: any
}

const Splash: React.FC<Props> = (props: Props) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            props.history.push('/home');
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={'splash-container'}>
            <div className={'splash-title'}>
                {'Sample Service'}
            </div>
            <div className={'splash-subtitle'}>
                {'AI Startup'}
            </div>
        </div>
    );
};

export default Splash;