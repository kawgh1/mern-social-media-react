# Front-end React Social Media app

-   View the backend [here](https://github.com/kawgh1/mern-social-media-rest-api)
-   Based on project by [LamaDev](https://www.youtube.com/watch?v=zM93yZ_8SvE&list=PLj-4DlPRT48lXaz5YLvbLC38m25W9Kmqy&index=2)

## Tools Used

-   ### Axios

    -   npm install axios

-   ### Material UI
    -   npm install --save @material-ui/core
    -   npm install --save @material-ui/icons
-   ### React Router
    -   npm install react-router-dom
    -   #### Documentation
    -   https://reactrouter.com/web/guides/quick-start
-   ### CSS Gradient Generator

    -   https://cssgradient.io/

-   ### Timeago.js

    -   npm install timeago.js
        -   https://timeago.org/

-   ### React Context API

    -   Context provides a way to pass data through the component tree without having to pass props down manually at every level.

    -   #### Documentation
        -   https://reactjs.org/docs/context.html

-   ### MongoDB (Backend)
    -   Set up MongoDB Cloud Cluster online
        -   https://cloud.mongodb.com
            -   For DB User and IP Address Config go to
                -   Network Access - Atlas - IP AcessList

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

-   ## Connecting to Node Rest API

    File: package.json

        "proxy": "http://localhost:8800/api"

-   ## Extras

-   Custom user posts only on User Profile page using javascript filter method, instead of targeting the Feed component

    -   https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples

-   ## Context
    File: context/AuthContext.js

INITIAL_STATE = {
user: null,
isFetching: false,
error: false
}

&#8595;

**ACTION 1**
LoginStart({mail:john@gmail.com, password: 54324})

&#8595;

**REDUCER**
&#8595; update context state

NEW_STATE = {
user: null,
isFetching: true,
error: false
}

&#8595;

**ACTION 2 (success)**
LoginSuccess({username:john, mail:john@gmail.com, profilePicture:image.png, coverPicture:cover.png, followers[], following[], isAdmin:false})

&#8595;

**REDUCER**

&#8595; update context state

NEW_STATE = {
user: {username: john, mail: john@gmail.com ...}
isFetching: false,
error: false
}
////////// OR

**ACTION 2 (failure)**
LoginFailure({error})

&#8595;

**REDUCER**

&#8595; update context state

NEW_STATE = {
user: null,
isFetching: false,
error: true
}
