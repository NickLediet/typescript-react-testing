// IMPORTS=============
import * as React from "react";

interface NavBarProps {
    numOfCells: number;
}
export class NavBar extends React.Component<NavBarProps, undefined> {
    render() {
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="#">WebSiteName</a>
                    </div>
                    <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home</a></li>
                    {this._getListItems(this.props.numOfCells)}
                    </ul>
                </div>
            </nav>
 
        );
    }
    _getListItems(numCells: number): Array<JSX.Element> {
        let navItems: Array<JSX.Element> = [];
        for(let i = 0; i < numCells; i++) {
            navItems.push(<li key={i}><a href="#">{i*1000}</a></li>);
        }
        return navItems;
    }
}