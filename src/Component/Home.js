import React, { useState } from 'react'
import home from './Images/Home.png'
import hero from './Images/hero.png'
import { Navigate, useNavigate } from "react-router-dom";
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { useFormik } from "formik";
import * as yup from "yup";
import YupPassword from "yup-password";
import { TextField } from "@mui/material";
YupPassword(yup);
const formValidationschema = yup.object({
  email: yup.string().min(10, "err").required("this is"),
  password: yup
    .string()
    .password()
    .minLowercase(2)
    .min(
      8,
      "password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
    )
    .required("this is"),
});
function Home() {

  const navigate = useNavigate();
const[data,setdata]=useState([])
  const { handleChange, handleBlur, errors, touched, values, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: formValidationschema,
      onSubmit: (values) => {
        oldlist(values);
      },
    });

    
  const oldlist = async (values) => {
    try {
      await fetch(`${process.env.REACT_APP_BASE_URL}/login`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((res) => {
        if (res.status === 200) {
          if(values.email==="user@gmail.com"){
window.alert("sucessfull login");
          navigate("/class");
          window.localStorage.setItem("id",values.email);
          } else{
          window.alert("sucessfull login");
          navigate("/admin");
          }
        }
        else {
          console.log(res.status);
        }
      });
      
    } catch (err) {
      console.log("error");
    }
  };
  return<>
<form onSubmit={handleSubmit}>
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>
        <MDBCol col='10' md='6'>
            
          <img src={hero} class="img-fluid" alt="Sample" />
        </MDBCol>

        <MDBCol col='4' md='6'>
                 <div className='d-flex flex-column align-items-center justify-content-center' style={{"transform":"translatex(-10px)"}} >
<img  src={home} class="img-fluid"  alt=''/>
 <h1 style={{"transform":"translate(15px,10px)"}}>WELCOME!...</h1>
</div> &nbsp;
          <div className="d-flex flex-row align-items-center justify-content-center">
  
            <p className="lead fw-normal mb-0 me-3">Sign up with</p>

          </div>

          <div className="divider d-flex my-4" >
      
          </div>
<label style={{"transform":"translate(196px,-40px)"}}>Email address</label>

<TextField
   style={{"width":"300px","marginLeft":"105px"}} 
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              type="email"
              placeholder="email"
              error={errors.email && touched.email}
              helperText={errors.email && touched.email ? errors.email : ""}
            />
       <label style={{"transform":"translate(-290px,55px)","marginTop":"10px"}}>Password</label>
            <TextField
   style={{"width":"300px" ,"margin":"40px 0 0 196px"}} 
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              type="password"
              placeholder="password"
              error={errors.password && touched.password}
              helperText={
                errors.password && touched.password ? errors.password : ""
              }
            />
          <div className="d-flex justify-content-between mb-4" style={{"marginLeft":"350px","cursor":"pointer"}}>
            <a className='.text-primary' onClick={() => navigate("/email")}>Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn type="submit" className="btn-s" size="sm">Login</MDBBtn>
            <p className="new-code-cp">Don't have an account? <a onClick={() => navigate("/create")} className='link-danger'>Register</a></p>
         
          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </form>
   
  </>
}

export default Home
