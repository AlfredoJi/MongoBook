# MongoBook

## Description

The purpose of this application is to act as an API for a social network web application. Here users can share their thoughts, reacts to thoughts, and add other users as friends. This application will use Express.js for routing, a MongoDB database, and the Mongoose ODM. Since there is no front-end for this application the user must use Insomnia to create the data. 


## Installation

To run this application you will need to install Express.JS, Mongoose and also have Insomnia.
URL: https://github.com/AlfredoJi/MongoBook


## Usage

To add data the user must use Insomnia. From there they can create users using this POST route 'http://localhost:3001/api/users' and fill out the JSON body with a username and email. They can get all users with this GET route 'http://localhost:3001/api/users'. To get a single user the GET route is 'http://localhost:3001/api/users/:userId'. To delete a single user the DELETE route is 'http://localhost:3001/api/users/:userId'. To update a single user the PUT route is 'http://localhost:3001/api/users/:userId'. To add a friend use the POST route 'http://localhost:3001/api/users/:userId/friends/:friendId'.To delete a friend use the DELETE route 'http://localhost:3001/api/users/:userId/friends/:friendId'.

To get all Thoughts use the GET route 'http://localhost:3001/api/thought'. To create a thought use the POST route 'http://localhost:3001/api/thought' and fill out the JSON body. To get a single thought use the GET route 'http://localhost:3001/api/thought/:thoughtId'. To delete a single thought use the DELETE route 'http://localhost:3001/api/thought/:thoughtId'. To update a single thought use the PUT route 'http://localhost:3001/api/thought/:thoughtId'. To create a reaction use the POST route 'http://localhost:3001/api/thought/:thoughtId/reactions'. To delete a reaction use the DELETE route 'http://localhost:3001/api/thought/:thoughtId/reactions/:reactionId'.
Walkthrough Video: https://drive.google.com/file/d/1wWMtzCGf2Dcy6cX2ty6jhYF5cx3Xrasz/view

## Image

![MongoBook](/images/mongobook.PNG)