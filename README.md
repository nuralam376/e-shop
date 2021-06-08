# Live Website (https://e-shop1.netlify.app/)

## Installation and Setup Instructions for backend

You will need node and npm installed globally on your machine.

Before proceeding, create a .env file and configure your environment variables within .env.

Create a database named e-shop and provide your database username and password in the .env file

## .env

```
DB_HOST=localhost
DB_USER=""
DB_PASS=""
DB_NAME="e-shop"
```

## install dependencies

go to the server folder

```
$ cd server
```

```
$ npm install
```

## To Start Server:

```
$ node app.js
```

## To Visit App:

localhost:5000

### APIS

```
Get Products - localhost:5000/api/products
```

```
Save Order - localhost:5000/api/order
```

# Installation and Setup Instructions for frontend

You will need node and npm installed globally on your machine.

## Install dependencies

go to the client folder.

```
$ cd client
```

```
$ npm install
```

## To Start Server:

```
$ npm start
```

## To Visit App:

localhost:3000
