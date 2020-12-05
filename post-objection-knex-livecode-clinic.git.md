# POST with Objection and Knex Clinic

Now that our database is set up and we can see all of our board games, let's add the functionality to submit new board games!

### Setup

We will work off of the completed code from `intro-objection-knex-livecode-clinic`, which already has the index and show pages built out.

The necessary React components are provided so we can focus on the back-end router responsible for receiving POST request for a new board game.

The new board game form is on its own page, so after the form is submitted we will have to `Redirect` the user 

### Goals

- Create a new router endpoint for `POST`ing new board games
- Successfully `Redirect` the user to the new board game show page after a form submission
