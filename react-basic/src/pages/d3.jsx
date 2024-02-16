import React, { Component } from 'react'

 class Doc3 extends Component {
    constructor(props) {
        super(props)
    }


  render() {
    return (
      <div>
        <h1> Default Props </h1>
        <h2> product = { this.props.a * this.props.b }.</h2>
        <h2>{ this.props.view ? "Say true": "Say False"}</h2>
        <hr/>
        <h2> user id = { this.props.user.id}</h2>
        <h2> user name = { this.props.user.name}</h2>
        <h2> user email = { this.props.user['email']}</h2>
        <h2> user gender = { this.props.user['gender']}</h2>
        <hr/>

        <div>
            {
                this.props.emp.map((item,index) => {
                    return (
                        <p key={index}>{ item }</p>
                    )
                })
            }
            <hr/>
        </div>
      </div>
    )
  }
}

//default props
Doc3.defaultProps = {
    a: 232,
    b: 434.454,
    view: false,
    emp: ['john', 'david','adam'],
    user: {
        id: 12,
        name: "mohit",
        email: "mohit@gmail.com",
        gender: "male"
    }
}

export default Doc3
