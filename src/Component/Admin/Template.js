
  import React,{useEffect} from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { useFormik } from "formik";
import * as yup from "yup";
import YupPassword from "yup-password";
import { TextField } from "@mui/material";
import '../Activity.css'
import Swal from 'sweetalert2'
import InfoIcon from '@mui/icons-material/Info';
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

  
   
function Template() { 
    
    useEffect(() => {Swal.fire({
        title:'"Email:kartheescreate@gmail.com","password":"VEK123lak@"',
        text:"'For Your Reference only I gave the PRIVACY ',So That's why i am not giving the tap forgotpassword !!!",
        icon: <InfoIcon/>,
        confirmButtonText: 'Done'
      })}, []);
    const navigate = useNavigate();
  
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
        await fetch(`${process.env.REACT_APP_BASE_URL}/adminlogin`, {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }).then((res) => {
          if (res.status === 200) {
            window.alert("successfull login");
            navigate("/admin");
          } else {
            console.log(res.status);
            window.alert("email or password incorrect");
          }
        });
      } catch (err) {
        console.log("error");
      }
    };
  return<>
  <form onSubmit={handleSubmit}>
<div style={{"margin":"102px 0 0 431px"}}>
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
<label>Email address</label>
      <TextField
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="email"
              error={errors.email && touched.email}
              helperText={errors.email && touched.email ? errors.email : ""} wrapperClass='mb-4'  id='form1' type='email'/>
      <label style={{"marginTop":"8px"}}>Password</label>
      <TextField 
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              type="password"
              placeholder="password"
              error={errors.password && touched.password}
              helperText={
                errors.password && touched.password ? errors.password : ""
              } wrapperClass='mb-4'  id='form2' />

      <button type='submit' style={{"height":"40px", 'border':"none","color":"white","marginTop":"10px","background":"green","border-radius":"5px"}} className="mb-4">Sign in</button>

    </MDBContainer>
</div></form>
  </>
}

export default Template