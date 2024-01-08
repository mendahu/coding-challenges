# Mock Blog Post Page

Your client has charged you with creating a page that will list all the posts from a specific user, as well as the comments on that post. The requirements are as follows:

## User Requirements

- The page should be dynamically accessible via the `/users/:userId` path, where `:userId` is the number for a specific user Id (ie. `/users/1` should show the posts for user 1, `/users/2` should show the posts for user 2, etc.)
- The page should dynamically fetch the posts from the requested user and display them in a list, each with the `title` and the `body` properties rendered.
- Each list item should be expandable to show or hide comments for it. Comments should be hidden by default, allowing the user to pick which post comments they want to expand and see.
- Once expanded, all comments for that post should be visible, showing `name`, `email`, and `body`.
- Both a loading state and an error state should be visible at the post level and the comment level, in case the user has a slow internet connection or experienced an API error.

## Technical Requirements

- This app should be bootstrapped with `create-react-app` and be a completely client-rendered Single Page Application (SPA)
- Posts should be fetched on page load, but comments should be fetched on demand (when the user expands a list item to see the comments). Loading and error states should be tracked and displayed separately for each.
- Application should be version controled and posted to a public GitHub link that can be shared with interviewers

## API Information

Use the data from [{JSON}Placeholder](https://jsonplaceholder.typicode.com) to render this page. Specifically, you'll need these JSON endpoints:

- `posts` - https://jsonplaceholder.typicode.com/users/:userId/posts
- `comments` - https://jsonplaceholder.typicode.com/posts/:postId/comments

## Styling

There are no styling requirements for this take-home assessment. Feel free to be as creative as you wish. We are more interested in assessing React and JavaScript skills.

## Additional Tips

- There are no restrictions on bringing in additional `npm` packages to build this. However, be prepared to speak to _why_ you chose any particular package, as well as why a package is necessary at all.
- Please be prepared to speak to your decision making process for which components to build, your data fetching strategy, and your state management.
