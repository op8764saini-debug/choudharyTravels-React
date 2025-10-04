import { useState } from "react";
import { Link, useNavigate } from "react-router";


function Login(){

    const [email,setEmail]=useState('')
const [password,setpassword]=useState('')
const [message,setMessage]=useState('')

const navigate = useNavigate()

const loginhandler=async(event)=>{
    event.preventDefault();
console.log(email,password);

const url = "http://127.0.0.1:8000/api/login";
let response =await fetch(url,{
    method:"post",
     headers: {
      "Content-Type": "application/json",
            "Accept": "application/json",      
    },
    body:JSON.stringify({email,password})
})

let data = await response.json();

   if (data.status) {
      setMessage("Login successful ✅");
      localStorage.setItem("token", data.token); // token store karo
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate('/profile')
    } else {
      setMessage(data.message || JSON.stringify(data.errors));
    }
 
}
    return(
        <div className="bg-light">
               <section className=" p-3 p-md-4 p-xl-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
                        <div className="card border border-light-subtle rounded-4">
                            <div className="card-body p-3 p-md-4 p-xl-5">
                                <div className="row">
                                    <div className="col-12">
                                       
                                        <div className="mb-5">
                                            <h4 className="text-center">Login Here</h4>
                                        </div>
                                    </div>
                                </div>
                                <h4>{message}</h4>
                                <form onSubmit={loginhandler} >
                                    <div className="row gy-3 overflow-hidden">
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                    <input type="email" className="form-control " value={email} onChange={(event)=>setEmail(event.target.value)}  placeholder="name@example.com"/>
                                                <label  className="form-label">Email</label>

                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                            <input type="password" className="form-control" value={password} onChange={(event)=>setpassword(event.target.value)}  placeholder="Password"/>
                                                <label className="form-label">Password</label>  
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="d-grid">
                                                <button className="btn bsb-btn-xl btn-primary py-3" type="submit">Log in now</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="row">
                                    <div className="col-12">
                                        <hr className="mt-5 mb-4 border-secondary-subtle"/>
                                        <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-center">
                                            <Link to={'/register'} className="link-secondary text-decoration-none">Create new account</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}export default Login;