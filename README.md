# Backend

# Heroku

https://ptpt-pp-2.herokuapp.com/



| Auth       |                        |                                                                                                                                           |
| ---------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **POST**   | _/api/auth/register   | Register new user - username, password required                                                                         |
| **POST**   | _/api/auth/login      | Login - username and password required - returns token                                                                                    |
| **PUT**    | _/api/auth/:id/update | Update user password for the given user_id - password, valid user_id, and valid token required             |
| ------     | ------                 | ------         