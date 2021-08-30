# [Captivatium.com](https://www.captivatium.com)
This is my personal brand's website used to share my content with the world as I'm also passionate about photography
and videography. Hope you like it. 

## Stack Used
- Backend: _NodeJS, ExpressJS, MongoDB_ and _AWS S3._ Used _Mocha_ and _Chai_ for some api testing.
- _ReactJS_ with Bootstrap and some SCSS for the frontend

All deployed on an AWS EC2 Instance, with SSL certificates and CSP.

## Bootstrapping
- For Developing:
  - Install [Docker](www.docker.com) and run `docker-compose up --build` in the root folder
  - If you don't want to use docker just run: `npm i && npm i --prefix client `in the root directory
- For Deploying:
  - Set up NGINX and use PM2 to start the ExpressJS server
  - See [How to deploy a MERN app to EC2](https://betterprogramming.pub/deploy-mern-stack-app-on-aws-ec2-with-letsencrypt-ssl-8f463c01502a)