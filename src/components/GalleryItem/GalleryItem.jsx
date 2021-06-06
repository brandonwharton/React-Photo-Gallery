import './GalleryItem.css'
import { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';

function GalleryItem({ getGalleryList, image }) {
    // create a state for tracking whether a picture has been clicked
    const [isClicked, setIsClicked] = useState(false)
    // create a state for tracking total number of likes, on page load
    // set likes total for each image with supplied server data
    const [likesTotal, setLikesTotal] = useState(image.likes);


    // toggles isClicked to change state when run
    const toggleIsClicked = () => {
        // when clicked, each element switches to the opposite isClicked state
        setIsClicked(!isClicked);
    }

    // click handler for like button, makes PUT request to adjust likes on server before re-rendering
    const handleLikeClick = () => {
        // PUT request to server to increase likes value on server
        axios.put(`/gallery/like/${image.id}`)
            .then(response => {
                // increase likesTotal state by one to keep it up-to-date with server
                // data as app user is clicking like buttons
                setLikesTotal(likesTotal + 1);
            })
            .catch(err => {
                alert('Problem with like request, please try again');
                console.log(err);
            });
    }


    // click handler for delete button, makes DELETE request to delete a row from the database
    const handleDeleteClick = () => {
        console.log('clicked!');
        // DELETE request to server to remove an image
        axios.delete(`gallery/${image.id}`)
            .then(response => {
                console.log('Image deleted');
                // refresh DOM
                getGalleryList();
            })
            .catch(err => {
                alert('Problem with delete request, please try again');
                console.log(err);
            });
    }


    return (
        <div className="flex-container">
            {/* Use a ternary, if image has been clicked, isClicked becomes true */}
            {/* and a clickable div with the image's description renders*/}
            { isClicked ? (
                <div className="column" onClick={() => toggleIsClicked()}>
                    <p>{image.description}</p>
                </div>
            ) : (
                // isClicked is false by default, so images display normally on load
                <img src={image.path} alt={image.title} width="260"
                    onClick={() => toggleIsClicked()}></img>
            )}
            {/* Display number of likes using state data which keeps it current*/}
            {/* with button clicks and with app reloads */}
            <div className="buttons-section">
                <div className="column like-button">
                    <Badge color="secondary" badgeContent={likesTotal}>
                        <Button className="like-button" variant="contained" color="primary" onClick={() => handleLikeClick()}>Like</Button>
                    </Badge>
                </div>
                <div className="column delete-button">
                    <Button  variant="contained" color="secondary" onClick={() => handleDeleteClick()}>Delete</Button>
                </div>
            </div>
        </div>
    )
}

export default GalleryItem;