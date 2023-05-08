import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from 'mdb-react-ui-kit';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/user/userSlice';

const loginSchema = yup.object({
  email: yup
    .string()
    .email(' Email should be Valid')
    .required('Email is Required'),
  password: yup.string().required('Password is Required'),
});

const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  return (
    <div className="row bg">
      <div className="col-8 bg-image">
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <MDBTabsContent>
            <MDBTabsPane show={'tab1'}>
              <h4 className="d-flex justify-content-center mb-5 ">Login</h4>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange('email')}
                  onBluer={formik.handleBlur('email')}
                />
                <div className="error text-danger">
                  {formik.touched.email && formik.errors.email}
                </div>
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange('password')}
                  onBluer={formik.handleBlur('password')}
                />
                <div className="error text-danger">
                  {formik.touched.password && formik.errors.password}
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center align-items-center gap-10">
                    <button className="mb-4 w-100 bg-primary text-white border">
                      Sign In
                    </button>
                  </div>
                </div>
              </form>
              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                />
                <Link to="/forgot-password">Forgot Password</Link>
              </div>
              <p className="text-center text-dark d-flex gap-10">
                Not a member? <Link to="/signup">Register </Link>
              </p>{' '}
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBContainer>
      </div>
    </div>
  );
};

export default Login;
