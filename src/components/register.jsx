import {  useState } from "react";
import { Link, useNavigate,  } from "react-router";

function Register(){
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [password_confirmation,setPassword_confirmation]=useState('')

  const navigate = useNavigate();


  const registerHandler = async (event) => {
  event.preventDefault();
//  console.log(name, email, password, password_confirmation);

  const url = "http://127.0.0.1:8000/api/register";

  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",  // 👈 ye jaruri hai
      "Accept": "application/json",        // 👈 ye bhi Laravel ke liye helpful hai
    },
    body: JSON.stringify({ name, email, password, password_confirmation }),
  });

  response = await response.json();

  if (response.status) {
    alert("Registered successfully ✅");
    navigate('/login');
     
  } else {
   // console.log(response.errors); // 👈 errors console me dekh lo
    alert("Error: " + JSON.stringify(response.errors));
  }
};


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
                                            <h4 className="text-center">Register Here</h4>
                                        </div>
                                    </div>
                                </div>
                                <form onSubmit={registerHandler}>
                                    <div className="row gy-3 overflow-hidden">
                                             <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control " value={name}  onChange={(event)=>setName(event.target.value)}  placeholder="Name" required />
                                                <label  className="form-label">Name</label>
                                               
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input type="email" className="form-control" value={email}  onChange={(event)=>setEmail(event.target.value)} placeholder="name@example.com" required />
                                                <label className="form-label">Email</label>
                                                 
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input type="password" className="form-control " value={password}  onChange={(event)=>setPassword(event.target.value)} placeholder="Password" required />
                                                <label  className="form-label">Password</label>
                                                 
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input type="password" className="form-control" value={password_confirmation}  onChange={(event)=>setPassword_confirmation(event.target.value)} placeholder="Confirm Password" required />
                                                <label  className="form-label">Confirm Password</label>
                                            
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="d-grid">
                                                <button className="btn bsb-btn-xl btn-primary py-3" type="submit">Register Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="row">
                                    <div className="col-12">
                                        <hr className="mt-5 mb-4 border-secondary-subtle"/>
                                        <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-center">
                                            <Link to={'/login'}  className="link-secondary text-decoration-none">Click here to login</Link>
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
}export default Register;