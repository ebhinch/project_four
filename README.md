# PROJECT FOUR

## ROCK YOUR LIFE
### An app connecting travelers, locals and adventure-seekers of all kinds with everything the Rocky Mountains' small towns have to offer. Peak season skiing, mid-summer hiking and all the festivals in between, ROCK YOUR LIFE's got it all. 

## User Stories, Wireframes, and ERDs:
* [User Stories] (https://trello.com/b/fvOmU17h/wdi-final-project)
* [Wireframes] (https://marvelapp.com/3b4f7fa)
* ERD
<img src="/images/project_four_erd.png">

## LINKS TO APP
* [Deployed to Heroku] (https://desolate-bastion-36051.herokuapp.com/)
* [GitHub] (https://github.com/ebhinch/project_four/)

## PORTFOLIO SITE LINK
* [Portfolio] (http://scheduler-hare-37153.bitballoon.com/)

## TECHNOLOGIES USED
* ROCK YOUR LIFE was built using React on Rails, Axios, PostgreSQL,Devise Token Auth, Foreman, the Google Maps Elevation API, Moment.js, CSS, JavaScript, HTML, Heroku, Google Fonts, FlexBox, media queries, HTTParty, namespacing, Trello, Marvel, draw.io and more. 

## APPROACH TAKEN
* As in past projects, I dedicated a lot of time to planning before getting started on writing code. This allowed me to really understand my data models and what I would be able to accomplish with each given how they'd be built. I was able to thoughtfully assemble data models taht that would be able to interact with each other in a logical way. 
* I decided to feature four data models and include two models that were connected to each other through a join table, bringing in a skill I'd not yet used in a project and until now had little experience with. 
* I continued to use only organic CSS, not working with any CSS libraries or frameworks in an effort to continue building my own styling skills. I successfully built a fully responsive app that works on screens of varying sizes. 
* I utilized Git branching in depth. Ending with more than 20 branches. While I did run into obstacles, I felt this appraoch helped build my confidence in coding because it limiited my ability to break my code. 

## REACH GOALS
* I included several reach goal initiatives in this project. Add in functionality for users to create event comments when they're signed in was a big reach goal for me. In addition to building this feature, I was able to build out functionality for users to only see the "add comment" button if signed in. Otherwise, if not signed in, they only see an alert asking them to sign in. 
* I also used a regular expression to format numbers over three digits to include commas where appropriate. 
* I built out a toggle function and used a ternary expression to toggle the "sign in" / "sign out" button to reflect what functionality a user would need given if he is currently signed in or out. 


## UNSOLVED PROBLEMS & TASKS FOR FUTURE
* Chief of all, I would like to DRY up my code more. The SFEventList and WSEventList components as well as my styled components could all be consolidated. Having concise code is something I strive to achieve with all my projects, so this is a big priority for the future. 
* I would like to build out functiaonlity so that each comment would show the name / email of the user who left it 
* I would like to utilize another external API to bring in additional information on each town. Perhaps using a weather API to somehow show current, but also average, weather - the current weather displaying on the town's show page and the average weather showing the average weather of the season a particular event occurs during.
* I would like to also bring in the funcationality using validations to alert users if they incorrectly type into the "season" field when creating a new event. 
* Lastly, I would like to create an "admin" type of user and allow only those users to create events. Requiring that they be logged in.

## NOTES
* I would like to note that Jamie helped me format my numbers with using a regular expression we located online. This one line of code was incorporated into my project and was not originally my own.
* I also used snippets of code from my own past projects and homework. 
* This project is a reflection of only my own work and my own resoruces in addition to taecher and TA assistance and classmate discussion. With exception of the comma function, all code is my own. 

## RESOURCES
* Class notes and code-along examples
* Classmate collaboration
* TA support from Burns
* Instructor support from Jamie and Danny