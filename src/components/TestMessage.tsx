
//IMPORTS ==========================================
import * as React from "react";


export interface TestMessageProps { name: string; }

export class TestMessage extends React.Component<TestMessageProps, undefined> {
    render() {
        if(React) 
            console.log(this.props.name);
        return (
            <h1>{this.props.name}</h1>
        )  
    };
}

