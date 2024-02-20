import React, {Component} from "react";
import  ReactDOM  from "react-dom/client";
import './App.css'
import Counter from "./component/counter";

class App extends Component {
  constructor(props) {
    super(props)
  }

  //mounting component
  mount() {
    let root = ReactDOM.createRoot(document.getElementById('block'))
    console.log(`component mounted`)
    root.render(
      <React.StrictMode>
        <Counter num={0}/>
      </React.StrictMode>
    )

  }

  //unmounting component
  remove() {
    let root = ReactDOM.createRoot(document.getElementById('block'))
    console.log(`component unmounted`)
    root.unmount()/* unmount() -> built in method */
  }

  render(){
    return(
      <div>
        <h1>React Lifecycle</h1>
        <div className="buttons">
          <button onClick={() => this.mount()} className="btn-success">Mount</button>
          <button onClick={() => this.remove()} className="btn-warning">UnMount</button>
        </div>

        <section id="block"></section>
      </div>
    )
  }
}
export default App;
