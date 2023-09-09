# Welcome tho flight_service_booking project

Developed a robust microservices architecture for the Flight and Search service using Node.js and Express,
with separate services for authorization, flight booking, flight search, and email notifications.


Each service is hosted on different server and are communicating through http calls.

# Flight Service
- We have a flight service that allows us to create flights with different cities,arrival airport,destination airport,and different flights.See the project know more.

# Auth Service 
- We have a authorization service that allows user to signIn and book flights 
Link to Auth Service [Auth Service](https://github.com/Aamir0890/Auth_Service)

# Booking Service
- We have a booking service that allows user to book flights after they are signedIn
- After booking a flight with fixed number of seats.The total number of seats in the flight automatically gets deducted.

Link to Booking Service [Booking Service](https://github.com/Aamir0890/AirTicketBookingService)


# Remainder Service
- We have a remainder service that automatically sends mails to remind the customer about their flights.

Link to Remainder Serivce [Remainder Service](https://github.com/Aamir0890/Remainder_Service)


## Project Setup
- clone the git repository

- Execute `npm install` on the same path as the root directory of the downloaded project

- create a new .env file in the root directory and add the following enviroment variables

-- `PORT=3000`

- Inside the 'src/config' folder create a new file 'config.json' and then add the following json

{
  "development": {
    "username": "your-db-login name",
    "password": "your-db-password",
    "database": "Fligh_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },


  "once you have added the json file just go to git and write `npx sequelize db:create`"
  
  and to connect to sql server ru `npx sequelize db:migrate`
  
 ## DB design
 - Airplane Table
 - FLights
 - City
 - Airport
 - A flight belongs to an airplane but one airplane can be used in multiple flights
 - A city may have multiple airports but one airport belongs to a city
 - One airport can have many flights ,but a flight belongs to one airport



##Flight Table

- id -unique - to identify the flights

##Tables


### City -> id,name,created_at,updated_at


### Airport -> id,name,adress,city_id,created_at,updated_at
  RelationsShip -> City has many Airports and Airport belongs to a city(one to many)

npx sequelize model:generate Airport attributes name:String,address:String,cityId:Integer




