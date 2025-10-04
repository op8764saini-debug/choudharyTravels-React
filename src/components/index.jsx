import { useActionState, useEffect, useState } from "react";
import Testimonial from "./testimonial";
import { Link, useNavigate } from "react-router";
import Loader from "./loader";




function Index() {
    const [aboutData, setAboutData] = useState()
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // indexFormHandler()
        setLoader(true)
        aboutHandler();
    }, []);

    const aboutHandler = async () => {
        let URL = "http://127.0.0.1:8000/api/home-data";
        let Response = await fetch(URL);
        Response = await Response.json();
        //   console.log(Response); 
        setAboutData(Response);

        setLoader(false)
    };



    // console.log(aboutData)

    const servicePage = (id) => {
        //  console.log(id)
        navigate(`service/${id}`)
    }


//         const indexFormHandler=async()=>{
//    const URL = "http://127.0.0.1:8000/api/form-submit";
//    let Response = await fetch(URL,{
//         method:"POST",
//         body:JSON.stringify({name,email,datetime,mobile,persons,categories,description})
//    });
//    Response= await Response.json()
//    console.log(Response)
//     }
const handleFormSubmit = async (previousData, formData) => {
  let name = formData.get("name");
  let email = formData.get("email");
  let datetime = formData.get("datetime");
  let mobile = formData.get("mobile");
  let persons = formData.get("persons");
  let categories = formData.get("categories");
  let description = formData.get("description");

  const URL = "http://127.0.0.1:8000/api/form-submit";

    let Response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // ✅ required
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        datetime,
        mobile, 
        persons,
        categories,
        description,
      }),
    });

    Response = await Response.json();
    // console.log(Response);

    if (name && email && datetime && mobile && persons && categories ) {
      return { message: "✅ Data Submitted Successfully" };
    } else {
      return { error: "❌ Failed to Submit. Enter Proper Data" };
    }

}




