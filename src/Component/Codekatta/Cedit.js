import React, { useState, useEffect }  from 'react'
import { useParams } from 'react-router-dom'
  import {useFormik} from "formik";
  import {useNavigate} from 'react-router-dom';
  import * as yup from "yup";

const formValidationschema=yup.object({
  answer:yup.string().min(10,"err").required("this is requires")
    });

function Cedit() {
  const {id}=useParams();
  const [answer, setanswer] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}/indexs/${id}`)
          .then((data) => data.json())
          .then((answ) => setanswer(answ));  
           
      },[]);

      return<>
      <Edit data={answer}/>
      </>
    }

function Edit({data}){
  const {id} = useParams();
  const navigate = useNavigate();
  
  const updateanswer =((editanswer)=> {
    fetch(`${process.env.REACT_APP_BASE_URL}/indexs/update/${id}`, {
      method:"PUT",
      body: JSON.stringify(editanswer),
      headers: {"content-Type": "application/json"}
  })

  });


    const {handleChange,handleBlur,errors,touched,values,handleSubmit}=useFormik({
      initialValues:{

       answer:data.answer
      },
      validationSchema: formValidationschema,     
    onSubmit: (editanswer) => {
      updateanswer(editanswer);
    }
    })
     
  
  return <>
  <form onSubmit={handleSubmit}>
  <div className='answer-box'>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Enter Your Code Here 👇🏿</label>

  <textarea class="form-control"  name='answer' 
      onChange={handleChange} 
      onBlur={handleBlur} 
      value={values.answer} 
      type="text"
       placeholder='answer'
       error={errors.answer && touched.answer}
       helperText={errors.answer && touched.answer?errors.answer:"" } id="exampleFormControlTextarea1" rows="3">

       </textarea>
</div>
<button type='submit'className='container-button'>Submit</button>
</div> 
 </form>
  </>
}

export default Cedit