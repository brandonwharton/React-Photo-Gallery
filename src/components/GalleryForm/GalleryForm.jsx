import {useState} from 'react';
import './GalleryForm.css'
import axios from 'axios';

function GalleryForm ({getGalleryList}) {
    // states for input form
    const [urlInput, setUrlInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const [titleInput, setTitleInput] = useState('');

    // handle data packaging and POST request on submit
    const handleSubmit = (event) => {
        // prevent page refresh on submit
        event.preventDefault();
        console.log('Clicked!');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={urlInput}
                onChange={event => setUrlInput(event.target.value)} 
                type="text" 
                placeholder="Image URL"
                maxLength="255"
            />
            <input
                value={descriptionInput}
                onChange={event => setDescriptionInput(event.target.value)} 
                type="text" 
                placeholder="Description of image"
                maxLength="255"
            />
            <input
                value={titleInput}
                onChange={event => setTitleInput(event.target.value)} 
                type="text" 
                placeholder="Title of image"
                maxLength="50"
            />
            <button type='submit'>Add Image</button>
        </form>
    )

}

export default GalleryForm;