const [data,action,pending]=useActionState(handleFormSubmit,undefined);
    return (
        <>

            <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row justify-content-center py-5">
                        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-3 text-white mb-3 animated slideInDown">Enjoy Your Vacation With Us</h1>
                            <p className="fs-4 text-white mb-4 animated slideInDown">Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit</p>
                            <div className="position-relative w-75 mx-auto animated slideInDown">
                                <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Thailand" />
                                <button type="button" className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2" style={{ marginTop: "7px" }}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    {!loader ? aboutData && aboutData.ab_data && aboutData.ab_data.map((data) => (
                        <div className="row g-5" key={data.id}>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: "400px" }}>
                                <div className="position-relative h-100">
                                    <img
                                        className="img-fluid position-absolute w-100 h-100"
                                        src={`http://127.0.0.1:8000/img/${data.image}`}
                                        alt=""
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                                <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                                <h1 className="mb-4">
                                    Welcome to <span className="text-primary">{data.title}</span>
                                </h1>
                                <p className="mb-4">{data.short_description}</p>
                                <div className="row gy-2 gx-4 mb-4">
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>First Class Flights</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Handpicked Hotels</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>5 Star Accommodations</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Latest Model Vehicles</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>150 Premium City Tours</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>24/7 Service</p>
                                    </div>
                                </div>
                                {/* <a class="btn btn-primary py-3 px-5 mt-2" href="">Read More</a> */}
                                <Link to={'/about'} className="btn btn-primary py-3 px-5 mt-2">Read More</Link>
                            </div>
                        </div>
                    ))
                        : <Loader />
                    }
                </div>
            </div>
            {/* <!-- About End -->       */}



            {/* <!-- Service Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Services</h6>
                        <h1 className="mb-5">Our Services</h1>
                    </div>
                    <div className="row g-4">
                        {
                            // 
                            !loader ? aboutData && aboutData.service_data && aboutData.service_data.map((serdata) => (
                                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s" key={serdata.id}>
                                    <div className="service-item rounded pt-3">
                                        {/* <i className="fa fa-3x fa-globe text-primary mb-4"></i> */}
                                        <img src={`http://127.0.0.1:8000/img/${serdata.image}`} alt="img" className="img-fluid" />
                                        <div className="p-4">

                                            <h5>{serdata.travel_name}</h5>
                                            <p>{serdata.short_description}</p>
                                        </div>
                                        <a className="btn btn-primary  py-2 px-4 w-100" onClick={() => servicePage(serdata.id)}  >Read More</a>

                                    </div>
                                </div>

                            )) : <Loader />
                        }


                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}


            {/* <!-- Destination Start -->*/}
            <div className="container-xxl py-5 destination">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Destination</h6>
                        <h1 className="mb-5">Popular Destination</h1>
                    </div>
                    <div className="row g-3">
                        <div className="col-lg-7 col-md-6">
                            <div className="row g-3">
                                <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                                    <a className="position-relative d-block overflow-hidden" href="">
                                        <img className="img-fluid" src="img/destination-1.jpg" alt="" />
                                        <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">30% OFF</div>
                                        <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Thailand</div>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                                    <a className="position-relative d-block overflow-hidden" href="">
                                        <img className="img-fluid" src="img/destination-2.jpg" alt="" />
                                        <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">25% OFF</div>
                                        <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Malaysia</div>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                                    <a className="position-relative d-block overflow-hidden" href="">
                                        <img className="img-fluid" src="img/destination-3.jpg" alt="" />
                                        <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">35% OFF</div>
                                        <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Australia</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{ minHeight: "350px" }}>
                            <a className="position-relative d-block h-100 overflow-hidden" href="">
                                <img className="img-fluid position-absolute w-100 h-100" src="img/destination-4.jpg" alt="" style={{ objectFit: "cover" }} />
                                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">20% OFF</div>
                                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Indonesia</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Destination Start -->*/}


            {/*  <!-- Package Start -->*/}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Packages</h6>
                        <h1 className="mb-5">hire bus Rental/Tempo Traveler & Car Rental for Weddings</h1>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {                         

                             aboutData && aboutData.pk_data && aboutData.pk_data.map((pkd)=>(

                               <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={pkd.id}> 
                            <div className="package-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={`http://127.0.0.1:8000/img/${pkd.image}`} alt="" />
                                </div>
                                {/* <div className="d-flex border-bottom">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Thailand</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>3 days</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>2 Person</small>
                                </div> */}
                                <div className="text-center p-4">
                                    <h3 className="mb-0">{pkd.car_name}</h3>
                                    {/* <div className="mb-3">
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                    </div> */}
                                    <p>{pkd.description}</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                        <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                         ))
                        }
                     

                    </div>
                </div>
            </div>
            {/*  <!-- Package End -->*/}


            {/*  <!-- Booking Start -->*/}
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="booking p-5">
                        <div className="row g-5 align-items-center">
                            <div className="col-md-6 text-white">
                                <h6 className="text-white text-uppercase">Booking</h6>
                                <h1 className="text-white mb-4">Online Booking</h1>
                                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <a className="btn btn-outline-light py-3 px-5 mt-2" href="">Read More</a>
                            </div>
                            <div className="col-md-6">
                                <h1 className="text-white mb-4">Book A Tour</h1>
                                <form action={action}>  
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control bg-transparent" name="name" placeholder="Your Name"  />
                                                <label >Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control bg-transparent" name="email" placeholder="Your Email" required />
                                                <label >Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating date" id="date3" data-target-input="nearest">
                                                <input type="text" className="form-control bg-transparent datetimepicker-input" name="datetime"  placeholder="Date" data-target="#date3" data-toggle="datetimepicker" required />
                                                <label >Date</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select className="form-select bg-transparent" name="persons" required >
                                                    <option value="Person 1">Person 1</option>
                                                    <option value="Person 2">Person 2</option>
                                                    <option value="Person 3">Person 3</option>
                                                </select>
                                                <label >Persons</label>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-floating" >
                                                <input type="number" className="form-control bg-transparent" name="mobile" placeholder="mobile" required />
                                                <label >Mobile</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select className="form-select bg-transparent" name="categories" required >
                                                    <option value="Category 1">Category 1</option>
                                                    <option value="Category 2">Category 2</option>
                                                    <option value="Category 3">Category 3</option>
                                                </select>
                                                <label >Categories</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control bg-transparent" name="description" placeholder="Special Request" style={{ height: "100px" }}></textarea>
                                                <label >Special Request</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button disabled={data?.error} className="btn btn-outline-light w-100 py-3" type="submit">Book Now</button>
                                        </div>
                                    </div>
                                </form>

                                  {/* //3 success/error message show */}

                {
                    data?.error && <span style={{color:"red"}}>{data?.error}</span>
                }

                {
                    data?.message && <span style={{color:"green"}}>{data?.message}</span>
                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  <!-- Booking end -->*/}




            {/*   <!-- Process Start -->*/}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Process</h6>
                        <h1 className="mb-5">3 Easy Steps</h1>
                    </div>
                    <div className="row gy-5 gx-4 justify-content-center">
                        <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="position-relative border border-primary pt-5 pb-4 px-4">
                                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: "100px", height: "100px" }}>
                                    <i className="fa fa-globe fa-3x text-white"></i>
                                </div>
                                <h5 className="mt-4">Choose A Destination</h5>

                                <hr className="w-25 mx-auto bg-primary mb-1" />
                                <hr className="w-50 mx-auto bg-primary mt-0" />
                                <p className="mb-0">Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="position-relative border border-primary pt-5 pb-4 px-4">
                                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: "100px", height: "100px" }}>
                                    <i className="fa fa-dollar-sign fa-3x text-white"></i>
                                </div>
                                <h5 className="mt-4">Pay Online</h5>
                                <hr className="w-25 mx-auto bg-primary mb-1" />
                                <hr className="w-50 mx-auto bg-primary mt-0" />
                                <p className="mb-0">Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="position-relative border border-primary pt-5 pb-4 px-4">
                                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: "100px", height: "100px" }}>
                                    <i className="fa fa-plane fa-3x text-white"></i>
                                </div>
                                <h5 className="mt-4">Fly Today</h5>
                                <hr className="w-25 mx-auto bg-primary mb-1" />
                                <hr className="w-50 mx-auto bg-primary mt-0" />
                                <p className="mb-0">Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Process Start */}


        


            <Testimonial />
        </>
    )
} export default Index;  