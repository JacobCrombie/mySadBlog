import Blog from "./Models/Blog.js";


let _state = {
  activeValue: new Blog(),
  /** @type {Blog[]} */
  Blogs: []
};

class Store {
  constructor(){
    console.log("store check");
  }
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
