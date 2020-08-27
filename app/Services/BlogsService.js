import store from "../store.js";
import Blog from "../Models/Blog.js";
import STORE from "../store.js";
class BlogsService{
  postBlog(newPost) {
    let newBlog = new Blog(newPost)
    STORE.State.Blogs.push(newBlog)
  }
  
  
  
  
  constructor(){
    console.log("service check");
  }
}

const SERVICE = new BlogsService();

export default SERVICE