import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as orderActions from "./../../redux/slices/orders/orders-actions";
import { clearCart } from "../../redux/slices/cartSlice";

const Payment = () => {
  const { cart, totalPrice } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    phone: "",
    locality: "",
    address: "",
  };

  const paymentSchema = Yup.object().shape({
    name: Yup.string().required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    locality: Yup.string().required("Locality is required"),
    address: Yup.string().required("Address is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={paymentSchema}
      onSubmit={async (values) => {
        const orderData = {
          cart,
          totalPrice,
          shippingDetails: { ...values },
        };

        try {
          await dispatch(orderActions.createOrder(orderData));
          navigate("/");
          dispatch(clearCart());
        } catch (error) {
          alert("Cannot create the order");
        }
      }}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div className="formContainer">
            <h1>Payment</h1>
            <Form>
              <div className="form__row">
                <div className="fieldInput">
                  <label htmlFor="name">Name</label>
                  <Field
                    name="name"
                    id="name"
                    className={
                      errors.name && touched.name ? "input__error" : null
                    }
                  />
                </div>
                <ErrorMessage name="name" component="span" className="error" />
              </div>
              <div className="form__row">
                <div className="fieldInput">
                  <label htmlFor="phone">Phone</label>
                  <Field
                    type="number"
                    name="phone"
                    id="phone"
                    className={
                      errors.phone && touched.phone ? "input__error" : null
                    }
                  />
                </div>
                <ErrorMessage name="phone" component="span" className="error" />
              </div>
              <div className="form__row">
                <div className="fieldInput">
                  <label htmlFor="locality">Locality</label>
                  <Field
                    type="locality"
                    name="locality"
                    id="locality"
                    className={
                      errors.locality && touched.locality
                        ? "input__error"
                        : null
                    }
                  />
                </div>
                <ErrorMessage
                  name="locality"
                  component="span"
                  className="error"
                />
              </div>
              <div className="form__row">
                <div className="fieldInput">
                  <label htmlFor="address">Address</label>
                  <Field
                    type="address"
                    name="address"
                    id="address"
                    className={
                      errors.address && touched.address ? "input__error" : null
                    }
                  />
                </div>
                <ErrorMessage
                  name="address"
                  component="span"
                  className="error"
                />
              </div>
              <div className="buttons">
                <button
                  type="submit"
                  className={
                    !(dirty && isValid) ? "submitBtn disabledBtn" : "submitBtn"
                  }
                  disabled={!(dirty && isValid)}
                >
                  Payment
                </button>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default Payment;
