import { useEffect } from "react";
import { useNavigate } from "react-router";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    logouthandler();
  }, []);

  const logouthandler = async () => {
    const token = localStorage.getItem("token");
    const url = "http://127.0.0.1:8000/api/logout"
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Accept": "application/json",
        },
      });

   const data =  await response.json();
    

    // Local storage clear
  if(data.status){
 localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect to login
    navigate("/login");
  }else {
        console.error("Logout failed:", data.message);
      }
   
  };

  return <div>Logging out...</div>;
}

export default Logout;
