import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';

const shippingSchema = yup.object({
  firstname: yup.string().required('First Name is required'),
  lastname: yup.string().required('Last Name is required'),
  country: yup.string().required('Country is required'),
  state: yup.string().required('State is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  metro: yup.string().required('Metro is required'),
  pincode: yup.number().required('City is required'),
});

const Checkout = () => {
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(null);
  const [shippingInfo, setShinppingInfo] = useState(null);

  const cartState = useSelector((state) => state.auth.cartProducts);
  console.log(cartState);

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum = sum + Number(cartState[index]?.quantity) * cartState[index]?.price;
      setTotalAmount(sum);
    }
  }, [cartState]);

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      country: '',
      state: '',
      city: '',
      address: '',
      metro: '',
      pincode: '',
    },
    validationSchema: shippingSchema,
    onSubmit: async (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Turo Shop</h3>
              <nav
                style={{ '--bs-breadcrumb-divider': '>' }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" to="/cart">
                      Səbət
                    </Link>
                  </li>
                  &nbsp;/
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Məlumat
                  </li>
                  &nbsp;/
                  <li
                    className="breadcrumb-item total-price active "
                    aria-current="page"
                  >
                    Alış-Veriş
                  </li>
                  &nbsp;/
                  <li
                    className="breadcrumb-item total-price active "
                    aria-current="page"
                  >
                    Ödəmə
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Əlaqə Məlumatları</h4>
              <p className="user-details">Tural Memmedov (tural@mail.ru)</p>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select
                    name="country"
                    className="form-control form-select"
                    value={formik.values.country}
                    onChange={formik.handleChange('country')}
                    onBlur={formik.handleBlur('country')}
                    id=""
                  >
                    <option value="" disabled>
                      Ölkə Seç
                    </option>
                    <option value="Azerbaycan">Azerbaycan</option>
                    <option value="Turkiye">Turkiye</option>
                  </select>
                  <div className="error text-danger">
                    {formik.touched.country && formik.errors.country}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Ad"
                    className="form-control"
                    name="firstname"
                    value={formik.values.firstname}
                    onChange={formik.handleChange('firstname')}
                    onBlur={formik.handleBlur('firstname')}
                  />
                  <div className="error text-danger">
                    {formik.touched.firstname && formik.errors.firstname}
                  </div>
                </div>

                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Soyad"
                    className="form-control"
                    name="lastname"
                    value={formik.values.lastname}
                    onChange={formik.handleChange('lastname')}
                    onBlur={formik.handleBlur('lastname')}
                  />
                  <div className="error text-danger">
                    {formik.touched.lastname && formik.errors.lastname}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="address"
                    className="form-control"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange('address')}
                    onBlur={formik.handleBlur('address')}
                  />
                  <div className="error text-danger">
                    {formik.touched.address && formik.errors.address}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Küçə"
                    className="form-control"
                    name="state"
                    value={formik.values.state}
                    onChange={formik.handleChange('state')}
                    onBlur={formik.handleBlur('state')}
                  />
                  <div className="error text-danger">
                    {formik.touched.state && formik.errors.state}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <select
                    name="city"
                    className="form-control form-select"
                    value={formik.values.city}
                    onChange={formik.handleChange('city')}
                    onBlur={formik.handleBlur('city')}
                    id=""
                  >
                    <option value="" disabled>
                      Seher Seç
                    </option>
                    <option value="Azerbaycan">Baki</option>
                    <option value="Turkiye">Sumqayit</option>
                  </select>
                  <div className="error text-danger">
                    {formik.touched.city && formik.errors.city}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <select
                    name="metro"
                    className="form-control form-select"
                    value={formik.values.metro}
                    onChange={formik.handleChange('metro')}
                    onBlur={formik.handleBlur('metro')}
                    id=""
                  >
                    <option value="" disabled>
                      Metro Seç
                    </option>
                    <option value="nizami">nizami</option>
                    <option value="genclik">genclik</option>
                  </select>
                  <div className="error text-danger">
                    {formik.touched.metro && formik.errors.metro}
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="ZipCode"
                    className="form-control"
                    value={formik.values.pincode}
                    onChange={formik.handleChange('pincode')}
                    onBlur={formik.handleBlur('pincode')}
                  />
                  <div className="error text-danger">
                    {formik.touched.pincode && formik.errors.pincode}
                  </div>
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart">
                      <BiArrowBack />
                      Səbətə geri dön
                    </Link>
                    <Link to={'/cart'} type="submit" className="button">
                      Alışa davam et
                    </Link>
                    <button type="submit">Sifariş verin</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              {cartState &&
                cartState?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="d-flex gap-10 align-items-center"
                    >
                      <div className="w-100 d-flex gap-10">
                        <div className="w-100 position-relative">
                          <span
                            style={{ top: '0rem', left: '5.5rem' }}
                            className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                          >
                            {item?.quantity}
                          </span>
                          <img
                            src={item?.productId?.images[0]?.url}
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="border-bottom py-4">
                        <div>
                          <h5 className="total">{item?.productId?.title}</h5>
                          <p className="total-price"></p>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5>{item?.price * item?.quantity} azn</h5>
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Məbləğ</p>
                <p className="total-price">
                  {' '}
                  {totalAmount ? totalAmount : 0} azn
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Alıs-veriş</p>
                <p className="mb-0 total-price">
                  {totalAmount > 200 ? 5 : 2} azn
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-4">
              <p className="total">Toplam Məbləğ</p>
              <p className="total-price">
                {totalAmount ? totalAmount + (totalAmount > 200 ? 5 : 2) : 0}{' '}
                azn
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
