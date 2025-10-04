import { useEffect, useState } from "react";
import { Link } from "react-router";

function Header() {
    
    const [serviceData, setServiceData] = useState([]);
    const [categoryData, setCategoryData] = useState();
    const [SubCategoryData, setSubCategoryData] = useState([]);

      const user = JSON.parse(localStorage.getItem("user"));  // usename show ke liya.


    useEffect(() => {
        serviceHandler();
        categoryHandler();
        // subCategoryHandler();
    },[]);

    const serviceHandler = async () => {
        let URL = "http://127.0.0.1:8000/api/home-data";
        let response = await fetch(URL);
        response = await response.json();
        setServiceData(response.service_data);
        // ya
        // setServiceData(response.service_data[0]);
    };

    const categoryHandler= async()=>{
      const url = "http://127.0.0.1:8000/api/categories";
      let response = await fetch(url);
      response= await response.json()
      setCategoryData(response);
    }

    const subCategoryHandler= async(catId)=>{
      const url = `http://127.0.0.1:8000/api/subCategories/${catId}`;
      let response = await fetch(url);
      response= await response.json()
    //   setSubCategoryData(response)
  // har category ke subcategory ko uski id ke andar store karna
  setSubCategoryData((prev) => ({ ...prev, [catId]: response }));
    }

    // console.log(SubCategoryData)
    


    return (
        <>
            {/* <!-- Topbar Start --> */}
            <div className="container-fluid bg-dark px-5 d-none d-lg-block">
                <div className="row gx-0">
                    <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center" style={{ height: "45px" }}>
                            <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2"></i>123 Street, New York, USA</small>
                            <small className="me-3 text-light"><i className="fa fa-phone-alt me-2"></i>+012 345 6789</small>
                            <small className="text-light"><i className="fa fa-envelope-open me-2"></i>info@example.com</small>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-inline-flex align-items-center" style={{ height: "45px" }}>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-twitter fw-normal"></i></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-instagram fw-normal"></i></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href=""><i className="fab fa-youtube fw-normal"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}


            {/* <!-- Navbar & Hero Start --> */}
            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <a href="" className="navbar-brand p-0">
                        <h1 className="text-primary m-0"><i className="fa fa-map-marker-alt me-3"></i>Tourist</h1>
                        {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <Link to={'/'} className="nav-item nav-link active">Home</Link>
                            <Link to={'/about'} className="nav-item nav-link">About</Link>
                            {/* <Link to={'/service'} className="nav-item nav-link">Services</Link> */}

                            {
                               categoryData && categoryData.map((cat)=>(
                                 <div className="nav-item dropdown" key={cat.id} onMouseEnter={() => subCategoryHandler(cat.id)} >
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">{cat.title}</a>

                                <div className="dropdown-menu m-0">
                                    {
                                     SubCategoryData[cat.id] && SubCategoryData[cat.id].map((subcat)=>(
                                        <div key={subcat.id}>
                                 <Link to={`category/${subcat.id}`} className="dropdown-item">{subcat.title}</Link>
                                 </div>

                                        ))
                                    }
                                </div>
                            </div>
                                ))
                            }
                          



                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Service</a>
                                <div className="dropdown-menu m-0">
                                    {
                                        serviceData.map((serv) => (
                                            <li key={serv.id}>
                                                <Link to={`/service/${serv.id}`} className="dropdown-item">
                                                    {serv.travel_name}
                                                </Link>
                                            </li>))
                                    }


                                </div>
                            </div>

                          
                            <Link to={'/contact'} className="nav-item nav-link">Contact</Link>
                        </div>
                {user ? (
                <Link to="/profile" className="btn btn-primary rounded-pill py-2 px-4">Hello {user.name}</Link>

      ) : (
        <Link to="/login" className="btn btn-primary rounded-pill py-2 px-4">Login</Link>
      )}                    </div>
                </nav>


            </div>
            {/* <!-- Navbar & Hero End --> */}
        </>
    )
}

export default Header;
