import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../features/user/userSlice';
import { AiOutlineEdit } from 'react-icons/ai';

const profileSchema = yup.object({
  name: yup.string().required('Name is Required'),
  email: yup
    .string()
    .email(' Email should be Valid')
    .required('Email is Required'),
  mobile: yup.number().required('Mobile is Required'),
});

const Profile = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state?.auth?.user);
  const [edit, setEdit] = useState(true);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: userState?.name,
      email: userState?.email,
      mobile: userState?.mobile,
    },
    validationSchema: profileSchema,
    onSubmit: (values) => {
      dispatch(updateProfile(values));
      setTimeout(() => {
        localStorage.setItem(
          'customer',
          JSON.stringify({
            ...JSON.parse(localStorage.getItem('customer')),
            ...values,
          })
        );
      }, 100);

      setEdit(true);
    },
  });

  return (
    <div className="px-5 py-5">
      <div className="row">
        <div className="col-12">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mb-5">
              <h3>Update Profile</h3>
              <AiOutlineEdit onClick={() => setEdit(false)} className="fs-1" />
            </div>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="name"
                disabled={edit}
                className="form-control"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange('name')}
                onBlur={formik.handleBlur('name')}
              />
              <div className="error text-danger">
                {formik.touched.name && formik.errors.name}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                disabled={edit}
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}
              />
              <div className="error text-danger">
                {formik.touched.email && formik.errors.email}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">
                Mobile
              </label>
              <input
                disabled={edit}
                type="number"
                className="form-control"
                id="mobile"
                name="mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange('mobile')}
                onBlur={formik.handleBlur('mobile')}
              />
              <div className="error text-danger">
                {formik.touched.mobile && formik.errors.mobile}
              </div>
            </div>
            {edit === false && (
              <button type="submit" className="">
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
