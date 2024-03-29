import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { signInUser, signInWithGoogle, createUserProfileDocument } from '../../firebase/firebase-utils';
import { useLocation, useNavigate } from 'react-router-dom';
import useRedirect from '../../hooks/useRedirect';
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();

    const initialValues = {
        email: '', 
        password: ''
    };

    const signInSchema = Yup.object().shape({
        email: Yup.string().email().required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(4, 'Password is too short'),
    });

    const { state } = useLocation();

    useRedirect('/');

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
            onSubmit={async values => {
                try {
                    const {user} = await signInUser(values.email, values.password);
                    createUserProfileDocument(user);
                } catch (error) {
                    if(error.code === "auth/wrong-password") {
                        alert("Wrong password");
                    }
                    if(error.code === "auth/user-not-found") {
                        alert("User not found");
                    }
                }
                actions.resetForm();
            }}
        >
            {(formik) => {
                const { errors, touched, isValid, dirty } = formik;
                return(
                    <div className='formContainer'>
                        <h1>Sign in</h1>
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
                            <div className="buttons">
                                <button className='googleBtn' onClick={signInWithGoogle}>Google</button>
                                <button
                                    type='submit'
                                    className={!(dirty && isValid) ? 'submitBtn disabledBtn' : 'submitBtn'}
                                    disabled={!(dirty && isValid)}
                                >
                                    Sign In
                                </button>
                            </div>
                            <NavLink to='/register' className="header__login">
                                <p>Register</p>
                            </NavLink>
                            <NavLink to='/recovery' className="header__login">
                                <p>I forgott my password</p>
                            </NavLink>
                        </Form>
                    </div>
                );
            }}
        </Formik>
    )
}

export default LoginForm