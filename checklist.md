To Do:

- [x] App.jsx
    - [x] GET
        - [x] Axios in App component
        - [x] galleryList state
        - [x] send props: galleryList, GET function

- [x] GalleryList
    - [x] Map through list, return GalleryItem calls
        - [x] send props: GET function, key, full image object

- [x] GalleryItem
    - [x] Display each image
        - [x] Make clickable
            - [x] On click, toggle discription
    - [x] Like button
        - [x] Connect to PUT request
        - [x] Display number of likes
        - [x] update using GET function


- [ ] Style!

- [ ] Options:
    - [ ] Move header to component

- [ ] Check Later
    - [ ] Need for getGalleryList in List/Item?






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


