// Create a web server
// The web server should respond to requests to /comments with a web page that lists the comments people have left.
// It should have a form on this page that lets people leave new comments: it has fields for author, email, and comment itself.
// The web server should respond to POST requests to /comments by storing the comment object in a global variable.
// It should then redirect back to /comments.
// Test it all by opening several tabs to http://localhost:8000/comments and leaving comments in each of them.
// Notice how they all show up when you go back to http://localhost:8000/comments.
// To test the POST functionality, you can use curl (from the command line) or Poster (a Firefox plug-in).
// This is a rather silly way to store comments, since comments will be lost when the server shuts down, but it'll do for now.
// When you're done, run npm install express@3 jade body-parser in the directory where you put your code to install the dependencies.
// You can then run the program with the command node server.js.
// Note that this is the old version of Express, which is slightly different from the current version.
// If you want to use the current version, you'll have to look up the documentation.
// If you get stuck, the code for this exercise is in the express directory in the source code for this book.
// It is also available online ata asfasf