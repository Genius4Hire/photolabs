# Project Description
In this project, we will combine the knowledge we’ve gained building mini-projects using React and create a larger project with a few more moving pieces.

PhotoLabs is a React-based single-page application (SPA) that allows users to view photos in different contexts. We will use a pre-existing API to build a frontend user experience for users to interact with photos!

## Goal
You have one goal:

* Build a client-side application using the React view-layer library.
* Functional Requirements
* Let’s go over what is technically required to make this a valuable application for our users:

The client-side consists of the development of a React single page application (SPA) called PhotoLabs
The server and persistence layer given as follows:
The data layer consists of PostgreSQL database
The API server consists of a Node Express.js server application
The server/persistence layer may require modifications for stretch goals
The client will communicate with the API over HTTP using the JSON format
Behavioural Requirements
A user can view photos from the homepage loaded from the API.
The user can navigate to different photo categories, also called topics.
The user can click on a photo to view a larger version of the photo and relevant / similar photos.
The user can like a photo from anywhere within the application where the photo is displayed.
The user can view a heart icon with a notification in the navigation if there are liked photos.
The navigation will consist of different topics and heart icon.
The client-side application will make API requests to load and persist data (i.e. relevant data is not lost after a session restarts, so after a browser refresh).

## Technical Specifications with API References
React
Create React App
Webpack
Babel
Express
The PhotoLabs client application will use Create React App (CRA) and Express will be the basis for the PhotoLabs API server application.

Note that two different servers will be running during development:

Client-side Webpack development server and
API server to provide photo data
We will use mock data on the front end and integrate the API server afterwards.
