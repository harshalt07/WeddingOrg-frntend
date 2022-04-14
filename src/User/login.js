import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

class Login extends Component {
 constructor(props){
     super(props)
     
 }
    render() {
        return (
            <section className="vh-100" >
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10">
                  <div className="card">
                    <div className="row g-0">
                      <div className="col-md-6 col-lg-5 d-none d-md-block">
                       <center>
                        <img align="middle" height="100px"
                            //src={SigninImg}
                            src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                          //src="https://thumbs.dreamstime.com/b/indian-food-curry-butter-chicken-palak-paneer-chiken-tikka-biryani-vegetable-curry-papad-dal-palak-sabji-jira-alu-rice-138550014.jpg"
                          alt="login form"
                          className="img-fluid"
                          width="600px" height="2000px"
                        />
                        </center>
                      </div>
                      <div  className="col-md-6 col-lg-7 d-flex align-items-center">
                        <div className="card-body p-4 p-lg-5 text-black">
          
                          <form>
                            <h3 className="fw-normal mb-3 pb-3"><b>USER SIGN IN . . .</b> </h3>
          
                            <div className="form-outline mb-4">
                              <input className="email" id="form2Example17" class="form-control form-control-lg" 
                              //onChange={(e)=>{
                               // setEmail(e.target.value);}} 
                               />
                              <label className="form-label" for="form2Example17" 
                                      >Email address</label>
                            </div>
          
                            <div className="form-outline mb-4">
                              <input  type="password" id="form2Example27" class="form-control form-control-lg" 
                               //onChange={(e)=>{
                               //setPassword(e.target.value);
                               // }}
                                />
                              <label className="form-label" for="form2Example27" 
                              >Password</label>
                            </div>
          
                            <div className="pt-1 mb-4">
                              <button 
                              //onClick={signinUser} 
                              
                            className="btn btn-success" type="button">Login</button>
                            </div>
          
                            <a className="small text-muted" href="forgotPassword">Forgot password?</a>
                            <Link to="/signup" >
                          <button type="button" className="btn btn-success btn-lg ms-2" >Register here</button>
                          </Link>
                            {/* <p className="mb-5 pb-lg-2" >Don't have an account? <a href="/signup">Register here</a></p> */}
                            
                          </form>
          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Login;