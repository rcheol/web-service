import React from "react";


export type SomeContextType = {
    fieldA: number;
    fieldB: string;
    userName: string;
}

export const initialSomeContext: SomeContextType = {
    fieldA: 0,
    fieldB: 'foo',
    userName: '홍길동'
};

const SomeContext = React.createContext(initialSomeContext);

export default SomeContext;