import React from 'react';
import home from './Images/Home.png'
import hero from './Images/hero.png'
import { useNavigate } from "react-router-dom";
import {MDBContainer, MDBCol, MDBRow, MDBBtn} from 'mdb-react-ui-kit';
import { useFormik } from "formik";
import * as yup from "yup";
import YupPassword from "yup-password";
import { TextField } from "@mui/material";

YupPassword(yup)
  const formValidationschema=yup.object({
email:yup.string().min(10,"Error").required("This Is Required"),
name:yup.string().min(10,"Error").required("This Is Required"),
password:yup.string().password()
.minLowercase(2).min(
  8,
  "password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special")
.required("this is")

  });

 function Create() {

    const navigate=useNavigate();

    const {handleChange,handleBlur,errors,touched,values,handleSubmit}=useFormik({
        initialValues:{
          name:"",
          email:"",
          password:""
        },
        validationSchema:formValidationschema,
        onSubmit:(values)=>{
          newlist(values);
        },
      });
const newlist=async(values)=>{
  try{
 await fetch(`${process.env.REACT_APP_BASE_URL}/userfirst`,{
      method:'POST',
       body:JSON.stringify(values),
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
     })
     .then((res)=>{    
              if(res.status===201){
              window.alert("successfull register");
                  navigate("/");
              }
            else{
    console.log(res.status)
    window.alert("email already used");
   }
   })
}
    catch(err){
      console.log("error")
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

      <p className="lead fw-normal mb-0 me-3">Sign in with</p>

    </div>

    <div className="divider d-flex my-4" >

    </div>
<label style={{"transform":"translate(196px,-40px)"}}>Name</label>


<TextField  style={{"width":"300px","marginLeft":"156px"}} 
 name='name'
    onChange={handleChange} 
    onBlur={handleBlur} 
    value={values.name} 
    type="text"
     placeholder='name'
    error={errors.name && touched.name}
    helperText={errors.name && touched.name?errors.name:"" }
    /> 
     <label style={{"transform":"translate(-295px,56px)","marginTop":"10px"}}>Email</label>
          
   
    <TextField style={{"width":"300px" ,"margin":"40px 0 0 196px"}} 

   name='email'
    onChange={handleChange} 
    onBlur={handleBlur} 
    value={values.email} 
    type="email"
     placeholder='email'
    error={errors.email && touched.email}
    helperText={errors.email && touched.email?errors.email:"" }
    /> 
    
    <label style={{"transform":"translate(-300px,105px)","marginTop":"10px"}}>Password</label>
     <TextField  style={{"width":"300px" ,"margin":"40px 0 0 196px"}}   name='password' onChange={handleChange} onBlur={handleBlur} value={values.password}  type="password" placeholder='password'
  
    error={errors.password && touched.password}
    helperText={errors.password && touched.password?errors.password:""}   />


<div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn type="submit" className="btn-s" size="sm">Register</MDBBtn>
    </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </form>
</>

 }
export default Create;