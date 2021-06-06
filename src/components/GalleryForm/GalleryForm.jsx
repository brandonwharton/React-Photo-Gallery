import {useState} from 'react';
import './GalleryForm.css'
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function GalleryForm ({getGalleryList}) {
    // states for input form
    const [urlInput, setUrlInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const [titleInput, setTitleInput] = useState('');

    // handle data packaging and POST request on submit
    const handleSubmit = (event) => {
        // prevent page refresh on submit
        event.preventDefault();
        // Create a new object with state data to send to server
        const imageToAdd = {
            path: urlInput,
            description: descriptionInput,
            title: titleInput
        }
        // since they're used for image tag alts, give a value to blank titles
        if (!imageToAdd.title) {
            imageToAdd.title = 'user-generated image';
        }

        // Axios POST request to create a new row in DB
        axios.post('/gallery', imageToAdd)
            .then(response => {
                // refresh DOM with new data from DB
                getGalleryList();
                // clear inputs
                setUrlInput('');
                setDescriptionInput('');
                setTitleInput('');
            });
    }

    return (
        <form onSubmit={handleSubmit} className="image-form">
            <TextField
                value={urlInput}
                onChange={event => setUrlInput(event.target.value)} 
                type="text" 
                placeholder="Image URL"
                maxLength="255"
                variant="outlined"
                required
                className="text-field"
                size="small"
            />
            <TextField
                value={descriptionInput}
                onChange={event => setDescriptionInput(event.target.value)} 
                type="text" 
                placeholder="Description of image"
                maxLength="255"
                variant="outlined"
                required
                className="text-field"
                size="small"
            />
            <TextField
                value={titleInput}
                onChange={event => setTitleInput(event.target.value)} 
                type="text" 
                placeholder="Title of image"
                maxLength="50"
                variant="outlined"
                className="text-field"
                size="small"
            />
            <div className="add-image-button">
                <Button variant="contained" type='submit'>Add Image</Button>
            </div>
        </form>
    )

}

export default GalleryForm;