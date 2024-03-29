
# Newcastle Tourism Frontend

This is the frontend code for the Newcastle Tourism project. The frontend is built using HTML, CSS, and React, showcasing a modern web application that provides users with information and services related to tourism in Newcastle.
Refer to the link https://github.com/tongwu17/NewcastleTourismBackend, which is the backend for this project.

## UI and App Interface Showcases
 
This is the home page:

<img src="images/homepage.png" alt="Home Page" height="200">

This is the search page:

<img src="images/search.png" alt="Search Page" height="200" />

This is the function page:

<img src="images/function.png" alt="Function Page" height="300" />

This is the map display page:

<img src="images/mapdisplay.png" alt="Map Display" height="300" />

This is the search by map page:

<img src="images/searchbymap.png" alt="Search by Map" height="300" />

This is the user comment page:

<img src="images/comment.png" alt="User Review" height="300" />

## How to run

Before running this project, please run the backend project first.

```
npm install
npm start
```

## How to run testing

```
npm run test
```

## Structure

```
./
├── README.md
├── package-lock.json
├── package.json                      - node package dependency
├── public                            - static files that should be deployed
└── src                               - source code
    ├── api.js
    ├── components
    │   ├── Common                    - Common components
    │   │   ├── Button.js
    │   │   ├── Button.test.js
    │   │   ├── Error.js
    │   │   ├── Error.test.js
    │   │   └── Header.js
    │   ├── Detail                    - Detail page related components
    │   │   ├── Index.js
    │   │   ├── InfoDetail.js
    │   │   ├── InfoHeader.js
    │   │   ├── InfoPic.js
    │   │   ├── PostReview.js
    │   │   ├── ReviewList.js
    │   │   └── Star.js
    │   ├── Home                      - Home page related components
    │   │   ├── Dropdown.js
    │   │   ├── DropdownItem.js
    │   │   ├── DropdownItem.test.js
    │   │   ├── Index.js
    │   │   └── SearchBox.js
    │   └── Result                    - Result list page related components
    │       ├── Filter.js
    │       ├── Index.js
    │       ├── List.js
    │       ├── Map.js
    │       ├── Marker.js
    │       ├── PlaceItem.js
    │       └── Star.js
    ├── config.js                     - configuration, like Google Map API_KEY
    ├── images
    ├── index.js                      - entrance of the project
    ├── styles                        - stylesheets
    │   ├── Detail
    │   │   ├── Index.css
    │   │   ├── InfoDetail.css
    │   │   ├── InfoHeader.css
    │   │   ├── InfoPic.css
    │   │   ├── PostReview.css
    │   │   └── ReviewList.css
    │   ├── Home
    │   │   ├── Dropdown.css
    │   │   ├── Index.css
    │   │   └── SearchBox.css
    │   ├── Result
    │   │   ├── Filter.css
    │   │   ├── Index.css
    │   │   ├── List.css
    │   │   └── PlaceItem.css
    │   └── common.css
    └── utils                         - utilities
        ├── calDistance.js
        ├── convertType.js
        └── formatTime.js
```
