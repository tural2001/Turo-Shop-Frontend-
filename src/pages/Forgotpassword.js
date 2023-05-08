import React from 'react';
import { MDBContainer, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import CustomInput from '../components/CustomInput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/user/userSlice';

const Forgotpassword = () => {
  return (
    <div className="row bg">
      <div className="col-8 bg-image">
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
                // onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="mt-3"
                  //   value={formik.values.email}
                  //   onChange={formik.handleChange('email')}
                  //   onBluer={formik.handleBlur('email')}
                />
                {/* <div className="error text-danger">
                  {formik.touched.email && formik.errors.email}
                </div> */}
                <div>
                  <div className="mt-3 d-flex justify-content-center align-items-center gap-10">
                    <button
                      type="submit"
                      className="mb-4 w-100 bg-primary border"
                    >
                      <Link to={'/reset-password'} className="text-white">
                        Reset Password
                      </Link>
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
  );
};

export default Forgotpassword;
