[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)


# Team Project - Ballin Bucket List

## App Purpose
The purpose of the app is to allow users to enter life goals and track the status of
each goal.  The data will be entered by users, and in the current iteration of the app
users will only be able to view goals they entered.  A feature in the future would
be to add a social aspect to the site.

## How does it work?
A user creates an account and gets access to the features of the app.  Once logged
in the user can enter bucket list items in order to view them and see the status of
each goal they entered.


## Write between 3-5 user stories

* As a user, I want an intuitive application that is easy to navigate and accessiable online
* As a user, I want to be able to add and delete goals to the bucket list
* As a user, I want to update the status of goals to track progress on living a baller life

## Goal Data Object

What tables will you need? What will the columns on the table be?

Album {
Tracks: [track1:, track2]  ,
Artist: ,
Year: ,
Rating (user defined): ,
Rating (calculated): ,
Comments: ,
Album_ID: ,
Genre:
}


Track {
title: ,
length: ,
rating: ,
comments:
}

User {
Email:
Password: ,
Name:
}

## Create an ERD (entity relationship diagram)

These are the diagrams that show how your tables are related to one another.
(one to many, many to many, ect).

###Inital ERD
GET LINK FROM JASON

## Routing

What routes will you need to be able to make the proper request to your API?

2 routes :
1) user-auth
2) Goals

## 3rd Party APIs

Do you plan to use any, if so what are they?

A future feature will use the Google Places API, but currently no APIS being used

## Wireframes

Please create a wireframe of your planned front end.

###Initial Wirefram
GET LINK FROM JASON


## Timetable

Write a basic timetable for yourself, you don't have to stick to it but it
helps to go in with a plan.

* May 15 - Plan out user stories/features. Create intial repository
* May 16 - Create Goals data model, initial wireframe, and set up front end AJAX to pull/display goals.
* May 17 - Deploy app on Heroku/GIT-pages, clean up UI, meet MVP(WOOT), plan bonus features.
* May 18 - Bonus things...TBD

## Link to Live application

https://ballers-inc-public.github.io/ballers-bucket-list-client/

## Link to Rails API github

https://github.com/Ballers-Inc-Public/ballers-bucket-list-api

## Dependencies

Install with `npm install`.

-   [Webpack](https://webpack.github.io)
-   [Bootstrap](http://getbootstrap.com)
-   [Handlebars.js](http://handlebarsjs.com)

At the beginning of each cohort, update the versions in
[`package.json`](package.json) by replace all versions with a glob (`*`) and
running `npm update --save && npm update --save-dev`. You may wish to test these
changes by deleting the `node_modules` directory and running `npm install`.
Fix any conflicts.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
