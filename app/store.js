import Blog from "./Models/Blog.js";


let _state = {
  /** @type {Blog[]} */
  Blogs: [
    new Blog({title: "Saddest Day Yet", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis sint ipsam vel itaque soluta ducimus nisi, officiis maxime ab aspernatur sit, optio, expedita nobis modi iste magnam! Deserunt, illum qui?"}),
    new Blog({title: "Saddest Day Yet", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis sint ipsam vel itaque soluta ducimus nisi, officiis maxime ab aspernatur sit, optio, expedita nobis modi iste magnam! Deserunt, illum qui?"})
  ]
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
