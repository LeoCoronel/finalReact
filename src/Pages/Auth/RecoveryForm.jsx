import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { resetPassword } from '../../firebase/firebase-utils';
import { useNavigate } from 'react-router-dom';
import useRedirect from '../../hooks/useRedirect';
import { NavLink } from 'react-router-dom';

const RecoveryForm = () => {
    const initialValues = {
        email: ''
    };

    const forgotPasswordSchema = Yup.object().shape({
        email: Yup.string().email().required('Email is required'),
    });

    useRedirect('/');

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={forgotPasswordSchema}
            onSubmit={async (values, action) => {
                await resetPassword(values.email);
                action.resetForm();
            }}
        >
            {(formik) => {
                const { errors, touched, isValid, dirty } = formik;
                return(
                    <div className='formContainer'>
                        <h1>Recover password</h1>
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
                            <div className="buttons">
                                <button
                                    type='submit'
                                    className={!(dirty && isValid) ? 'submitBtn disabledBtn' : 'submitBtn'}
                                    disabled={!(dirty && isValid)}
                                >
                                    Send
                                </button>
                            </div>
                            <NavLink to='/login' className="header__login">
                                <p>Do you remember your password?</p>
                            </NavLink>
                        </Form>
                    </div>
                );
            }}
        </Formik>
    )
}

export default RecoveryForm