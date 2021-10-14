# react-express-starter

Simple and scalable starter project to create production ready fullstack applications with express and react.

## Running the application locally
### As a docker container
Run `docker up --build` to run the application in development mode
### Natively without docker 
Run `npm run dev` to run the application 

## Deploying application 

### As a docker container
### Node application without containers


## Scheme of things -

- Add ping endpoint & example users validation - `done`
- Linting with eslint - `done`
- Formatting with prettier & check harmony - `done`
- Process management with pm2 - `wip:abhishek` add pm2 management scrips to npm scripts
- Test case setup with jest/supertest - `done`
- Dockerise the application with docker-compose - `wip: dev is done, prod setup tbd`
- Add a sample Git Worflow file for CI
- Add response middleware
- Add authentication & authoristion features with passport or similar package
- Add Admin page to manage IAM permissions for apps and users
- Add request payload validation with joi or similar package
- Add auto swagger generation capabilities with the request body definition
- check database integrations but it should not be biased to use a specific database
- Isolate features as modules and export project as a commad line utility
- Security - `wip:abhishek` handle input sanitisation
- Explore rate limiting options & load testing
