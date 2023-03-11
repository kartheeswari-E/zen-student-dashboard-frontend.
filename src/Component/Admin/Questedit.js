import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box'
import { useFormik } from 'formik';
import * as yup from 'yup';
import React ,{useEffect,useState}from 'react';
 import { useParams } from "react-router-dom"
 import './Question.css';
const movieValidationSchema = yup.object({


        recording:yup
        .string(),
        topic: yup
        .string(),
        date:yup
        .string(), 
        intro:yup
        .string(),
    intro1:yup
        .string(), 
        intro2:yup
        .string(),
        intro3: yup
        .string(),
        intro4:yup
        .string(),
        intro5:yup
        .string(),
        intro6:yup
        .string(), 
        last:yup
        .string(), 
        question: yup
        .string(),
        rec: yup
        .string(),
    
})
export function Questedit() {
  const {id}=useParams();
const [query, setquery] = useState(null);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/userquestion/get/${id}`)
      .then((data) => data.json())
      .then((mv) => setquery(mv));
  }, []);
  console.log(query);
 return query ? <EditMoviesForm query={query}/> : "loading";
  }
  export function EditMoviesForm({query}){
    const {id}=useParams();
    const { handleSubmit, values, handleChange, touched, handleBlur, errors } = useFormik({
        initialValues: {
            recording:query.recording,
            topic:query.topic, 
            date:query.date,
            intro:query.intro,
        intro1:query.intro1, 
            intro2:query.intro2, 
            intro3:query.intro3,  
            intro4:query.intro4, 
            intro5:query.intro5, 
            intro6:query.intro6,  
            last:query.last, 
            question:query.question, 
            rec:query.recording
        },
        validationSchema: movieValidationSchema,
        onSubmit: (editMovieList) => {
            console.log('onSubmit', editMovieList)
            EditMovie(editMovieList)
        }
    })
    const navigate = useNavigate()
    const EditMovie = (editMovieList) => {
        fetch(`${process.env.REACT_APP_BASE_URL}/userquestion/upd/${query._id}`, {
            method: "PUT",
            body: JSON.stringify(editMovieList),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(() => navigate("/admin"))
            .catch((n) => console.log('error occurred' + n))
    };
    return <>
        <Box onSubmit={handleSubmit} className="add-movie-form" component="form"  >
            <TextField
                name="recording"
                value={values. recording}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched. recording && errors. recording}
                helperText={touched. recording && errors. recording ? errors. recording : null}
                label=" recording" variant="outlined" />


            <TextField
                name="topic"
                value={values.topic}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.topic && errors.topic}
                helperText={touched.topic && errors.topic ? errors.topic : null}
                label="topic" variant="outlined" />

            <TextField
                name="date"
                value={values.date}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.date && errors.date}
                helperText={touched.date && errors.date ? errors.date : null}
                label="date" variant="outlined" />

            <TextField
                name="intro"
                value={values.intro}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.intro && errors.intro}
                helperText={touched.intro && errors.intro ? errors.intro : null}
                label="intro" variant="outlined" />
           <TextField
                name="intro1"
                value={values.intro1}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.intro1 && errors.intro1}
                helperText={touched.intro1 && errors.intro1 ? errors.intro1 : null}
                label="intro1" variant="outlined" />
               
               <TextField
                name="intro3"
                value={values.intro3}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.intro3 && errors.intro3}
                helperText={touched.intro3 && errors.intro3 ? errors.intro3 : null}
                label="intro3" variant="outlined" />

<TextField
                name="intro2"
                value={values.intro2}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.intro2 && errors.intro2}
                helperText={touched.intro2 && errors.intro2 ? errors.intro2 : null}
                label="intro2" variant="outlined" />

<TextField
                name="intro4"
                value={values.intro4}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.intro4 && errors.intro4}
                helperText={touched.intro4 && errors.intro4 ? errors.intro4 : null}
                label="intro4" variant="outlined" />

<TextField
                name="intro5"
                value={values.intro5}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.intro5 && errors.intro5}
                helperText={touched.intro5 && errors.intro5 ? errors.intro5 : null}
                label="intro5" variant="outlined" />
                
                <TextField
                name="intro6"
                value={values.intro6}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.intro6 && errors.intro6}
                helperText={touched.intro6 && errors.intro6 ? errors.intro6 : null}
                label="intro6" variant="outlined" />

<TextField
                name="last"
                value={values.last}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.last && errors.last}
                helperText={touched.last && errors.last ? errors.last : null}
                label="last" variant="outlined" />

<TextField
                name="question"
                value={values.question}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.question && errors.question}
                helperText={touched.question && errors.question ? errors.question : null}
                label="question" variant="outlined" />


<TextField
                name="rec"
                value={values.rec}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.rec && errors.rec}
                helperText={touched.rec && errors.rec ? errors.rec : null}
                label="rec" variant="outlined" />
            <Button type="Submit" variant="contained">Submit</Button>
        </Box>
    </>;
}


export default Questedit