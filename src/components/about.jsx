import { useState } from "react"; 
import { useEffect } from "react";
import Loader from "./loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function About(){
const [data,setdata]=useState();
const [loader,setLoader]=useState(false);

    useEffect(()=>{
        setLoader(true)
        aboutHandler()
    },[])

    const aboutHandler=async()=>{
        const URL = "http://127.0.0.1:8000/api/about-data";
        // console.log(URL)
        let response = await fetch(URL);
        response = await response.json();
                    // console.log(response);
        setdata(response)
            setLoader(false)
    }
            // console.log(data)


    return(
        <>
  <div className="container-fluid bg-primary py-5 mb-5 hero-header">
            <div className="container py-5">
                <div className="row justify-content-center py-5">
                    <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-3 text-white animated slideInDown">About Us</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>     


          {/* <!-- About Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            {
            !loader? data && data.ab_data && data.ab_data.map((abr) => (
                <div className="row g-5" key={abr.id}>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{minHeight:" 400px"}}>
                    {/* <div className="position-relative h-100">
                        <img className="img-fluid position-absolute w-100 h-100" src={`http://127.0.0.1:8000/img/${abr.image}`} alt="" style={{objectFit: "cover"}}/>
                    </div> */}

                      <Swiper
  modules={[Autoplay, Navigation, Pagination]}
  spaceBetween={24}
  slidesPerView={3}
  loop={true}
  autoplay={{ delay: 2000 }}
  navigation
  pagination={{ clickable: true }}
  breakpoints={{
    0: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    992: { slidesPerView: 1 },
  }}
  className="h-100"
>
  {abr?.multiple_image &&  
  // multipal image ka data json string ki form me tha isliya sahi karna ke liya json.parse use kiya.
    JSON.parse(abr.multiple_image).map((img, i) => (
      <SwiperSlide key={i}>
        <div className="position-relative h-100">
          <img
            className="img-fluid position-absolute w-100 h-100"
            src={`http://127.0.0.1:8000/img/${img}`}
            alt={`service-img-${i}`}
            style={{ objectFit: "cover" }}
          />
        </div>
      </SwiperSlide>
    ))}
</Swiper>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                    <h1 className="mb-4">Welcome to <span className="text-primary">about</span></h1>
                    <p className="mb-4">{abr.description}</p>
                    <div className="row gy-2 gx-4 mb-4">
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>First className Flights</p>
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
                </div>
                                    <p className="mb-4"  dangerouslySetInnerHTML={{ __html: abr?.description2 }}> 
                                        
                                     </p>

            </div>
                )):<Loader/>
            }
           
        </div>
    </div>
    {/* <!-- About End --> */}


          </>
    )
}
export default About;