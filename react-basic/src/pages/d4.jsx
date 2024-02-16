import React from 'react'

function Doc4(props) {
  return (
    <div>
      <h1>Default Props in FUnctional Component</h1>
      <h3> a = { props.a }</h3>
      <h3> b = { props.b }</h3>
      <h3> a * b = { props.a * props.b }</h3>
      <h2> { props.view ? "Say true": "Say False"} </h2>
        <hr/>
        <h2> user id = { props.user.id}</h2>
        <h2> user name = { props.user.name}</h2>
        <h2> user email = { props.user['email']}</h2>
        <h2> user gender = { props.user['gender']}</h2>
        <hr/>

        <div>
            {
                props.emp.map((item,index) => {
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

  //default props
Doc4.defaultProps = {
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


export default Doc4
