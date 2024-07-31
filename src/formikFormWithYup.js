import { useFormik } from "formik";
import * as Yup from "yup"; 
// Yup為驗證方式，較簡易

export default function FormikFormWithYup(){

    const formik = useFormik({
        initialValues:{
            name:"",
            email:""
        },
        validationSchema: Yup.object({
            name: Yup.string()
            .max(15,"Must be 15 characters or less.")
            .required("Name must not be empty."),
            email: Yup.string()
                .email("Please enter a valid email.")
                .required("Email must not be empty.")
        }),
    onSubmit:(values, {resetForm}) => {
            console.log(values);
            resetForm();
        }
    });

    const showNameError = formik.touched.name && formik.touched.name;
    const showEmailError = formik.touched.email && formik.touched.email;

    return(
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <input 
                type="text" 
                id="name"
                name="name"
                onChange={formik.handleChange}  
                onBlur={formik.handleBlur}  
                value={formik.values.name}
                className={showNameError ? "invalid" : ""}
            />
            {showNameError ? (
                <p className="error-text">{formik.errors.name}</p>
            ) : null}

            <label htmlFor="email">Your email</label>
            <input 
                type="email" 
                id="email"
                name="email"
                onChange={formik.handleChange}  
                onBlur={formik.handleBlur}  
                value={formik.values.naemailme}
                className={showEmailError ? "invalid" : ""}
            />
            {showEmailError ? (
                <p className="error-text">{formik.errors.email}</p>
            ) : null}
            <input type="submit"></input>
        </form>
    );
};