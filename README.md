# Express Handlebars Challenge 💻 💻

## Aim of the challenge

The aim of this challenge is to practice handlebars built in helper methods to display information.

## Introduction

- The server entry point is `src/index.js` which starts the server imported from `src/app.js`. This sets up the server with handlebars middleware and routes.
- The home route is defined in `src/routes/index.js`. It renders the `src/views/home.hbs` view. This is the only route in the app. It is passed the user data from the `src/model/index.js`.
- The `src/views/home.hbs` view is rendered within the `src/views/layouts/main.hbs` layout. It uses the `src/views/partials/header.hbs` partial and also has access to the helper functions exported from the `views/helpers` folder.

## Let's start the challenge :rocket:

1. Clone this repo
2. Run `npm install`
3. Run `npm run start:watch` and open the app in your browser (`http://localhost:3000/`)
4. Open `src/views/home.hbs` in your editor.


- Your task is to edit `src/views/home.hbs` to display the users data in the following ways.

![solution](./images/tasks.png)

- Some of these helpers will be useful: http://handlebarsjs.com/builtin_helpers.html

- **Hint**: For some challenges you will need to use the helper function found in `views/helpers`.

- **Hint 2**: Instead of hard-coding the numbers in Challenge 4, try figuring out how to solve it with the help of your own helper function that you can create in the `views/helpers` folder.
