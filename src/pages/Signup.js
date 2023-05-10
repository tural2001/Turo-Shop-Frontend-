import React from 'react';
import { MDBContainer, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import CustomInput from '../components/CustomInput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/user/userSlice';

const signUpSchema = yup.object({
  name: yup.string().required('Name is Required'),
  email: yup
    .string()
    .email(' Email should be Valid')
    .required('Email is Required'),
  mobile: yup.string().required('Mobile No is Required'),
  password: yup.string().required('Password is Required'),
});

const Signup = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      password: '',
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });

  return (
    <div className="auth overflow-hidden bg-light py-5">
      <div className="row py-5">
        <div className="col-4 bg-white">
          <img
            src="https://api.logo.com/api/v2/images?logo=logo_27bcec54-c41d-4a85-a096-3c43dc1a1c48&format=webp&margins=0&quality=60&width=500&background=transparent&u=1683711688"
            alt=""
          />
        </div>
        <div className="col-7 bg-white">
          <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <MDBTabsContent>
              <MDBTabsPane show={'tab1'}>
                <h4 className="d-flex justify-content-center mb-5">Register</h4>
                <form
                  action=""
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column gap-15"
                >
                  <CustomInput
                    type="text"
                    name="name"
                    placeholder="Ad"
                    value={formik.values.name}
                    onChange={formik.handleChange('name')}
                    onBluer={formik.handleBlur('name')}
                  />
                  <div className="error text-danger">
                    {formik.touched.name && formik.errors.name}
                  </div>
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
                  <CustomInput
                    type="tel"
                    name="Mobile"
                    placeholder="Telefon Nömrəsi"
                    value={formik.values.mobile}
                    onChange={formik.handleChange('mobile')}
                    onBluer={formik.handleBlur('mobile')}
                  />
                  <div className="error text-danger">
                    {formik.touched.mobile && formik.errors.mobile}
                  </div>

                  <div>
                    <div className="mt-3 d-flex justify-content-center align-items-center gap-10">
                      <button className="mb-4 w-100 bg-primary text-white border">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </form>
                <p className="text-center text-dark d-flex gap-10">
                  Already have an account? <Link to="/login">Login </Link>
                </p>{' '}
              </MDBTabsPane>
            </MDBTabsContent>
          </MDBContainer>
        </div>
      </div>
    </div>
  );
};

export default Signup;
