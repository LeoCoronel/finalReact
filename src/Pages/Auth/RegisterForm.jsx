import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { createUser, signInWithGoogle } from '../../firebase/firebase-utils';
import { useLocation } from 'react-router-dom';
import useRedirect from '../../hooks/useRedirect';
import { NavLink } from 'react-router-dom';

const RegisterForm = () => {
    const initialValues = {
        email: '', 
        password: '',
        name: ''
    };

    const signInSchema = Yup.object().shape({
        email: Yup.string().email().required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(4, 'Password is too short'),
        name: Yup.string().required('Name is required')
    });

    const { state } = useLocation();

    useRedirect(state?.redirectedFromCheckout ? '/' : 'register');

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
            onSubmit={async (values, actions) => {
                try {
                    await createUser(values.email, values.password, values.name)
                } catch (error) {
                    if(error.code === "auth/email-already-in-use") {
                        alert("This mail has already an account")
                    }
                }
                actions.resetForm();
            }}
        >
            {(formik) => {
                const { errors, touched, isValid, dirty } = formik;
                return(
                    <div className='formContainer'>
                        <h1>Register</h1>
                        <Form>
                            <div className='form__row'>
                                <div className="fieldInput">
                                    <label htmlFor="email">Email</label>
                                    <Field 
                                        type='email'
                                        name='email'
                                        id='email'
                                        className={errors.email && touched.email ? 'input__error' : null}
                                    />
                                </div>
                                <ErrorMessage name='email' component='span' className='error' />
                            </div>
                            <div className='form__row'>
                                <div className="fieldInput">
                                    <label htmlFor="password">Password</label>
                                    <Field 
                                        type='password'
                                        name='password'
                                        id='password'
                                        className={errors.password && touched.password ? 'input__error' : null}
                                    />
                                </div>
                                <ErrorMessage name='password' component='span' className='error' />
                            </div>
                            <div className='form__row'>
                                <div className="fieldInput">
                                    <label htmlFor="name">Name</label>
                                    <Field 
                                        type='text'
                                        name='name'
                                        id='name'
                                        className={errors.name && touched.name ? 'input__error' : null}
                                    />
                                </div>
                                <ErrorMessage name='name' component='span' className='error' />
                            </div>
                            <div className="buttons">
                                <button className='googleBtn' onClick={signInWithGoogle}>Google</button>
                                <button
                                    type='submit'
                                    className={!(dirty && isValid) ? 'submitBtn disabledBtn' : 'submitBtn'}
                                    disabled={!(dirty && isValid)}
                                >
                                    Sign Up
                                </button>
                            </div>
                            <NavLink to='/login' className="header__login">
                                <p>Login</p>
                            </NavLink>
                        </Form>
                    </div>
                );
            }}
        </Formik>
    )
}

export default RegisterForm