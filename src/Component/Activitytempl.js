import React, { useState, useEffect } from "react";
import "./Basic.css";
import Activitytoogle from "./Activitytoogle";

function Activitytempl() {
     
  const [question, setquestion] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/question/allquestions`)
      .then((data) => data.json())
      .then((ques) => setquestion(ques));

  }, []);

return <>
<div className="container">
 {question.map((ques) => (
          <Activitytoogle key={ques._id} data={ques} />
        ))}</div>
    </>

}
export default Activitytempl;
