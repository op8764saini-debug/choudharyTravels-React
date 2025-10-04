 import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// swiper की CSS भी ज़रूरी है 👇
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import Loader from "./loader";

function Testimonial(){
   
    const [clientdata, setclientdata] = useState()
      const [loader, setLoader] = useState(false);
  
      useEffect(() => {
          // indexFormHandler()
          setLoader(true)
          clientHandler();
      }, []);
  
      const clientHandler = async () => {
          let URL = "http://127.0.0.1:8000/api/home-data";
          let Response = await fetch(URL);
          Response = await Response.json();
            // console.log(Response); 
          setclientdata(Response);
  
          setLoader(false)
      };
    return(
        <>
          {/* Testimonial Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
            <h1 className="mb-5">Our Clients Say!!!</h1>
          </div>

          <Swiper
           className="testimonial-carousel"
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={24}
      slidesPerView={3}
      loop={true}
      autoplay={{ delay: 2000 }}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      }}
          >
                                {!loader ? clientdata && clientdata.cl_data && clientdata.cl_data.map((data) => (

            <SwiperSlide key={data.id}>
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src={`http://127.0.0.1:8000/img/${data.image}`}
                style={{ width: "80px", height: "80px" }}
                alt="testimonial1"
              />
              <h5 className="mb-0">{data.name}</h5>
              <p>{data.designation}</p>
              <p className="mb-0">
                {data.description}
              </p>
            </div>
            </SwiperSlide>
             ))
                        : <Loader />
                    }
            
            {/* <SwiperSlide>
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="img/testimonial-2.jpg"
                style={{ width: "80px", height: "80px" }}
                alt="testimonial2"
              />
              <h5 className="mb-0">Jane Doe</h5>
              <p>London, UK</p>
              <p className="mt-2 mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et
                lorem et sit.
              </p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="img/testimonial-3.jpg"
                style={{ width: "80px", height: "80px" }}
                alt="testimonial3"
              />
              <h5 className="mb-0">Mark Smith</h5>
              <p>Sydney, AUS</p>
              <p className="mt-2 mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et
                lorem et sit.
              </p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="testimonial-item bg-white text-center border p-4">
                    <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="img/testimonial-4.jpg" style={{width: "80px", height: "80px"}}/>
                    <h5 className="mb-0">John Doe</h5>
                    <p>New York, USA</p>
                    <p className="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
                </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
      {/* Testimonial End */}
        </>
    )
}export default Testimonial;