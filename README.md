You will be developing the HTML/CSS/JS front-end to support a pre-defined Rails API backend. (This repo provides you with a starter back end to work with.) The domain model consists of Users and Notes. Each user has many notes.
The Frontend and Backend will live in two separate repositories. All interactions between the client and the server should be handled asynchronously (Ajax / fetch).
The application should support:
Listing all of a user's notes on a sidebar --> For now, only create one user. There will be no log in.
When a user clicks on a note "preview" in the sidebar, the full note body and any other details of the currently selected note should show on the page.
Allow users to create, edit and delete notes.
Feel free to add on your own features if you have built all of the above! Some ideas: You could add filter or search functionality, multiple users, or support for rich format (bold, italic, etc) when creating a note.
You may not use authentication or authorization. This means no user log in. We'll look at patterns for dealing with client-side auth later in the semester, so you'll have plenty of time to deal with this case.
