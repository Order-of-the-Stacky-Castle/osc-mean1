# osc-mean1
## Some Prelims for Dev Team Sanity
- Rule #1 - DO NOT WORK DIRECTLY FROM `master` branch.
- Rule #2 - Create new branches from the `dev` branch.
- Do not blindly `merge` to the `dev` branch.  Please initiate a `pull`/`review` and get confirmation before merging.

# TTS/DevOps Bootcamp - Team Project 02
<!-- ## [MadLibs API](#)
madlib-api - [On Heroku?](#) -->
## Team Members
- [Jason Byer](https://github.com/jbyer3)
- Thomas Weldon
- [Ben Nowak](https://bennowak.github.io)
## Overview
This project was an exercise in both teamwork and fundamentals of Web Application Development using the MEAN stack.  Team OSC was tasked with designing and developing a working CRUD web application that exhibited basic functionality common to database operation.
### Project Choice
Order of the Stacky Castle chose to bring some levity into this project.  A madlib generates fun with just enough complexity to demonstrate a good grasp of both frontend `(Angular.io)` and back-end `(API using Express.js)`. It seemed like a managable project given the limited time resources available to the team.
### Tech Stack Detials
- JavaScript
- MongoDB
- Express
- Angular
- Node
### Developemnt Environment Details
- IntelliJ
- VSCode
- Postman
### Areas for Future Development
- User authentication and security
## Data Models and Attributes
### words
```
Word {
  _id: string;
  type: string;
  subtype: string;
  word: string;
  }
}
```
### templates
```
Template {
  _id: string;
  title: string;
  createdBy: string;
  isProfane: boolean;
  category: string;
  body: [string];
```
### stories
```
Story {
  _id: string;
  template_id: string;
  creator: string;
  words: [string];
}
```
## Aknowledgements
Team OSC would like to thank [Tech Talent South](https://www.techtalentsouth.com) and [Cognizant](https://www.cognizant.com) for comming together to give us the great opportunity to learn and grow.  We also want to thank our istructors [Eric Schwartz](https://github.com/erics273) and [Leslie Alvarado](https://github.com/lealvarado) for guiding us to this point.  We look forward to what the following weeks and months bring.
