import './GalleryItem.css'

function GalleryItem({getGalleryList, image}) {

    
    return (
        <img src={image.path} alt={image.title} width="200"></img>
    )
}

export default GalleryItem;