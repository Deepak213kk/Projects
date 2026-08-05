import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { IoMail, IoLocationSharp } from "react-icons/io5";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from '../Footer2/Footer';
import './Contact.css'
const Contact = () => {
    return (
        <>
        <div>
            <Navbar/>
        </div>
            <div className='p-5 '>
                <h3 className='fw-bold'> Contact Us</h3>
                <p className='p-0 m-3 ms-5'>We’d love to hear from you — let’s connect!</p>
            </div>
            <div className='gap-3 main-div d-flex justify-content-around align-items-center '>
                <div className='left-div'>
                    <form>
                        <div className="mb-3 d-flex align-items-center">
                            <label className="me-3 fw-bold" style={{ width: "120px" }}>
                                Name :
                            </label>
                            <input className="form-control" type="text" />
                        </div>

                        <div className="mb-3 d-flex align-items-center">
                            <label className="me-3 fw-bold" style={{ width: "120px" }}>
                                Email :
                            </label>
                            <input className="form-control" type="email" />
                        </div>

                        <div className="mb-3 d-flex align-items-center">
                            <label className="me-3 fw-bold" style={{ width: "120px" }}>
                                Subject :
                            </label>
                            <input className="form-control" type="text" />
                        </div>

                        <div className="mb-4 d-flex align-items-center">
                            <label className="me-3 fw-bold" style={{ width: "120px" }}>
                                Message :
                            </label>
                            <input className="form-control" type="text" />
                        </div>

                        <button
                            className="px-4 text-white btn"
                            style={{ background: "#FF8A3D", borderRadius: "10px" }}
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div className='mb-4 rounded right-div'>
                    <div style={{ background: "#FFFCE8", padding: "30px", borderRadius: "10px" }}>

                        {/* PHONE */}
                        <div className="mb-3 d-flex align-items-center">
                            <FaPhone size={20} color="#F4A025" className="me-3" />
                            <span className="fw-semibold">+91 9820422476</span>
                        </div>

                        {/* EMAIL */}
                        <div className="mb-3 d-flex align-items-center">
                            <IoMail size={20} color="#F4A025" className="me-3" />
                            <span className="fw-semibold">support@juicevedas.com</span>
                        </div>

                        {/* ADDRESS */}
                        <div className="mb-4 d-flex align-items-start">
                            <IoLocationSharp size={20} color="#F4A025" className="mt-1 me-3" />
                            <span className="fw-semibold">
                                Pink Corner Sindhi Society, Chembur <br />
                                Mumbai, Maharashtra, India – 400071
                            </span>
                        </div>

                        {/* SOCIAL SECTION */}
                        <h5 className="mb-3 fw-bold">Follow Us</h5>

                        {/* Instagram */}
                        <div className="mb-3 d-flex align-items-center">
                            <FaInstagram size={22} color="#F4A025" className="me-3" />
                            <span className="fw-semibold">@Juice_Ved</span>
                        </div>

                        {/* Facebook */}
                        <div className="mb-3 d-flex align-items-center">
                            <FaFacebook size={22} color="#F4A025" className="me-3" />
                            <span className="fw-semibold">@Juice_Ved</span>
                        </div>

                        {/* Twitter */}
                        <div className="mb-3 d-flex align-items-center">
                            <FaTwitter size={22} color="#F4A025" className="me-3" />
                            <span className="fw-semibold">@JuiceVed</span>
                        </div>

                    </div>
                </div>
            </div>
            <Footer className='p-3 m-3 mt-3'/>
        </>
    )
}

export default Contact