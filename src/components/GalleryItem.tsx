// IMPORTS=============
import * as React from "react";
import * as ReactDOM from "react-dom";

interface GalleryItemProps {
    path: string;
    name: string;
}

export class GalleryItem extends React.Component<GalleryItemProps, undefined> {
    render() {
        return(
            <div className="galleryItem">
                <img src={this.props.path} className="galleryItemImage"/>
                <h1 className="galleryItemName">{this.props.name}</h1>
            </div>
        )
    }
}
