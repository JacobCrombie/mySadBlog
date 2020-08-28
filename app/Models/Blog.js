import { generateId } from "../utils.js"

export default class Blog {

  constructor({ title, content, timestamp, comments, id }) {
    this.title = title
    this.content = content
    this.timestamp = timestamp || Date.now()
    this.id = id || generateId()
    this.comments = comments || []
  }

  get Template() {
    return `
  <div class="card my-3 p-2">
    <div class="card-header d-flex flex-column">
    <i class="fa fa-trash align-self-end" onclick="app.blogsController.removeBlog('${this.id}')"></i>
    <h5 class="pabsolute">${this.title}</h5>
    </div>

    <div class="card-body">
      <h5 class="card-title">${this.timestamp}</h5>
      <p class="card-text">${this.content}</p>
    </div>
    <form class="form-inline d-flex flex-direction-row" onsubmit="app.blogsController.addComment(event, '${this.id}')">
    <div class="form-group">
        <input type="text" name="comment" id="comment" class="form-control" placeholder="comment" aria-describedby="helpId">
        <button class="btn-success" type= "submit">Add Comment</button>
    </div>
    </form>
    <div class="d-flex flex-direction-row col-12 flex-wrap">${this.commentTemplate}</div>
  </div>
    `
  }

  get commentTemplate() {
    let template = ""
    this.comments.forEach(c => {
      template += `<div class="col-3 my-1">
      <div class="card">
        <div class="card-body">
          <p class="card-text">${c}</p>
          <i class="fa fa-trash align-self-end" onclick="app.blogsController.removeComment('${this.id}', '${c}')"></i>
        </div>
      </div>
    </div>`
    })
    return template
  }
}
