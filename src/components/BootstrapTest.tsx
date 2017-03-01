// IMPORTS=============
import * as React from "react";

interface BootstrapTestProps {
    compVal : number;
}
export class BootstrapTest extends React.Component<BootstrapTestProps, undefined> {
    render() {
        return(
            <div className="col-sm-4">
                <h3>Column {this.props.compVal}</h3>
                <p>Lorem ipsum dolor..</p>
                <p>Ut enim ad..</p>
            </div>
        );
    }
}