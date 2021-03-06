# Legends Card Viewer

This is a React-based web-app that allows users to view and search for cards from the game Elder Scrolls Legends.

## Installation

Clone this repo, navigate into the folder, and run `npm install` or `yarn`

# Local Development

Run `npm start` from the repo directory. This will automatically open your browser to `localhost:3000` with the app running.

# Deployment

Run `npm run build` to cut a release build into the `./build` directory

Using Netlify, run `netlify deploy`, provide it with the `./build` directory, and inspect the draft release

If satisifed, then run `netlify deploy --prod`, with the `./build` directory

## External Dependencies
 - Create React App was used to generate the base part of this app, and that includes the collection of react and testing related libraries
 - Normalize.css - a semi-standard CSS reset tool
 - Axios - a cleaner alternative to using fetch
 - React Helmet - a utility for simple modification of the document head
 - Netlify - although not present in the code base, Netlify is the deployment utility/platform in use


## Notes

- Viewports: The site supports a mobile viewport up to 990px, and then it switches to a desktop design.

## Next Steps

### Code/Design Improvements
- clean up useEffects used in fetching data and infinite scroll
- unit testing
- accessibility and performance auditing
- improved styling on buttons and other features
- flesh out theming and use 3rd, 4th, 5th colors
- error handling, rate limiting in the data fetching
- clean up / test Social/metadata functionality
- catch 'search' event from search input being cleared, and retrigger search

### Functionality

- add subpages for a single card, allowing user to see all metadata
- user accounts (AWS cognito)
- allow users to create and save card lists (local storage, then db)

# Below is create-react-app boilerplate README.md

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
