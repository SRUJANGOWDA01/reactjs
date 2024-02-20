import React,{ Component} from "react"

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: false
        }
    }

    render() {
        return (
            <div className="container">
                  <h1>Counter</h1>

                  <div className="first">
                    {
                        this.state.view ? (
                            <h1>Welcome to Lifecycle</h1>
                        ) : (
                            <div>
                                <h1> Number = { this.props.num } </h1>
                                <h2 className="info">Need More Counts</h2>
                                <button className="btn-success">Add+1</button>
                            </div>
                        )
                    }
                  </div>
            </div>
        )
    }
}

export default Counter