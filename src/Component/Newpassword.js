import React from "react";
import {
  MDBBtn,
} from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";
import './Newpassword.css'

import * as yup from "yup";
import { useFormik } from "formik";
import YupPassword from "yup-password";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
YupPassword(yup);
function Newpassword() {
  const formValidationschema = yup.object({
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

  const navigate = useNavigate();

  const { handleChange, handleBlur, errors, touched, values, handleSubmit } =
    useFormik({
      initialValues: {
        password: "",
      },
      validationSchema: formValidationschema,
      onSubmit: (values) => {
        verify(values);
      },
    });
  const param = useParams();
  
  const verify = async (values) => {
  
    try {
      await fetch(
        `${process.env.REACT_APP_BASE_URL}/password-reset/${param.id}/${param.token}`,
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      ).then((res) => {
        if (res.status === 200) {
          window.alert("password changed");
          navigate("/");
        } else {
          console.log(res.status);
        }
      });
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <>
    <div className='email-container'>
          <form onSubmit={handleSubmit}>

   
                <TextField
                 className='email-input'
                  name="password"
                  label="password"
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
               <div className='text-center text-md-start mt-4 pt-2'>
                <MDBBtn type="submit" className='email-btn' >
                  Save
                </MDBBtn>
                </div>
             
          </form>
          </div>
    </>
  );
}

export default Newpassword;
