<h1 align="center">Hi 👋, I'm Rizki Malem</h1>
<h3 align="center">Front End Developer</h3>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> </p>




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `1. install`
#### NPM
```bash
npm install
```
#### Yarn
```bash
yarn install
```

### `2. Env`

Copy .env.example to .env
you can copy the file or copy this
```bash
REACT_APP_API_AUTH_SERVICE=https://dummyjson.com/auth/
REACT_APP_API_USER_SERVICE=https://dummyjson.com/users/
```

### `3. Start`
#### NPM
```bash
npm start
```
#### Yarn
```bash
yarn start
```

### `4. Open website`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

use username and password below
- **Username**: emilys
- **Password**: emilyspass



## Architecture

```
src/
├── assets/
├── components/
|   ├── form
├── hooks/
├── pages/
|   ├── sections
├── redux/
|   ├── actions
|   ├── reducers
├── services/
├── themes/
|   ├── overrides
├── features/
├── utils/
```

## Api Documentation

I used api from dummyjson.com
dummyjson use JWT token for authentication

| resource                                 | description                            |
| :--------------------------------------- | :------------------------------------- |
| POST    `dummyjson.com/auth/login`       | returns a login token                  |
| POST    `dummyjson.com/auth/refresh`     | returns a token after refresh          |
| GET     `dummyjson.com/auth/me`          | returns a user profile data            |
| GET     `dummyjson.com/users`            | returns a user list                    |
| GET     `dummyjson.com/{id}`             | returns a user profile selected        |
| DELETE  `dummyjson.com/{id}`             | returns a user profile selected        |
| PUT     `dummyjson.com/{id}`             | returns a user profile selected        |

the `PUT` and `DELETE` method just return response. the data cannot deleted or updated


## Video Demo
[![Video Demo](https://img.youtube.com/vi/bnaYQ2rs674/0.jpg)](https://www.youtube.com/watch?v=bnaYQ2rs674)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="https://linkedin.com/in/rizky-malem" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="rizky-malem" height="30" width="40" /></a>
<a href="https://instagram.com/rizkymalm" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="rizkymalm" height="30" width="40" /></a>
</p>
