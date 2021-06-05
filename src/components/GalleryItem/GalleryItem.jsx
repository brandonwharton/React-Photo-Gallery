import './GalleryItem.css'
import {useState} from 'react';

function GalleryItem({getGalleryList, image}) {
    // create a state for tracking whether a picture has been clicked
    const [isClicked, setIsClicked] = useState(false)
    
    // toggles isClicked to change state when run
    const toggleIsClicked = () => {
        // when clicked, each element switches to the opposite isClicked state
        setIsClicked(!isClicked);
    }

    
    return (
        <> 
        {/* Use a ternary, if image has been clicked, isClicked becomes true */}
        {/* and a clickable div with the image's description renders*/}
            { isClicked ? (
                <div onClick={() => toggleIsClicked()}>
                    <p>{image.description}</p>
                </div>
            ) : (
        // isClicked is false by default, so images display normally on load
                <img src={image.path} alt={image.title} width="200" 
                onClick={() => toggleIsClicked()}></img>
            )}
        </>
    )
}

export default GalleryItem;