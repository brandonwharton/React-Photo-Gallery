To Do:

- [ ] App.jsx
    - [ ] GET
        - [ ] Axios in App component
        - [x] galleryList state
        - [ ] send props: galleryList, GET function

- [ ] GalleryList
    - [ ] Map through list, return GalleryItem calls
        - [ ] send props: GET function, key, full image object

- [ ] GalleryItem
    - [ ] Display each image
        - [ ] Make clickable
            - [ ] On click, toggle discription
    - [ ] Like button
        - [ ] Connect to PUT request
        - [ ] Display number of likes
        - [ ] update using GET function

- [ ] Style!

- [ ] Options:
    - [ ] Move header to component






Data Model

routes:

/gallery -GET
/gallery/like/id -PUT
// maybe not necessary 
/gallery/description/id -New PUT

galleryItems = [
        { 
            id: Unique Number
            path: '...../images/(picture).jpg', 
            description: Description of image, 
            likes: Number, 
            title: Title of image
            // maybe not necessary, play around with onClick and toggles first for simplicity
            showDescription: default false, toggles on click to show description instead of image
        }
]

components (minimum)

App
GalleryList - The loop
GalleryItem - The display divs

states

galleryList - App.jsx - set by GET request
likesTotal - GalleryItem - set by PUT
// maybe not necessary
showDescription - GalleryItem - set by conditional rendering/PUT


