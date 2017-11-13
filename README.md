# REST API
Demo app with basic REST API
use express, sequelize and jsonwebtoken

#### List of User routes:
Route | HTTP | Description
----- | ---- | -----------
`/api/users` | GET | Get all the users info(admin only)
`/api/users/:id` | GET | Get a single user info(admin & user Auth)
`/api/users` | POST | Create a user(admin only)
`/api/users/:id` | DELETE | Delete a user(admin only)
`/api/users/:id` | PUT | Update a user with new info(admin & user Auth)
`/api/signup` | POST | Sign up with new User info
`/api/signin` | POST | Sign up while get an access token based on credentials

## Usage
#### With only npm:
```
sequelize db:migrate
npm install
npm start
```

Acces the website via `http://localhost:3000` or API via `http://localhost:3000/api`
