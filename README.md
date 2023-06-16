# E-commerce Mock Backend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This work was an exercise in creating API routes as part of the backend of an e-commerce application. Sequelize is a tool for Object Relational Mapping (ORM). It enables developers to easily work with a RDBMS like MySQL in the Node server environment. Additionally, we implemented the async/await syntax to rewrite Promise-based code.

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

### Optional, but recommended:

- [Nodemon](https://nodemon.io/) to enable automatic restarting of your server upon any detected changes.

## Usage

In the MySQL shell, we run the schema file to create the database. We exit the MySQL shell and return to the terminal where we type in `node seeds` to execute the seed scripts. We start up the server with `nodemon server` and begin testing our endpoints in Insomnia Core. The following video tests all of the routes. The video can also be found [here](https://drive.google.com/file/d/1PbNuc9WaY8I9nd9N2yDRLAWCANcOKZZR/view?usp=sharing).

https://github.com/myrojoylee/e-commerce-mock-backend/assets/120980593/df1e43ad-71c5-4808-add4-e7c09e0ea5a0

## Contribution Guidelines

There are currently no requirements for contribution but pull requests are always welcome as well as an e-mail message (see below) to discuss what your ideas are.

## Contact

Feel free reach out to me via [e-mail](mailto:myro.joy.olida.092282@gmail.com) for any issues or future collaborative project ideas.

## License

Refer to the license in the repository.
