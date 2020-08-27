import BlogsController from "./Controllers/BlogsController.js";

class App {
  blogsController = new BlogsController
}

window["app"] = new App();
