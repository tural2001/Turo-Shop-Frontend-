import React from 'react';
import { MDBContainer, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CustomInput from '../components/CustomInput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../features/user/userSlice';

const forgotpasswordSchema = yup.object({
  password: yup.string().required('Password is Required'),
  confirmPassword: yup.string().required('Confirm password is Required'),
});

const Resetpassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const getToken = location.pathname.split('/')[2];
  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: forgotpasswordSchema,
    onSubmit: (values) => {
      dispatch(resetPassword({ token: getToken, password: values.password }));
      navigate('/login');
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
                <form
                  action=""
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column gap-15 mt-5"
                >
                  <CustomInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="mt-3"
                    value={formik.values.password}
                    onChange={formik.handleChange('password')}
                    onBluer={formik.handleBlur('password')}
                  />
                  <div className="error text-danger">
                    {formik.touched.password && formik.errors.password}
                  </div>
                  <CustomInput
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="mt-3"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange('confirmPassword')}
                    onBluer={formik.handleBlur('emaconfirmPasswordil')}
                  />
                  <div className="error text-danger">
                    {formik.touched.confirmPassword &&
                      formik.errors.confirmPassword}
                  </div>
                  <div>
                    <div className="mt-3 d-flex justify-content-center align-items-center gap-10">
                      <button
                        type="submit"
                        className="mb-4 w-100 bg-primary text-white border"
                      >
                        Ok
                      </button>
                    </div>
                  </div>
                </form>
                <div className="d-flex justify-content-between mx-4 mb-4"></div>
                <p className="text-center text-dark d-flex gap-10">
                  <Link to="/login">Cancel </Link>
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

export default Resetpassword;
