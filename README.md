# Front-end React Social Media app

-   View the backend [here](https://github.com/kawgh1/mern-social-media-rest-api)
-   Based on project by [LamaDev](https://www.youtube.com/watch?v=zM93yZ_8SvE&list=PLj-4DlPRT48lXaz5YLvbLC38m25W9Kmqy&index=2)

## Tools Used

-   ### Material UI
    -   npm install --save @material-ui/core
    -   npm install --save @material-ui/icons

## Things I added

-   All mobile styling
-   mobile navbar dropdown menu
    -   https://ibaslogic.com/how-to-add-hamburger-menu-in-react/
-   Custom scrollbars across all browsers
    -   /** COMPONENT SCROLL BAR **/

        /_ Only Chrome _/
        .sidebar::-webkit-scrollbar {
        width: 5px;
        }
        .sidebar::-webkit-scrollbar-thumb {
        background-color: rgb(179, 179, 179);
        background-clip: padding-box;
        border: 1px solid #8ea5b5;
        }
        .sidebar::-webkit-scrollbar-track {
        background-color: #f1f1f1;
        }
        ::-webkit-scrollbar-button {
        background-color: #8ea5b5;
        }
        /_ Only IE _/
        .sidebar {
        scrollbar-face-color: #f1f1f1;
        scrollbar-shadow-color: rgb(179, 179, 179);
        scrollbar-highlight-color: #8ea5b5;
        }
        /_ Only FireFox _/
        .sidebar {
        scrollbar-color: #d8d8d8 rgb(179, 179, 179);
        scrollbar-width: thin;
        scrollbar-width: 5px;
        }
        /_ View Scrollbar _/
        .sidebar {
        overflow-y: scroll;
        overflow-x: hidden;
        scrollbar-width: thin;
        scrollbar-width: 5px;
        }
