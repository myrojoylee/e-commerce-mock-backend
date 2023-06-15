# E-commerce Mock Backend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is a work in progress! Follow my progress below:

## Description

This work was an exercise in creating API routes as part of the backend of an e-commerce application. Sequelize is a tool for Object Relational Mapping (ORM). It enables developers to easily work with RDMS like MySQL in the Node server environment. Additionally, we used the concept of async/await to rewrite Promise-based code.

There is no frontend portion for this so all API endpoint testing was was done in [Insomnia](https://insomnia.rest/).

## Installation

- MySQL is required for this app to run, so follow directions outlined [here](https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide) for a step-by-step guide depending on your operating system.
- This is a [Node.js](https://nodejs.org/en) application. It is recommended to use at least v16 (up to v18) for this app to run correctly.

### Dependencies

Type the following in your terminal to run the application:

`npm i express`

- [Express](https://expressjs.com/) is needed to build the server.

`npm i sequelize`

- [Sequelize](https://sequelize.org/) is the ORM tool used in this work.

`npm i mysql2`

- [MySQL2](https://www.npmjs.com/package/mysql2) is needed to connect the app to the MySQL database.

`npm i dotenv`

- [dotenv](https://www.npmjs.com/package/dotenv) is needed to handle environmental variables that hold sensitive data.

## Usage

In the MySQL shell, we type in `source db/schema.sql` to create the database. We exit the MySQL shell and return to the terminal where we type in `node seeds` to execute the seed scripts. We start up the server with `nodemon server` and begin testing our endpoints in Insomnia Core. The following video tests all of the routes. The video can also be found [here](https://drive.google.com/file/d/1EGcb2aaYXUMnJ7uwpHqZJeSPnUqgZAFw/view?usp=sharing).


https://github.com/myrojoylee/e-commerce-mock-backend/assets/120980593/0707abb9-0107-4343-8299-06b380214ced


## License

Refer to the license in the repository.
