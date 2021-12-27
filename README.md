## Capita - Solo React Hooks Project

### Table of Contents
- [Deployed Site](#deployed-site)
- [Github Repo](#github-repo)
- [Demo](#demo)
- [Project Spec](#project-spec)
- [App Operation Instructions](#app-operation-instructions)
- [Setup Instructions](#setup-instructions)
- [Learning Goals and Reflections](#learning-goals-project-reflection)
- [Future Additions](#future-additions)
- [Contributors](#contributors)
- [Project Managers](#project-managers)

## Deployed Site - 
https://capita.surge.sh/

## GitHub Repo - 
https://github.com/ericli1996/Capita/

## Demo
Search/Default Display

![Fig A](https://user-images.githubusercontent.com/75854628/135024378-03ccfdf0-9bca-41ce-890a-45ed23a9fd38.png)

Search Results Display

![Fig B](https://user-images.githubusercontent.com/75854628/135024450-744d6455-6f40-4d1c-84e4-3556688f91b1.png)
e-890a-45ed23a9fd38.png)

Stock Detail Display

![Fig C](https://user-images.githubusercontent.com/75854628/135024486-309042a9-44c5-471e-b688-4f1a6ff3d018.png)

Favorited Stocks Display

![Fig D](https://user-images.githubusercontent.com/75854628/135024522-86d70d60-8521-428d-ad14-bd12994dbd5b.png)
## Project Spec

[Project Spec](https://frontend.turing.edu/projects/module-3/showcase.html)

## Instructions
- The purpose of the Capita App is to help users make informed investments by checking real-time data.
- On page load, a user first sees a loading screen with a logo, which takes the user to a form with two inputs.
- Currently, a user can enter a search query, and pick between either NASDAQ or NYSE stock exchanges.
- After filling out both fields and clicking the submit button, a list of search results appears based on the user inputted data.
- When a user clicks on one of these search result links, the application renders a stock detail card.
- A user can click or hover over the line graph to view the stock's data points.
- A user can favorite stocks. These will persist on page refresh.
- A user can navigate between pages with the navbar, located at the bottom on mobile and top-right on desktop.

## Setup Instructions

To run the application on a local machine:

- Clone down repository.
- `cd` into repository.
- Run ``` npm install ```
- Run ``npm start``
- Webpage will open in separate browser.

## Technologies Used: 
 - React
 - HTML5
 - SCSS
 - Cypress 
 - React Router
 - React PropTypes

## Learning Goals and Project Reflections

### Learning Goals
- Practice React, and Router
- Strengthen self-teaching and initiative
- Keep implementing hooks
- CSS repetition
- NPM package learning

### Challenges
- Styling nav bar with Router
- Circular structure Error for `JSON.stringify`
- Cypress testing
- Error handling

### Wins 
- Very cool to see data displayed in this way
- Very proud of the dark theme and how the UI looks

## Future Additions
- Explore - A user can navigate to "Explore", which has buttons that a user can choose from "Big Movers, Biggest Gainers, Biggest Losers, etc."
- Delete Favorite - A user can remove a stock from the favorites list
- Filter Data - Weekly/Monthly - A user can click a slider or other input to change the data displayed in the graph from weekly to monthly.

#### Contributors
- Eric Li [Github](github.com/ericli1996)

#### Project Managers
- Scott Ertmer
- Kayla Gordon

###### This project was created for [Turing School of Software and Design](https://turing.io/)
###### 2021/09/27
**[Back to top](#table-of-contents)**