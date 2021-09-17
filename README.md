# Front-end React Social Media app

-   View the backend [here](https://github.com/kawgh1/mern-social-media-rest-api)
-   Based on project by [LamaDev](https://www.youtube.com/watch?v=zM93yZ_8SvE&list=PLj-4DlPRT48lXaz5YLvbLC38m25W9Kmqy&index=2)

## Tools Used

-   ### Material UI
    -   npm install --save @material-ui/core
    -   npm install --save @material-ui/icons
-   ### React Router
    -   npm install react-router-dom
    -   #### Documentation
    -   https://reactrouter.com/web/guides/quick-start
-   ### CSS Gradient Generator
    - https://cssgradient.io/

## Things I added

-   All mobile styling
-   mobile topbar dropdown menu
    -   https://ibaslogic.com/how-to-add-hamburger-menu-in-react/
-   mobile bottombar for navigation between pages
-   Custom scrollbars
-   Accurate Comment and Like Counter w/ proper English in Post.js

        <span className="postLikeCounter">
            {like > 0 ? (
                like === 1 ? (
                    <p>{like} person likes it</p>
                ) : (
                    <p>{like} people like it</p>
                )
                ) : (
                ""
            )}
        </span>
