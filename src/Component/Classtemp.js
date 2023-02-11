import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Roadmaptemp from "./Roadmaptemp";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function Classtemp() {
  useEffect(() => {
    wholedata();
    answerdata();
  }, []);
  const [content, setcontent] = useState("Join the class on time!");
  const [content1, setcontent1] = useState("No session title available");
  const [content2, setcontent2] = useState("Class schedule is not updated");
  const [content3, setcontent3] = useState("No content available");
  const [content4, setcontent4] = useState("No preread available");
  const [content5, setcontent5] = useState([]);
  const [content6, setcontent6] = useState([]);
  const [content7, setcontent7] = useState([]);
  const [content8, setcontent8] = useState([]);
  const [content9, setcontent9] = useState([]);
  const [content10, setcontent10] = useState([]);
  const [content11, setcontent11] = useState([]);
  const [content15, setcontent15] = useState([]);
  const [front, setfront] = useState([]);
  const [front1, setfront1] = useState([]);
  const [front2, setfront2] = useState([]);
  const [active, setactive] = useState(false);
  const [actives, setactives] = useState(false);
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [link, setlink] = useState(false);
  const [links, setlinks] = useState(false);
  const [toggle, settoggle] = useState(false);

  const dar = window.localStorage.getItem("id");
  const [home, sethome] = useState([]);
  const [upd, setupd] = useState([]);
  const formValidationschema = yup.object({
    answer1: yup.string().required("this is required"),

    answer2: yup.string().required("this is required"),
  });

  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      day:"",
      answer1: "",
      answer2: "",
    },
    validationSchema: formValidationschema,
    onSubmit: (values) => {
      newlist(values);
    },
  });
  const newlist = async (values) => {
    try {
      await fetch(
        `${process.env.REACT_APP_BASE_URL}/userfirst/upda/${dar}`,
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      ).then((res) => {
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

  let wholedata = async () => {
    try {
      await fetch(`${process.env.REACT_APP_BASE_URL}/userfirst/allquestion`)
        .then((data) => data.json())
        .then((datas) => setdata(datas));
    } catch (error) {
      console.log(error);
    }
  };
  let answerdata = async () => {
    try {
      await fetch(`${process.env.REACT_APP_BASE_URL}/userfirst/allanswer`)
        .then((data) => data.json())
        .then((datass) => setfront(datass));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="thewhole">
        <div className={link ? "active" : "class-container"}>
          <div className="first-class-container">
            <div className="sub-class-cont">
              <div className="rec">{content}</div>
              {actives ? (
                <div className="play-btn">
                  <p
                    className="play"
                    onClick={() => {
                      setlink(!link);
                      setlinks(!links);
                    }}
                  >
                    Play Recording
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="sub-class-conts">
              <div className="topic">
                <p className="part1">{content1}</p>
                <p className="part2">{content2}</p>
                <p className="code"></p>
              </div>
              <div className="content">
                <p className="con1">Contents</p>
                <p className="same">{content3}</p>
                <p className="same">{content5}</p>
                <p className="same">{content6}</p>
                <p className="same">{content7}</p>
                <p className="same">{content8}</p>
                <p className="same">{content9}</p>
                <p className="same">{content11}</p>
              </div>
              <div className="last">
                <p className="pre">Pre-read:</p>
                <p className="no">{content4}</p>
              </div>
            </div>

            {active ? (
              <form onSubmit={handleSubmit}>
                <div>
                  <p className="act">Activities</p>
                  <div className="sub-class-contss">
                    <div className="bef-toggle">
                      <a className="link" href={`${content10}`}>
                        {content10}
                      </a>
                      <div className="task">Task</div>
                      <div
                        onClick={() => settoggle(!toggle)}
                        className="toggle1"
                      >
                        {toggle ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </div>
                    </div>
                    {toggle ? (
                      <div>
                        <div className="tag">
                          <div className="tag1">Tags:</div>
                          <div className="tag2">nodejs</div>
                          <div className="tag2">backend</div>
                        </div>

                        <div className="yellow">
                        <label>Day topic</label>
                          <input
                            placeholder="for eg:Javascript - Day -1 : Introduction to Browser & web"
                            onChange={handleChange}
                            value={values.day}
                            name="day"
                            type="text"
                            className="fs"
                          ></input>
                          <label>Front-end Source code</label>
                          <input
                            placeholder="Front-end Source code"
                            onChange={handleChange}
                            value={values.answer1}
                            name="answer1"
                            type="text"
                            className="fs"
                          ></input>
                          <label>Front-end Deployed URL</label>
                          <input
                            placeholder="Front-end Deployed URL"
                            onChange={handleChange}
                            value={values.answer2}
                            type="text"
                            name="answer2"
                            className="fs"
                          ></input>
                        </div>
                        <button type="submit" className="sb">
                          submit
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </form>
            ) : (
              ""
            )}
          </div>
          <div className="road-map-container">
            <div className="main-container">
              <div className="road-map">Sessions Roadmap</div>
              <div className="articles">
                {data.map((datas, index) => {
                  return (
                    <Roadmaptemp
                      datas={datas}
                      index={index}
                      setcontent={setcontent}
                      setcontent1={setcontent1}
                      setcontent2={setcontent2}
                      setcontent3={setcontent3}
                      setcontent4={setcontent4}
                      front={front}
                      setcontent15={setcontent15}
                      setfront1={setfront1}
                      setfront2={setfront2}
                      setcontent5={setcontent5}
                      setcontent6={setcontent6}
                      setcontent7={setcontent7}
                      setcontent8={setcontent8}
                      setcontent9={setcontent9}
                      setcontent10={setcontent10}
                      setcontent11={setcontent11}
                      setupd={setupd}
                      setactive={setactive}
                      setactives={setactives}
                    />
                  );
                })}
              </div>
            </div>
            <div className="addtional-container"></div>
          </div>
        </div>

        <div className={links ? "popup" : "popup-no"}>
          <div className="backg"></div>
          <div className="sub-container">
            <div className="small-sub">
              <p className="rlink">Recording Link</p>
              <div
                className="movex"
                onClick={() => {
                  setlink(!link);
                  setlinks(!links);
                }}
              >
                <CloseIcon />
              </div>
            </div>
            <div className="small-sub-2">
              <div className="smallf-sub-2">
                <p className="rec-name">Recording Link :</p>
                <a className="ll" href={`${content15}`}>
                  <p className="links">{content15}</p>
                </a>
              </div>
              <div className="pass-last">
                <p className="y">Passcode :</p>
                <p className="y">no passcode</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sidebar />
    </>
  );
}

export default Classtemp;
