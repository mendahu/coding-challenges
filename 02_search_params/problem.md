# Taco Search!

Your client has a website which allows users to search for Tacos. Currently the app is functional and users are enjoying finding delicious tacos of all stripes. However, some user feedback has come in and your client has now tasked you with actioning it.

The client has come up with some new requirements for you to implement in the form of user stories.

## User Requirements

1. As a user, I want to be able to bookmark the search page at any time with my search parameters and return to this page later with my settings restored, so that I can save time finding the best taco
2. As a user, I want to be able to share the above bookmark with friends, so that they can load the site with my search settings and see my favourite taco results
3. As a user, I want the URL to include the `/search` path to that I have a clearer understanding of where I am on the website.

In addition, your client is imposing some technical requirements on this project:

## Technical Requirements

1. No additional libraries should be installed. All tasks should be completed using libraries already installed (React), Built-in Browser APIs, or vanilla JavaScript
2. All logic should be contained in the front-end. There is no backend or database available to solve these problems.

## Getting Started

1. Open the subfolder `search-params-app` and run `npm install`
2. Start the app with `npm run dev`, this will load the Vite dev environment

## Search Params

- `searchTerm` (a `string` representing a keyword, set to `""` if no keyword)
- `isVegetarian` (a `boolean` representing whether to filter out non-vegetarian options or not, set to `false` by default)
- `maxPrice` (an `integer` representing the maximum amount of pesos a taco can cost, set to `""` if no maximum)

## Tips and Advice

1. For the purposes of this assignment, the function omits the API calls to actually perform the search or the logic to display results
2. The `Search` button is wired into a `console.log` call to help you see the current React State
3. Remember that User Requirement 1 specifies that the user should be able to bookmark the search page _at any time_, which means the search data must be kept in sync with all user actions
