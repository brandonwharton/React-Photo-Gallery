import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList ({galleryList, getGalleryList}) {


    return (
      <div>
          {/* Iterate over each item in galleryList and send to GalleryItem */}
          {galleryList.map(image => {

              return (
                  <GalleryItem key={image.id} getGalleryList={getGalleryList} image={image}/>
              )
          })}
      </div>
    );

}

export default GalleryList;