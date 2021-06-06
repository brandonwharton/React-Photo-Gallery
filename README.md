# React Personal Photo Gallery

## Description

This project was intended to utilize the skills and knowledge learned this week about creating web apps with React. The idea
was to design a photo gallery app with the capacity to display a list of images, use a "like" button to track and display
the total number of likes that a photo has, and conditional rendering to display a description of the photo when clicked. I implemented
the ability to add new images using a form at the top of the app as well as a delete button to remove unwanted images.

Additionally, I created the backend database for storage of data and routes for all the requests, making this a full-stack full CRUD app.
The images are displayed at a specific fixed width but height adjusts automatically so photos that get added don't need to stretch to fit
a specific view window. The height of the image is stored locally on the app and inherited by the description box so dynamically-sized photos
and their toggled descriptions always take up the same footprint on the UI. 

You can view this project on Heroku [here](https://safe-fjord-85035.herokuapp.com/)

## Screen Shot

![app screenshot](/screenshots/gallery-screenshot.png)

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Homebrew](https://brew.sh/)

## Installation

1. Using provided database.sql file, use a database manager of your choice ([Postico](https://eggerapps.at/postico/)) to create a local
database with the listed table name and structure.
2. Begin running your local database by running `brew services start postgresql` in a terminal.
    - Stop database by running `brew services stop postgresql` in that same terminal.
3. Navigate to the root directory of the project in another terminal.
4. Run `npm install` in the terminal to install dependencies locally.
5. Run `npm run server` in your terminal to start the project's local server.
    - Stop the local server by pressing `ctrl-c`.
6. Run `npm run client` in another terminal to start the client page.
    - Stop the local server by pressing `ctrl-c`.    
7. Open a browser window and navigate to [http://localhost:3000/](http://localhost:3000/) to use the app.

## Built With

- React
- Node.js
- PostgreSQL
- Axios
- Express
- Material UI
- SweetAlert

## Acknowledgement

Thanks once more to [Prime Digital Academy](https://www.primeacademy.io/) for the curriculum that continues to challenge
and stretch my understanding on a daily basis, and makes projects like this possible.