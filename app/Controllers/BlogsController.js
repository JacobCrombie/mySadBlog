import blogsSERVICE from "../Services/BlogsService.js";
import STORE from "../store.js";

function _drawBlog(){
let template = ""
STORE.State.Blogs.forEach(b=> template += b.Template)
document.getElementById("blogzzz").innerHTML = template
}

function _drawForm(){
  let template = `
  <div class="card my-3">
  <h5 class="card-header">new blog</h5>
  <div class="card-body">
      <form class="form-group" onsubmit="app.blogsController.postBlog(event)">
          <label for="title">Title</label>
          <input type="text" class="form-control" name="title" id="title" aria-describedby="helpId"
              placeholder="Title of post.....">
          <div class="">
              <label for="content">Content</label>
              <textarea class="form-control" id="content" name="name" rows="3"></textarea>
          </div>
          <button class="btn btn-warning" type="submit">Post Blog</button>
      </form>
  </div>
</div>
  `
  document.getElementById("newblog").innerHTML = template
}

export default class BlogsController{

  constructor(){
    console.log("test");
  _drawBlog()
  _drawForm()
  }

  addComment(event, blogid){
    event.preventDefault()
    let form = event.target
    let newComment = form.comment.value

    blogsSERVICE.addComment(newComment, blogid)
    _drawBlog()
  }
  postBlog(event){
event.preventDefault();
let form = event.target
let newPost = {
  title: form.title.value,
  content: form.content.value
}
blogsSERVICE.postBlog(newPost)
_drawBlog()
_drawForm()
  }
}