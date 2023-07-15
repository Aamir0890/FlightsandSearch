# Welcome tho flight_service_booking project

## Project Setup
-clone the git repository
-Execute `npm install` on the same path as the root directory of the downloaded project
-create a new .env file in the root directory and add the following enviroment variables
--`PORT=3000`
-Inside the 'src/config' folder create a new file 'config.json' and then add the following json
{
  "development": {
    "username": "your-db-login name",
    "password": "your-db-password",
    "database": "Fligh_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },