const { default: axios } = require("axios");
const Express = require("express");
const homeRouter = Express.Router();

homeRouter.get("", async (request, response) => {
  // Autocall a get request when a user visits:
  try {
    // Attempt to pull data from my blog
    const wordpressAPI = await axios.get(
      "https://ericdee.blog/?rest_route=/wp/v2/posts&_embed"
    );
    response.render("dashboard", { posts: wordpressAPI.data });
  } catch (error) {
    if (error.response) {
      response.render("dashboard", { posts: null });
      console.log(error.response.headers);
      console.log(error.response.status);
      console.log(error.response.data);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.error("An exceptional error occurred", error.message);
    }
  }
});

module.exports = homeRouter;
