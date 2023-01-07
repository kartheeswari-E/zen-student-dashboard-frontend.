import React from "react";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import './Activity.css'
import  Navbar  from "./Navbar";
import Sidebar from "./Sidebar";

export function Activites() {
  
  const navigate = useNavigate();

  const formValidationschema = yup.object({
   Question: yup.string().required("this is required"),
    Frontend_url: yup.string().required("this is required"),
    Backend_url: yup.string().required("this is required"),
  });
  const { handleChange, handleBlur, errors, touched, values, handleSubmit } = useFormik({
    initialValues: {
    Question:"",
      Frontend_url: "",
      Backend_url: "",
    },
    validationSchema: formValidationschema,
    onSubmit: (values) => {
      newlist(values);
    },
  });
  const newlist = async (values) => {
    try {
      await fetch(`${process.env.REACT_APP_BASE_URL}/answer`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((res) => {
        if (res.status === 201) {
          window.alert("successfully added answer");

          navigate("/task");
        } else {
          console.log(res.status);
        }
      });
    } catch (err) {
      console.log("error");
    }
  };

  return (
    <>
    <Navbar/>
    <div className="whole-acty">
      <form onSubmit={handleSubmit}>
        <div className="sty">
          <div className="whole-container">
            <div className="heading-1">
              Activites
            </div>
              <div className="sub-container">
                <div className="inputbox-container">
                  <label for="Question">Question</label>
                  <br />
                  <div className="mb-3 own">
                    <Form.Control

                      className="own-1"
                      name="Question"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.Question}Question
                      type="text"
                      error={errors.Question && touched.Question}
                      helperText={errors.Question && touched.Question
                        ? errors.Question
                        : ""}
                      placeholder="Question" />
                  </div>

                  <label for="frontend source code">frontend source code</label>
                  <br />
                  <div className="mb-3 own">
                    <Form.Control

                      className="own-1"
                      name="Frontend_url"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.Frontend_url}
                      // value={data.Frontend_url}
                      type="text"
                      error={errors.Frontend_url && touched.Frontend_url}
                      helperText={errors.Frontend_url && touched.Frontend_url
                        ? errors.Frontend_url
                        : ""}
                      placeholder="frontend source code" />
                  </div>

                  <label for="backend source code">backend source code</label>
                  <br />
                  <div className="mb-3 own">
                    <Form.Control
                      name="Backend_url"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.Backend_url}
                      type="text"
                      error={errors.Backend_url && touched.Backend_url}
                      helperText={errors.Backend_url && touched.Backend_url
                        ? errors.Backend_url
                        : ""}
                      placeholder="Enter The Question" />
                  </div>
                </div>
                <div className="btnp">
                  {" "}
                  <Button  style={{"background":"green","color":"white"}}
                    type="submit"
                    variant="outline-secondary"
                    id="button-addon2"
                  >
                    Submit
                  </Button>

                  <Button style={{"marginLeft":"3px","background":"green","color":"white"}}
                    type="button"
                    variant="outline-secondary"
                    id="button-addon2"
                    onClick={()=>navigate(-1)}
                  >
                   Back
                  </Button>
                </div>
              </div>
      
          </div>
          
        </div>
      </form>
      </div>
      <Sidebar/>
    </>
  );
}
