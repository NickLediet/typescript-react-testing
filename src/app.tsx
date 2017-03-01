// IMPORTS=============
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from 'jquery';
// COMPONENTS ==============
import { BootstrapTest } from './components/BootstrapTest';
import { NavBar } from './components/NavBar';

interface LayoutProps {
    
}
class Layout extends React.Component<LayoutProps, undefined> {
    render() {
        return (
            <div>
                <NavBar numOfCells={6} />
                {this._createParagraphs()}
            </div>
        );
    }
    _createParagraphs(): Array<JSX.Element> {
        var components: Array<JSX.Element> = [];
        for(let i = 0; i < 4; i++) {
            components.push(<BootstrapTest compVal={i+1} key={i} />);
        }
        this._getImages()
        return components;
    }
    _getImages() {
        var imgData:  = [];
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/photos'
        });
        for(let img in imgData) {
            console.log(img);
        }
    }   
    _createImages(): Array<JSX.Element> {
        var images: Array<JSX.Element> = [];
        

        
        
        return images;
    }
}

ReactDOM.render(
    <Layout/>,
    document.getElementById('app')
); 