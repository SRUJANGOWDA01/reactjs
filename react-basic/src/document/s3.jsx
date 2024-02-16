import React, { Component} from "react"

class Spage3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            qnty : 1
        }
    }

    addQuantity(add) {
        console.log(`addQuantity=`,add)
        this.setState({
            qnty:this.state.qnty + 1
        })
    }

    removeQuantity(remove) {
        console.log(`removequantity=`,remove)
       if(this.state.qnty >=2) {
        this.setState({
            qnty: this.state.qnty-remove
        })
       }
           
    }


    render() {
        console.log('component rendered')
          return(
            <div display="flex">
                <hr/>
                
                <button onClick={() => this.removeQuantity(1)} > -1 </button>
                <h2>Quantity = {this.state.qnty}</h2>
                <button onClick={() => this.addQuantity(1)} >+1 </button>
            </div>
          )
    }
}

export default Spage3