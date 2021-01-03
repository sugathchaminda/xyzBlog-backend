# XYZ Blog

This app implemented using a NodeJS, ExpressJS and MongoDB.
# Usage
- Create a file called `dev.json` in config directory and copy the contents of the `dev.example.json` file
- Change the database and sendgrid details according to your environment in dev.json file
- Create database called `xyz` (as in the dev.json file) or change according to your preference.
- Install required modules (`yarn  install`)
- Create admin user - use `yarn seed:dev` command to run the seed for admin user.
- Run (`yarn server:dev`)

# Admin login details
- Admin username - s@y.com (according to the seeder)
- Admin password - 1qaz!QAZ (according to the seeder)