Full Stack Project

Build a full stack application that displays current and previous weather for a location of the user's choice. 

Your React front end should contain a search box that allows the user to search for a location and display the current weather for that location. You can do this by using the API at this link https://home.openweathermap.org/users/sign_up . 
You'll have to sign up for this API, the free tier provides more than enough access for our purposes. This API also requires an API key that will provided when your account is created, this will be your first time working with an API key which is a way of restricting access. 

Your React application should make a get request to the appropriate endpoint of this API (documentation is your best friend) in order to return the current weather at a given location. 

You should then create your own API that takes the current weather and stores it in a MySQL database. When a user searches for a location that has been previously searched your React frontend should display the weather for that location at a historic time/date. This will involve posting to your own API every time you query the OpenWeather API as well as getting any previous data stored for that location. 

Tech Stack:
React
Node / Express
ORM - Sequelize
MySQL 

The styling of your application is completely up to you but feel free to keep this simple to allow you more time to focus on your Fetch/API/DB logic.


-create new api
-connect database to api
-be able to save data, the city when searched
-display the data previously searched