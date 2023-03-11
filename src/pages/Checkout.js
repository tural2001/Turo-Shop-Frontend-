import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import oil from '../images/oil.jpeg';
import Container from '../components/Container';

const Checkout = () => {
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
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Ölkə Seç
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Ad"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Soyad"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="address"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Küçə"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Şəhər"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Metro Seç
                    </option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="ZipCode"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart">
                      <BiArrowBack />
                      Səbətə geri dön
                    </Link>
                    <Link to="/cart" className="button">
                      Alışa davam et
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: '-10px', right: '2px' }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                    >
                      1
                    </span>
                    <img src={oil} className="img-fluid" alt="" />
                  </div>
                  <div>
                    <h5 className="total">Castrol yagi</h5>
                    <p className="total-price">/ #B2873</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5>100 azn</h5>
                </div>
              </div>
            </div>

            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Məbləğ</p>
                <p className="total-price">1000 azn</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Alıs-veriş</p>
                <p className="mb-0 total-price">1000 azn</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-4">
              <p className="total">Toplam Məbləğ</p>
              <p className="total-price">1000 azn</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
