import React, { useEffect } from 'react';
import { MDBContainer, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import CustomInput from '../components/CustomInput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
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
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();
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

  useEffect(() => {
    if (authState.createdUser !== null && authState.isError !== false) {
      navigate('/login');
    }
  }, [authState.createdUser, authState.isError, navigate]);

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
                  Already have an account?{' '}
                  <Link type="submit" to="/login">
                    Login{' '}
                  </Link>
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
