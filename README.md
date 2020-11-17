## Giphy API Team Project

Fun application that takes user input and searches for a GIF from Giphy.com. The response is then parsed and appended to the DOM.

By Austin Schrader, Danielle Thompson, and Kaila Sprague McRae

## Description

This project was created by Austin Schrader, Danielle Thompson, and Kaila Sprague McRae for Week 5 (APIs and Asynchronous programming). It was created using CSS, HTML, JavaScript, Git, GitHub, and Markdown, VSCode, Emmet, and Prettier.

## Setup

_Node needs to be installed for this project to work. If you do not have it, please go to [here](https://nodejs.org/en/download/)._

1. Download this repository by clicking the "Clone or Download" button
2. Navigate to the folder where it downloaded
3. Open the terminal window and type `npm install` to install the required dependencies
4. This project uses Giphy API, so you need to acquire an API Key by making an account [here](https://developers.giphy.com/docs/api#quick-start-guide). Click on "Create an app" to get started.
5. Once you obtain the API key from Giphy you will need to create a file named `.env` file in the root directory. \*\*\*
6. In the `.env` you will need to save your API key, as follows: `API_KEY: {Your-API-KEY-here}`
7. To start a live server of the project in your browser, run this command in your terminal: `npm start`.

\*\*\* An `.env` file will keep your API Key secure. [Read more on keeping API keys secure.](https://medium.com/@soni.dumitru/keeping-your-api-keys-secret-with-dotenv-b66aa05fdf71)

## Specs

Describe: User Interface
Test: "funny"
Expect: A gif to be appended to the DOM that reflects "funny"

## Known Bugs

At this time, there are no known bugs. If you see spot a bug feel free to make a pull request.

## Technologies Used

- JavaScript
- [Giphy API](https://developers.giphy.com/docs/api#quick-start-guide)
- [Node.js](https://nodejs.org/en/download/)
- Node Package Manager (Installed with Node.js)
- Webpack (node modules including jQuery, Bootstrap, XMLHttpRequest, etc)

## License

This repository is licensed under the MIT license.

Copyright (c) 2020 by _Austin Schrader, Danielle Thompson, and Kaila Sprague McRae_
