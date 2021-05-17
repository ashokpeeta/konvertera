# Implementation
### The implementation is done as follows
* I have bootstrapped the front end of the application using the Create React App and it's documentation is given in [Bootstrapping the application section](#bootstrapping-the-application)
* I have created an api collection on Postman to document the endpoints and use them for integration at     
    * [Fixer currency exchange](https://www.getpostman.com/collections/9275132fac4b32442c87) 
    * [Rest countries](https://www.getpostman.com/collections/bcbf54947b0f6d6d91cc)
* I have created a github repository to show my git etiquette at [Konvertera Github link](https://github.com/ashokpeeta/konvertera)

# Provided the time I might have implemented the following
* would have used react-app-polyfill if support required for IE 9,10,11
* configure eslint and use git hooks package like husky to lint on commits
* Integrate Storybook which allows the user to browse component library, test and develop
* Integrate React-router for routing in the application
* Integrate Redux for state management if we want to share data between different disjoint components
* Setting up the debugger for tests in VSCode
* Write centralised files for handling the side effects(xhr) and errors
*  Take care of BigInit using polyfill to accomodate high precision integers for conversion
* written unit tests, integration and e2e tests
* tried to implement the app conforming to RWD would have taken few more time for any css related changes

# Bootstrapping the application
### This app is created using the create react app tool chain and it documentation is as follows
> # Getting Started with Create React App
> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
> ## Available Scripts
> In the project directory, you can run:
> ### `yarn start`
> Runs the app in the development mode.\
> Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
> The page will reload if you make edits.\
> You will also see any lint errors in the console.
> ### `yarn test`
> Launches the test runner in the interactive watch mode.\
> See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
> ### `yarn build`
> Builds the app for production to the `build` folder.\
> It correctly bundles React in production mode and optimizes the build for the best performance.
> The build is minified and the filenames include the hashes.\
> Your app is ready to be deployed!
> See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
> ### `yarn eject`
> **Note: this is a one-way operation. Once you `eject`, you can’t go back!**
> If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
> Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
> You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
> ## Learn More
> You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
> To learn React, check out the [React documentation](https://reactjs.org/).
> ### Code Splitting
> This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
> ### Analyzing the Bundle Size
> This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
> ### Making a Progressive Web App
> This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
> ### Advanced Configuration
> This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
> ### Deployment
> This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
> ### `yarn build` fails to minify
> This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)