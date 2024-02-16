import React, { useState } from "react";

function Screen6b(props) {
   const [tog,setTog] = useState(1)

    toggle(){
        setTog({
            view: this.state.view = false
        })
    }

    ontoggle(){
        this.setState({
            view: this.state.view = true
        })
    }

  
        return(
            <div>
                <h1>Modify the view using State</h1>
                {
                    this.state.view ?(
                        <div style={{alignItems:'center '}}>
                            <h1 style={{textAlign:'center'}}>Login window</h1>
                            <form action="" style={{ display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',border:'1px solid', padding:'30px', width:'800px',marginLeft:'300px' }} >
                                <label for="" style={{fontSize:'2rem'}}>Username</label>
                                <input type="text" name="uname" id="uname"  style={{ padding:'10px', width:'50%'}}/><br />
                                <label htmlFor="" style={{fontSize:'2rem'}}>Password</label>
                                <input type="password" name="pass" id="pass"  style={{ padding:'10px', width:'50%'}}/><br />
                                <button /* onClick={ () => this.toggle()} */ style={{backgroundColor:'red',padding:'20px', width:'100px',fontSize:'1.5rem'}}>Login</button>
                            </form>
                            <h1 style={{textAlign:'center'}}>New User? <button onClick={ () => this.toggle()}  href="" style={{textDecoration:'none'}}>Register here...</button></h1>
                            {/* <h1 style={{textAlign:'center'}}>New User?  <a onClick={ () => this.toggle()}  href="" style={{textDecoration:'none'}}>Register here...</a></h1> */}


                       </div>
                    ) : (
                        <div style={{alignItems:'center '}}>
                            <h1 style={{textAlign:'center'}}>Register window</h1>
                            <form action="" style={{ display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',border:'1px solid', padding:'30px', width:'800px',marginLeft:'300px' }} >
                                <label htmlFor="" style={{fontSize:'2rem'}}>Name</label>
                                <input type="text" name="name" id="name"  style={{ padding:'10px', width:'50%'}}/><br />
                                <label htmlFor="" style={{fontSize:'2rem'}}>Username</label>
                                <input type="text" name="uname" id="uname" style={{ padding:'10px', width:'50%'}} /><br />
                                <label htmlFor="" style={{fontSize:'2rem'}}>Password</label>
                                <input type="password" name="pass" id="pass"  style={{ padding:'10px', width:'50%'}}/><br />
                                <button /* onClick={ () => this.ontoggle()} */ style={{backgroundColor:'red',padding:'20px', width:'150px',fontSize:'1.5rem'}}>Register</button>
                               
                            </form>
                            <h1 style={{textAlign:'center`'}}>Already registered <button onClick={ () => this.ontoggle()} href="" style={{textDecoration:'none'}}>Login here...</button></h1>
                            {/* <h1 style={{textAlign:'center`'}}>Already registered <a onClick={ () => this.ontoggle()} href="" style={{textDecoration:'none'}}>Login here...</a></h1> */}

                        </div>
                    )
                }
            </div>
            
        )
    }



export default Screen6b

