import './GalleryList.css';

function GalleryList ({galleryList, getGalleryList}) {


    return (
      <div>
          {/* Iterate over each item in galleryList and send to GalleryItem */}
          {galleryList.map(image => {

              return (
                  <GalleryItem getGalleryList={getGalleryList} key={image.id} image={image}
              )
          })}
      </div>
    );

}

export default GalleryList;