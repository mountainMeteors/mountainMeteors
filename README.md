# SeekPad
<img src="https://travis-ci.org/mountainMeteors/mountainMeteors.svg?branch=dev"/>



## Team

  - __Product Owner__: Jack Sappertein
  - __Scrum Master__: Yueh Chou
  - __Development Team Members__: Jack Sapperstein, Samantha Gowda, Wen Tran, Yueh Chou

## Usage
### Filling out a survey
### Adding listings
### Archiving listings
### Adding and viewing photos

## Requirements
- axios 0.14.0
- babel 6.5.2
- babel-cli 6.16.0
- babel-core 6.14.0
- babel-loader 6.2.5
- bcrypt-nodejs 0.0.3
- bluebird 3.4.6
- body-parser 1.15.2
- classnames 2.2.5
- cors 2.8.1
- css-loader 0.25.0
- es6bindall 0.0.7
- express 4.14.0
- express-router 0.0.1
- file-loader 0.9.0
- jwt-simple 0.5.0
- knex 0.12.1
- multer 1.2.0
- mysql 2.11.1
- open 0.0.5
- path 0.12.7
- rc-slider 5.1.1
- react 0.14.8
- react-addons-css-transition-group 15.3.2
- react-addons-shallow-compare 15.3.2
- react-bootstrap 0.30.3
- react-bootstrap-multiselect 2.2.0
- react-bootstrap-slider 1.1.2
- react-dom 0.14.8
- react-dropzone 3.6.0
- react-flipcard 0.2.1
- react-geosuggest 1.25.1
- react-google-maps 4.11.0
- react-image-gallery 0.7.2
- react-images 0.5.1
- react-modal 1.4.0
- react-rangeslider 1.0.9
- react-redux 4.4.5
- react-router 2.8.1
- react-router-redux 4.0.6
- react-select 1.0.0-rc.2
- react-select-box 3.0.1
- react-widgets 3.4.4
- redux 3.6.0
- redux-form 6.0.5
- redux-promise 0.5.3
- request 2.75.0
- superagent 2.3.0
- url-loader 0.5.7
- webpack 1.13.2
- x-ray 2.3.0

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### Considerations
<!-- - Modals are currently implemented in totally different ways. Compare what happens when you click "Add Job" button in listing to when you click the Edit button for a job. Edit button needs to be done as it is because it needs to call $uibModal.open, so that it can have access to the "resolve" key.
- There are 3 unique spots in the app which independently reference the different possible statuses a user can set:
  - progressionArr, in listing.js. This is used as an array so we can easily increment progression by 1, and so that we can utilize ng-options.
  - progressionObj, in listing.js. This is used as an obj so we can easily find the values associated with a given status name with minimal time complexity.
  - orders, in router.js. This is used to add a numerical "order" based on status, so that jobs can be sorted by status. -->

### Roadmap

-

<!-- - Fix login issues. We have two implementations with independent problem sets:
    a) Current implementation uses passport. User is able to sign up/log in, then is redirected to profile. Not currently set up with angular to redirect to job listings (listing button is hard coded to our listing page). Logout button working correctly from profile page, but not listing view.
    b) Commented implementation uses FB authentication (client side: auth.js/html); Problems connecting USER DB to JOB DB using FB ID && logout works from login page only -- update? Must use old code for server.js, router.js, & DBS that is commented out
- Bugs
  - Using edit modal currently live-updates the page. Should not update page until submit button is pressed.
  - Modal close transitions are inconsistent. Add job fades out, but edit/delete instantly disappear. Add job currently is implemented in a different way, so maybe implement it as edit is.
- Add a search filter that will help to narrow down the work search. (This may already be in place)
- Synergy with LinkedIn. Embedded feed with suggested jobs, icon directly on linkedin which adds it to your listing, etc.
- Instead of deleting jobs, send them to an "archive" so that you can retrieve them later if needed. Especially because you may not want to include accepted/declined jobs.
- An attachment feature that allows user to link to their local cover letters, resume, etc.
- Addl fields. Contact info, salary, etc. Doesn't necessarily have to be shown outside of EDIT modal
- Expand user profile. Perhaps request more info on signup.
- Coding Cleanup
Progress Bar - Current implementation is extremely WET and uses some static variables. Totally functional but if you change how it works, errors are likely.
Combine the add and edit modal into one modal.
- If you can, make it prettier lol -->

### Tech Stack
