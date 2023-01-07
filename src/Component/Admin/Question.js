import React, { useEffect, useState } from "react";
import "./Question.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const formValidationschema = yup.object({

  Question: yup.string().min(10, "err").required("this is required"),
});

function Question() {

  const [question, setquestion] = useState([]);

  const navigate = useNavigate();

  const { handleChange, handleBlur, errors, touched, values, handleSubmit } =
    useFormik({
      initialValues: {
        Question: "",
      },
      validationSchema: formValidationschema,
      onSubmit: (values) => {
        newlist(values);
      },
    });
  const newlist = async (values) => {
    try {
      await fetch(`${process.env.REACT_APP_BASE_URL}/question`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((res) => {
        if (res.status === 201) {
          window.alert("successfully added question");

          navigate("/admin");
        } else {
          console.log(res.status);
        }
      });
    } catch (err) {
      console.log("error");
    }
  };
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/question/allquestions`)
      .then((data) => data.json())
      .then((ques) => setquestion(ques));
  }, []);
  return (
    <>
      <div className="whole-question-container">
        <form onSubmit={handleSubmit}>
          <div className="sub-container-question">
            <div className="small-sub-container">
              <label className="ques-label">Question...</label>
              <input
                className="ques-input"
                name="Question"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Question}
                type="text"
                error={errors.Question && touched.Question}
                helperText={
                  errors.Question && touched.Question ? errors.Question : ""
                }
                placeholder="Enter The Question"
              ></input>
              <div></div>
              <button type="submit" className="ques-btn">
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="small-sub-container">
          <div className="list-of-question">
            <h4>List Of Questions</h4>
            {question.map((ques) => (
              <QuesSys key={ques._id} datas={ques} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
function QuesSys({ datas }) {
  const navigate=useNavigate();
  return (
    <>
      <div className="question-content">
        <p>{datas.Question}</p>
        <div className="two-button">
          <button onClick={()=>navigate('/activities')} className="ques-btn">Edit </button>

          <button className="ques-btn">Delete</button>
        </div>
      </div>
    </>
  );
}

export default Question;
