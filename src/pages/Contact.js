import React from 'react';
import Container from '../components/Container';
import Meta from '../components/Meta';
import { AiOutlineHome } from 'react-icons/ai';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { createQuery } from '../features/contact/contactSlice';

const contactSchema = yup.object({
  name: yup.string().required('Name is Required'),
  mobile: yup.number().required('Mobile is Required'),
  comment: yup.string().required('Mobile is Required'),
  email: yup
    .string()
    .email(' Email should be Valid')
    .required('Email is Required'),
});

const Contact = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      comment: '',
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values));
      dispatch(createQuery(values));
    },
  });
  return (
    <>
      <Meta title={'Əlaqə'} />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Əlaqə</h3>
                <form
                  action=""
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column gap-15"
                >
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ad"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange('name')}
                      onBluer={formik.handleBlur('name')}
                    />
                  </div>
                  <div className="error text-danger">
                    {formik.touched.name && formik.errors.name}
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange('email')}
                      onBluer={formik.handleBlur('email')}
                    />
                    <div className="error text-danger">
                      {formik.touched.email && formik.errors.email}
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Telefon nömrəsi"
                      name="mobile"
                      value={formik.values.mobile}
                      onChange={formik.handleChange('mobile')}
                      onBluer={formik.handleBlur('mobile')}
                    />
                    <div className="error text-danger">
                      {formik.touched.mobile && formik.errors.mobile}
                    </div>
                  </div>
                  <div>
                    <textarea
                      id=""
                      className="w-90 form-control"
                      cols="30"
                      rows="4"
                      name="comment"
                      placeholder="Şərh"
                      value={formik.values.comment}
                      onChange={formik.handleChange('comment')}
                      onBluer={formik.handleBlur('comment')}
                    ></textarea>
                    <div className="error text-danger">
                      {formik.touched.comment && formik.errors.comment}
                    </div>
                  </div>
                  <div>
                    <button type="submit" class="btn btn-contact">
                      <span>Göndər</span>
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Bizə Müraciət Edin</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-5 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-4" />
                      <address className="mb-0 mt-2">
                        Babak 7, Araz market yaxınlığı,dayanacağın yanı
                      </address>
                    </li>
                    <li className="mb-5 d-flex gap-15 align-items-center">
                      <BsFillTelephoneInboundFill className="fs-6" />
                      <a href="tel:+994 7777777">+994 077-777-7777</a>
                    </li>
                    <li className="mb-5 d-flex gap-15 align-items-center">
                      <BsFillEnvelopeFill className="fs-6" />
                      <a href="mailto:tural@mail.ru">tural@mail.ru</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineInfoCircle className="fs-6" />
                      <p className="mb-0">1-5 günlər 9:00-18:00-dək</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6  d-flex  align-items-center">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96970.1375653932!2d49.56104081012017!3d40.578762149797164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403096dcd0923f6b%3A0xdf4767c369322a71!2zU3VtcWF5xLF0!5e0!3m2!1str!2saz!4v1678136232703!5m2!1str!2saz"
              width="600"
              height="450"
              className="w-100"
              allowFullScreen="auto"
              loading="lazy"
              style={{ borderRadius: '30px' }}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
