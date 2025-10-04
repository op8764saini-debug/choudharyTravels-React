import { useParams } from "react-router";
import Testimonial from "./testimonial";
import { useEffect, useState } from "react";
import Loader from "./loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


function Service() {
const [data,setdata]=useState();
const [loader,setLoader]=useState(false);
const {id} =useParams();


useEffect(()=>{ 
    setLoader(true)
    getServiceData()
},[id])

const getServiceData=async()=>{
    const url = "http://127.0.0.1:8000/api/services/" + id;
    // console.log(url);
    let result = await fetch(url);
    result = await result.json();
    // console.log(result)
    setdata(result) 

    setLoader(false)
}
    // console.log(data)

  
  return (
    <>
    {
    !loader  && data ? 
    <>
       <div className="container-fluid bg-primary py-5 mb-5 hero-header" style={{ 

        background: `linear-gradient(rgba(20,20,31,.7), rgba(20,20,31,.7)), url(http://127.0.0.1:8000/img/${data.banner_image})`, 
          backgroundSize: "cover",
    backgroundPosition: "center"
    }}>
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">{data.travel_name}</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item"><a href="#">Pages</a></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">{data.travel_name}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

    {/* <!-- About Start --> */}
    <div className="container-xxl py-5">
      <div className="container">
  <div className="row g-5">
    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: "400px" }}>
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
  {data?.multiple_image &&  
  // multipal image ka data json string ki form me tha isliya sahi karna ke liya json.parse use kiya.
    JSON.parse(data.multiple_image).map((img, i) => (
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
      <h6 className="section-title bg-white text-start text-primary pe-3">{data.travel_name}</h6>
      <h1 className="mb-4">
        Welcome to <span className="text-primary">Tourist</span>
      </h1>
     <div
  className="mb-4"
  dangerouslySetInnerHTML={{ __html: data?.description }}
></div>

    </div>
  </div>
</div>

    </div>
    {/* <!-- About End --> */}
    </>
     : 
        <Loader/>
        }
    
    
    
    

    <Testimonial/>
    </>
  );
}

export default Service;
