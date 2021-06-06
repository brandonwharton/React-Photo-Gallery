import './GalleryItem.css'
import { useState, useEffect} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import swal from 'sweetalert';

function GalleryItem({ getGalleryList, image}) {
    // create a state for tracking whether a picture has been clicked
    const [isClicked, setIsClicked] = useState(false)
    // create a state for tracking total number of likes, on page load
    // set likes total for each image with supplied server data
    const [likesTotal, setLikesTotal] = useState(image.likes);
    // state for holding the height of created images for use when creating the description display div
    const [imageHeight, setImageHeight] = useState(0);
    const [divSizeName, setDivSizeName] = useState('');


    // running getGalleryList as a useEffect ensures that the imageHeight states are all initialized properly
    // without bugs. I'd be curious to know how to do this in a way that's less processesor heavy, it feels
    // really inneficient to render so many times on page load, but nothing else I tried worked on the first image
    // click as well as any subsequent clicks
    useEffect(() => {
        getGalleryList();
    }, []);

    // toggles isClicked to change state when run
    const toggleIsClicked = () => {
        // on click, use the state of imageHeight to set the state of the divSizeName as that same number
        // in pixels. This helps create a description div box that's the same size when conditionally rendering
        setDivSizeName(`${imageHeight}px`);
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
        // create a SweetAlert popup to confirm deletion
        swal({
            title: 'Delete this image?',
            icon: 'warning',
            dangerMode: true,
            buttons: [true, 'Delete']
        }).then(function (choseDelete) {
            if(choseDelete) {
                swal('Image removed.', {
                    icon: 'success'
                })
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
        });
    }



    console.log('Renders:');
    return (
        <div className="flex-container">
            {/* Use a ternary, if image has been clicked, isClicked becomes true */}
            {/* and a clickable div with the image's description renders*/}
            {/* The "style" attribute below gets set dynamically to the height of the image that it's replacing  */}
            { isClicked ? (
                <div className="description-section" onClick={() => toggleIsClicked()} style={{height: divSizeName}}>
                    <p>{image.description}</p>
                </div>
            ) : (
                // isClicked is false by default, so images display normally on load
               <div> 
                    <img className="images" src={image.path} alt={image.title}
                        onClick={() => toggleIsClicked()}
                        // ref below looks at the height of the created image on render and sets the imageHeight state accordingly
                        ref={el => {
                            if(!el) return;
                             setImageHeight(el.getBoundingClientRect().height);
                            //  console.log('Height of image:', image.id, imageHeight);
                            }
                        }
                        ></img>
                </div>
            )}
            {/* Display number of likes using state data which keeps it current*/}
            {/* with button clicks and with app reloads */}
            <div className="buttons-section">
                <div className="like-button">
                    <Badge color="secondary" badgeContent={likesTotal}>
                        <Button className="like-button" variant="contained" color="primary" onClick={() => handleLikeClick()}>Like</Button>
                    </Badge>
                </div>
                <div className="delete-button">
                    <Button  variant="contained" color="secondary" onClick={() => handleDeleteClick()}>Delete</Button>
                </div>
            </div>
        </div>
    )
}

export default GalleryItem;