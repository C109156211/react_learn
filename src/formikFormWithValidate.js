import { useFormik } from "formik";
// 使用Validate為驗證方式

export default function FormikFormWithValidate(){

    const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

    const validate = (values)  => {
        const errors = {};

        if (!values.name){
            errors.name = "Name must not be empty.";
        }
        else if(values.name.length > 15){
            errors.name = "Must be 15 characters or less.";
        }

        if (!values.email){
            errors.email = "Email must not be empty.";
        }
        else if(!emailRule.test(values.email)){
            errors.email = "Please enter a valid email.";
        }
        return errors;
        };

    const formik = useFormik({
        initialValues:{
            name:"",
            email:""
        },
        validate,
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