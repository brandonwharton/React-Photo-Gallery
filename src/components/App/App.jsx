import React, {useState, useEffect} from 'react';
import './App.css';

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
    }





    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
      </div>
  );
}

export default App;
