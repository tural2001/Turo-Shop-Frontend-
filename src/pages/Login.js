import React from 'react';
import {
  MDBContainer,
  MDBTabsContent,
  MDBTabsPane,
  MDBCheckbox,
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import CustomInput from '../components/CustomInput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/user/userSlice';
import { useEffect } from 'react';

const loginSchema = yup.object({
  email: yup
    .string()
    .email(' Email should be Valid')
    .required('Email is Required'),
  password: yup.string().required('Password is Required'),
});

const Login = () => {
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();
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

  useEffect(() => {
    if (authState.isSuccess) {
      navigate('/');
    }
  }, [authState.isSuccess, navigate]);

  return (
    <div className="auth overflow-hidden bg-light py-5">
      <div className="row py-5">
        <div className="col-4 bg-white">
          <img src="images/logo.webp" alt="" />
        </div>
        <div className="col-7 bg-white ">
          <MDBContainer className="py-5 my-5 d-flex flex-column w-50">
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
    </div>
  );
};

export default Login;
