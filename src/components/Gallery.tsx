// Dependencies ======================
import * as React from 'react';
import * as $ from 'jquery'; 
// APP =====================
import { GalleryItem } from './GalleryItem';

interface GalleryState {
    imgData? : Array<JSON>;
}

export class Gallery extends React.Component<undefined, GalleryState> {
    
    constructor() {
        super();

    }

    render() {
        return(
            <div className='gallery'>
                {this._getImages()}    
            </div>    
        );
    }
    
    componentWillMount() {
            this.setState({
            imgData: []        
        });
       this._getData();
    }
    
    _getData() {
        let _data: Array<JSON> = [];
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/photos',
            method: 'GET'
        }).then((data: Array<any>) => {
            
            data.map((data) => {
                if(data.id < 10) {
                    _data.push(data);
                }
            });
            this.setState({
                imgData: _data
            });
        });
    }
    _getImages(){
         return this.state!.imgData.map((img: any)=> 
                <GalleryItem name={img.title} path={img.thumbnailUrl} key={img.id}/> );
            
            //<img src={img.thumbnailUrl} key={img.id}/>);
   }


    
}