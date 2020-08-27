import { generateId } from "../utils.js"

export default class Blog {

  constructor({ title, content, timestamp, id }) {
    this.title = title
    this.content = content
    this.timestamp = timestamp || Date.now()
    this.id = id || generateId()
  }

  get Template() {
    return `
    <div class="card my-3">
    <h5 class="card-header">${this.title}</h5>
    <div class="card-body">
      <h5 class="card-title">${this.timestamp}</h5>
      <p class="card-text">${this.content}</p>
      <a href="#" class="btn btn-primary">Add Comment</a>
    </div>
  </div>
    `
  }
}
