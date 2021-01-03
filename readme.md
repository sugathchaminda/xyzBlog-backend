# XYZ Blog

This app implemented using a NodeJS, ExpressJS and MongoDB.
# Usage
- Create a file called `dev.json` in config directory and copy the contents of the `dev.example.json` file
- Change the database and sendgrid details according to your environment in dev.json file
- Create admin user - use `yarn seed:dev` command to run the seed for admin user.
- Install required modules (`yarn  install`)
- Run (`yarn server:dev`)