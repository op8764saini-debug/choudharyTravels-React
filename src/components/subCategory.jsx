import { useState } from "react";
import { useEffect } from "react";
import Loader from "./loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useParams } from "react-router";



function SubCategory(){

    const [data,setdata]=useState([]);
const [loader,setLoader]=useState(false);
const { id } = useParams();
console.log("Category ID:", id);
    useEffect(()=>{
        setLoader(true)
        categoryHandler()
    },[id])

    const categoryHandler=async()=>{
         const URL = `http://127.0.0.1:8000/api/show_subCategories/${id}`;
        let response = await fetch(URL);
        response = await response.json();
        setdata(response)
            setLoader(false)
    }
            console.log(data)


        

    return(
        <>
                    {
            !loader? data && data.map((abr) => (
        <div>
      
             <div className="container-fluid bg-primary py-5 mb-5 hero-header" style={{ 

        background: `linear-gradient(rgba(20,20,31,.7), rgba(20,20,31,.7)), url(http://127.0.0.1:8000/img/${abr.banner_image})`, 
          backgroundSize: "cover",
    backgroundPosition: "center"
    }}>
            <div className="container py-5">
                <div className="row justify-content-center py-5">
                    <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-3 text-white animated slideInDown">{abr.title}</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">{abr.title}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>    


          {/* <!-- About Start --> */}
    <div className="container-xxl py-5">
        <div className="container">

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
  JSON.parse(abr.multiple_image).map((img, i) => (
    <SwiperSlide key={i}>
      <div className="position-relative h-100">
        <img
          className="img-fluid position-absolute w-100 h-100"
          src={`http://127.0.0.1:8000/images/${img}`}
          alt={`service-img-${i}`}
          style={{ objectFit: "cover" }}
        />
      </div>
    </SwiperSlide>
  ))
}


</Swiper>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h6 className="section-title bg-white text-start text-primary pe-3">{abr.title}</h6>
                    <h1 className="mb-4">Welcome to <span className="text-primary">Choudhary Travels</span></h1>
  <p className="mb-4"  dangerouslySetInnerHTML={{ __html: abr?.description }}> 
                                        
                                     </p>                    
                </div>
                                  

            </div>
           
           
        </div>
    </div>
      </div>

           )):<Loader/>
            }
    {/* <!-- About End --> */}

        </>
    )
}export default SubCategory;