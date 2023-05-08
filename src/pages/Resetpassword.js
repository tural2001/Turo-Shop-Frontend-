import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
} from 'mdb-react-ui-kit';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import CustomInput from '../components/CustomInput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

const Resetpassword = () => {
  return (
    <div className="row bg">
      <div className="col-8 bg-image">
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <MDBTabsContent>
            <MDBTabsPane show={'tab1'}>
              <h5 className="d-flex justify-content-center mb-5">
                Reset Password
              </h5>
              <form
                action=""
                // onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  //   value={formik.values.email}
                  //   onChange={formik.handleChange('email')}
                  //   onBluer={formik.handleBlur('email')}
                />
                {/* <div className="error text-danger">
                  {formik.touched.email && formik.errors.email}
                </div> */}
                <CustomInput
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  //   value={formik.values.password}
                  //   onChange={formik.handleChange('password')}
                  //   onBluer={formik.handleBlur('password')}
                />
                {/* <div className="error text-danger">
                  {formik.touched.password && formik.errors.password}
                </div> */}
                <div>
                  <div className="mt-3 d-flex justify-content-center align-items-center gap-10">
                    <button
                      type="submit"
                      className="mb-4 w-100 bg-primary text-white border"
                    >
                      Ok
                    </button>
                  </div>
                  <p className="text-center text-dark d-flex gap-10">
                    <Link to="/login">Cancel</Link>
                  </p>{' '}
                </div>
              </form>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBContainer>
      </div>
    </div>
  );
};

export default Resetpassword;
