import { useState } from "react";

function Contact() {
 const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

    const contactHandler = async (event) => {
    event.preventDefault(); // ✅ function call
        console.log(name, email, subject, message)

        const url = "http://127.0.0.1:8000/api/contact_form_api";
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ name, email, subject, message })
        })
        response = await response.json();

         if (response.success) {
      alert("New user added ✅");
      // reset form fields
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      alert("Something went wrong ❌");
    }

    }
    return (
        <>
            <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row justify-content-center py-5">
                        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-3 text-white animated slideInDown">Contact Us</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- Contact Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Contact Us</h6>
                        <h1 className="mb-5">Contact For Any Query</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h5>Get In Touch</h5>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos</p>
                            <div className="d-flex align-items-center mb-4">
                                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: "50px", height: "50px" }}>
                                    <i className="fa fa-map-marker-alt text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h5 className="text-primary">Office</h5>
                                    <p className="mb-0">123 Street, New York, USA</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-4">
                                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: "50px", height: "50px" }}>
                                    <i className="fa fa-phone-alt text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h5 className="text-primary">Mobile</h5>
                                    <p className="mb-0">+012 345 67890</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: "50px", height: "50px" }}>
                                    <i className="fa fa-envelope-open text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h5 className="text-primary">Email</h5>
                                    <p className="mb-0">info@example.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <iframe
                                className="position-relative rounded w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                frameBorder="0"
                                style={{ minHeight: "300px", border: "0" }}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex="0"
                            />

                        </div>
                        <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <form onSubmit={contactHandler}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" value={name} onChange={(event) => setName(event.target.value)} required placeholder="Your Name" />
                                            <label >Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} required placeholder="Your Email" />
                                            <label >Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" value={subject} onChange={(event) => setSubject(event.target.value)} required placeholder="Subject" />
                                            <label >Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" value={message} onChange={(event) => setMessage(event.target.value)} required placeholder="Leave a message here" style={{ height: "100px" }}></textarea>
                                            <label >Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact End --> */}
        </>
    )
} export default Contact