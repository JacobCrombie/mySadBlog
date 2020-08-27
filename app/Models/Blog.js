export default class Blog {

  constructor({ title, content, timestamp }) {
    this.title = title
    this.content = content
    this.timestamp = timestamp || Date.now()
  }

  get Template() {
    return `
    <div class="card">
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
