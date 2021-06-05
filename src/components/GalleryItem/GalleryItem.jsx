import './GalleryItem.css'
import { useState } from 'react';

function GalleryItem({ getGalleryList, image }) {
    // create a state for tracking whether a picture has been clicked
    const [isClicked, setIsClicked] = useState(false)
    const [likesTotal, setLikesTotal] = useState(image.likes);

    // toggles isClicked to change state when run
    const toggleIsClicked = () => {
        // when clicked, each element switches to the opposite isClicked state
        setIsClicked(!isClicked);
    }


    return (
        <div>
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
            {/* Handle like button display and logic*/}
            <h4>Number of likes: {likesTotal}</h4>
            {/* Increase likesTotal state by 1 on click */}
            <button onClick={() => setLikesTotal(likesTotal+1)}>Like</button>

        </div>
    )
}

export default GalleryItem;