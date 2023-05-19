import React from 'react';
import { MDBContainer, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import CustomInput from '../components/CustomInput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { forgotPasswordToken } from '../features/user/userSlice';

const forgotpasswordSchema = yup.object({
  email: yup
    .string()
    .email(' Email should be Valid')
    .required('Email is Required'),
});

const Forgotpassword = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: forgotpasswordSchema,
    onSubmit: (values) => {
      dispatch(forgotPasswordToken(values));
    },
  });
  return (
    <div className="auth overflow-hidden bg-light py-5">
      <div className="row py-5">
        <div className="col-4 bg-white">
          <img src="images/logo.webp" alt="" />
        </div>
        <div className="col-7 bg-white">
          <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <MDBTabsContent>
              <MDBTabsPane show={'tab1'}>
                <h4 className="d-flex justify-content-center">
                  Reset your password
                </h4>
                <h6 className="d-flex justify-content-center">
                  We will send you
                </h6>
                <form
                  action=""
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column gap-15"
                >
                  <CustomInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="mt-3"
                    value={formik.values.email}
                    onChange={formik.handleChange('email')}
                    onBluer={formik.handleBlur('email')}
                  />
                  <div className="error text-danger">
                    {formik.touched.email && formik.errors.email}
                  </div>
                  <div>
                    <div className="mt-3 d-flex justify-content-center align-items-center gap-10">
                      <button
                        type="submit"
                        className="mb-4 w-100 bg-primary border"
                      >
                        Reset Password
                      </button>
                    </div>
                  </div>
                </form>
                <div className="d-flex justify-content-between mx-4 mb-4"></div>
                <p className="text-center text-dark d-flex gap-10">
                  Have a account? <Link to="/login">Cancel </Link>
                </p>{' '}
              </MDBTabsPane>
            </MDBTabsContent>
          </MDBContainer>
        </div>
      </div>
      /
    </div>
  );
};

export default Forgotpassword;
