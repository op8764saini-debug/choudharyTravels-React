import { useEffect, useState } from "react"
import Logout from "./logout";
import { Link } from "react-router";

function Profile(){
    const [user,setUser]=useState(null);
    const [message,setMessage]=useState('')


      useEffect(()=>{
        fetchProfile()
      },[])
    const fetchProfile=async()=>{
        const token = localStorage.getItem("token"); // ya token jab mene login karaaya tha tab localstorage me save kiya tha.
        const url = "http://127.0.0.1:8000/api/profile"
        const response = await fetch(url,{
            headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
          },
        })
        const data = await response.json();
        if(data.status){
            setUser(data.user)
        }else{
      setMessage("Unauthorized");

        }

    }

    // console.log(data)
    return(
        <>
           <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row justify-content-center py-5">
                        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-3 text-white mb-3 animated slideInDown">Profile Page</h1>
                            {
                              user?(

                            
                            <p className="fs-4 text-white mb-4 animated slideInDown">
                              <strong>Name:</strong> {user.name} <br/>
                           <strong>Email:</strong> {user.email} <br/>
                                 <button type="button" className="btn btn-primary rounded-pill py-2 px-4  me-2 " style={{ marginTop: "7px" }}>
                                  <Link className="text-light" to={'/logout'}>Logout</Link>
                                  
                                 </button>

                            </p>
                              ):(
        <p style={{ color: "red" }}>{message}</p>

                              )
                            }

                        </div>
                    </div>
                </div>
            </div>
    </>
    )
}export default Profile