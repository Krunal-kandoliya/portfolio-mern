import React, { useState } from "react";
import "../contact/Contact.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import Rotate from "react-reveal/Rotate";
import axios from 'axios'
import {toast } from 'react-toastify';
import LightSpeed from "react-reveal/LightSpeed";

const Contact = () => {
  const[name,setname]=useState("")
  const[email,setemail]=useState("")
  const[msg,setmsg]=useState("")

  const handlesubmit=async(e)=>{
    e.preventDefault()
    try {
      if(!name || !email || !msg){
        toast.error('please Provide all the fields')
      }
      const res=await axios.post('http://localhost:8080/api/v1/portfolio/sendEmail',{name,email,msg})
      if(res.data.success){
        toast.success(res.data.message)
        setemail("")
        setname("")
        setmsg("")
      }else{
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="contact" id="contact" >
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                  <img
                    src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703376000&semt=ais"
                    alt="krunal"
                    className="image"
                  />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-3">
              <div className="row">
                  <div className="row">

                  <h6>Contact With 
                  <BsLinkedin color="blue" size={30}  className="ms-2" />
                  <BsGithub  size={30}  className="ms-2" />
                  </h6>
                  </div>
                
                <div className="row px-3 mb-4">
                  <div className="line" />
                  <small className="or text-center ">or</small>
                  <div className="line" />
                </div>
                <div className="row px-3 ">
                  <input
                    type="text"
                    name="name"
                    placeholder="Write Your Name"
                    className="mb-3"
                    value={name}
                    onChange={(e)=>setname(e.target.value)}
                  />
                </div>
                <div className="row px-3 ">
                  <input
                    type="text"
                    name="email"
                    placeholder="Write Your Email"
                    className="mb-3"
                    value={email}
                    onChange={(e)=>setemail(e.target.value)}
                  />
                </div>
                <div className="row px-3 ">
                  <textarea
                    type="text"
                    name="msg"
                    placeholder="Write Your message"
                    className="mb-3"
                    value={msg}
                    onChange={(e)=>setm(e.target.value)}
                  />
                </div>
                <div className="row px-3 ">
                  <button className="button" onClick={handlesubmit}>
                    Send message
                  </button>
                </div>
              </div>
            </div>
            </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
