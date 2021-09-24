// Assign server port to 5000
const port = 5000;

// Assign external dependancy to project
const Express = require("express");
const Axios = require("axios");

// Assign a pointer to the node access dependancies/methods
const expressApp = Express();

// Routes instantiation
const homeRouter = require(__dirname + "/src/routes/homeroutes");

// Set an express static library location to point any /css references at the project root (__dirname) + its path
expressApp.use(Express.static(__dirname + "/public"));
expressApp.use("/css", Express.static(__dirname + "/public/css"));
expressApp.use("/img", Express.static(__dirname + "/public/img"));
expressApp.use("/js", Express.static(__dirname + "/public/js"));

// Templating Engine
expressApp.set("views", __dirname + "/src/views");
expressApp.set("view engine", "ejs");

expressApp.use("/", homeRouter);

// Listen on port 5000
expressApp.listen(port, () => console.log(`Listening on port ${port}`));
