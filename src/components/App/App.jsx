import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx';

function App() {
    // state for tracking changes to the Gallery data
    const [galleryList, setGalleryList] = useState([]);

    // initial data request on page load
    useEffect(() => {
        getGalleryList();
    }, []);

    // make a server request for Gallery data
    const getGalleryList = () => {
      console.log('Gathering image gallery');
      // make a GET request to server
      axios.get('/gallery')
        .then(response => {
          // update state of galleryList with server data
          setGalleryList(response.data)
        })
        .catch(err => {
          alert('Problem with GET in App.jsx');
          console.log(err);
        });
      }
    



    console.log(galleryList);
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList getGalleryList={getGalleryList} gallerList={galleryList}/>
        <p>Gallery goes here</p>
      </div>
  );
}

export default App;
