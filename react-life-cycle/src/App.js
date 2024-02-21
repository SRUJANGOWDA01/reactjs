import React, {Component} from "react";
import  ReactDOM  from "react-dom";
import './App.css'
import Counter from "./component/counter";

class App extends Component {
  constructor(props) {
    super(props)
  }

  //mounting component
  mount() {
    ReactDOM.render(
      <React.StrictMode>
        <Counter num={0}/>
      </React.StrictMode>,
      document.getElementById('block')
    )
  }

  //unmounting component
  remove() {
    ReactDOM.unmountComponentAtNode(document.getElementById('block'))
    console.log(`component unmounted`)
  }

  render(){
    return(
      <div className="container">
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

/*  OUTPUT

  <  for mounting  >

get derived state from props
props = {num: 0}
state = {view: false}
component rendered
component did mount 

< updating >
 get derived state from props
 props = {num: 10}
 state = {view: true}
 should component update or not
 newProps = {num: 10}
 newState = {view: true}
 component rendered
 get snapshot before update
oldProps = {num: 10}
oldState = {view: false}
component did update
oldProps = {num: 10}
oldState = {view: false}


< unmounting>
component unmounted
*/
