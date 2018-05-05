
# Localhost Directories
A front end build for your localhost to make it look a little better than your default localhost, when you "Add New Directory" it will add the directory to your database, build a new folder in your server with the directory name that you gave it, and create the basic building blocks for a website (**index.html, CSS folder, JS folder, and pictures folder**), you can change the name of the directory and delete the directory.

# Setup
- **main.sql** will give you the basic building block for your database, import it to your database to be able to add your created projects and directories to that database
- make sure that you change **connect.inc.php** to meet your databases requests for username, password, ...etc.

# Extra notes
When you delete a folder this application wont delete the actual folder too, it will change the actual folders name to delete-(the directories id in the database)
