import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Meta from '../components/Meta';
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
    <>
      <Meta title={'Signup'} />
      <Container class1="signup-wrapper py-5 home-wrapper-2">
        <div className="row py-5 mb-5">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Signup</h3>
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
                  type="text"
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
                <CustomInput
                  className="mt-1"
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
                  <Link to="/forgot-password">Forgot Password</Link>
                  <div className="mt-3 d-flex justify-content-center align-items-center gap-10">
                    <button className="border-0 btn-primary" type="submit">
                      Create
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
