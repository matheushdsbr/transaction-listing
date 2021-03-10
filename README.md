# Introduction

In this project you will be able to register transaction data informing the establishment, customer, value and description. You can also search for the transaction you registered by informing the establishment and you will receive a list of all transactions carried out by the researched establishment.

## How to start the project

Install all dependencies

### `yarn install`
or
### `npm install`

Run the json-server

### `yarn api`
or
### `npm run api`

The api will work using the http://localhost:3000 port

Start React

### `yarn start`
or
### `npm start`

Select 'yes' to start using port 3001, because the api is using port 3000.<br />Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

## How the project works

### Git
To commit, use commitizen. <br />To learn more about the commitizen rules, [click here](https://github.com/commitizen/cz-cli)

### Colors
To add the colors go to the 'tokens' folder, and the 'colors' file and add or change the colors there.<br /><br />
These colors will be exported and you can access them using<br />```import colors from '../../ tokens / colors';```<br /><br />
To access colors in styled components use for example:<br /> ```background: $ {colors.primary};```<br /><br />
