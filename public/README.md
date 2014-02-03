Prerequisites
=============

1. Bower (front-end package manager)
2. Grunt (JavaScript task runner for packaging and automatically running tests for client side code in browser)
3. Yeoman (if you want to generate new routes/controllers/views)
4. generator-angular (if you want to generate new routes/controllers/views)

Easy way to get the prereqs:

    npm install -g yo
    npm install -g generator-angular

The "yo" package will install Yeoman, Bower and Grunt.

Instructions
============

1. Run `grunt` to build everything under "dist" folder
2. Run `grunt test` to run the Jasmin Unit and End-2-End tests
3. Run `grunt server` to run a simple test server
