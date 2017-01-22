# SeekPad
<img src="https://travis-ci.org/mountainMeteors/mountainMeteors.svg?branch=dev"/>

1. [Description](#description)
2. [Demo](#livedemo)
3. [Motivation](#motivation)
4. [Tech Stack](#techstack)
5. [Team](#team)
6. [Usage](#usage)
7. [Requirements](#requirements)
8. [Development](#development)

## Description
An apartment seeking tool which allows the user to keep track of any potential units they are looking into, with an intuitive and elegant UI.

## Live Demo
See our demo [here](https://seekpad.herokuapp.com).
Best viewed at 67%

## Motivation
After experiencing nightmare stories in our individual apartment searches, our team came together to produce an application to remedy this situation. By allowing users to add the listings they are tracking, and sort them according to what is personally important to them, SeekPad is able to greatly simplify an otherwise painful process.

## Tech Stack
MySQL  
Express  
React + Redux  
Node.js  

## Team

  - __Scrum Master__: [Yueh Chou](http://github.com/yuehkchou)
  - __Development Team Members__: [Jack Sapperstein](http://github.com/jacksappo), [Samantha Gowda](http://github.com/samgowda), [Wen Tran](http://github.com/wentran), [Yueh Chou](http://github.com/yuehkchou)

## Usage
### Filling out a survey
After logging in for the first time, user will be prompted to fill out a survey. This survey is designed to gather information concerning what the user is looking for in an apartment, for use in sorting the user's listings.
User will always be prompted to fill out a survey if they have not done so previously.
### Adding listings
After logging in, user will see a map of their area. User will have no listings by default, and may add one by clicking the Add button. User may add a listing's information manually, or may paste an Apartments.com link in the URL field, which will attempt to populate most fields. The exceptions to this are the Pets and Amenities fields, which must still be entered manually.
When populating the fields via an apartments.com link, user must still click on the Address field to select the correction location.
### Editing listings
After adding a listing, user may click the pencil icon to edit the listing's details. Fields will auto-populate with the relevant information.
### Archiving listings
If a user feels a listing is no longer relevant to them, they may click the trash can icon to archive it. All archived listings may be viewed by clicking on the appropriate tab, and may be toggled to unarchived as needed.
### Adding and viewing photos
(To come)

## Requirements  
- axios 0.14.0
- babel 6.5.2
- babel-core 6.14.0
- babel-loader 6.2.5
- bcrypt-nodejs 0.0.3
- bluebird 3.4.6
- body-parser 1.15.2
- cors 2.8.1
- css-loader 0.25.0
- express 4.14.0
- file-loader 0.9.0
- jwt-simple 0.5.0
- knex 0.12.1
- multer 1.2.0
- mysql 2.11.1
- path 0.12.7
- react 15.3.2
- react-addons-shallow-compare 15.3.2
- react-bootstrap 0.30.3
- react-dom 15.3.2
- react-dropzone 3.6.0
- react-geosuggest 1.25.1
- react-google-maps 4.11.0
- react-image-gallery 0.7.2
- react-rangeslider 1.0.9
- react-redux 4.4.5
- react-router 2.8.1
- react-router-redux 4.0.6
- react-select 1.0.0-rc.2
- redux 3.6.0
- redux-form 6.0.5
- redux-promise 0.5.3
- request 2.75.0
- superagent 2.3.0
- webpack 1.13.2
- x-ray 2.3.0

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### Roadmap
- Implement APIs
  - Yelp: Identifies which areas have restaurants the user prefers
  - GoogleMaps Distance Matrix: Identifies the commute time to work
- General styling
