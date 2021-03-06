import store from "../store.js";
import Blog from "../Models/Blog.js";
import STORE from "../store.js";
class BlogsService{
  removeComment(commentId, commentName) {
    let blog = STORE.State.Blogs.find(b => b.id == commentId)
    let commentIndex = blog.comments.findIndex(c => c == commentName)
    blog.comments.splice(commentIndex, 1)
  }

  removeBlog(id) {
    STORE.State.Blogs = STORE.State.Blogs.filter(p => p.id != id)
  }
  addComment(newComment, blogid) {
    let blog = STORE.State.Blogs.find(c=> c.id == blogid)
    blog.comments.push(newComment)
  }

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