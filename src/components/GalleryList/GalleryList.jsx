import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import {useState, useEffect} from 'react';

function GalleryList({ galleryList, getGalleryList }) {
    
    return (
        <div>
            {/* Iterate over each item in galleryList and send to GalleryItem */}
            {galleryList.map((image) => {
                return (
                    <div key={image.id}>
                        <GalleryItem  getGalleryList={getGalleryList} image={image}/>
                    </div>
                )
            })}
        </div>
    );

}

export default GalleryList;