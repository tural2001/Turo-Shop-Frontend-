import React from 'react';
import { Link } from 'react-router-dom';
import {
  BsLinkedin,
  BsGithub,
  BsWhatsapp,
  BsInstagram,
  BsFacebook,
} from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row justify-content-between">
            <div className="col-3">
              <div className="footer-top-data d-flex gap-15 align-items-center">
                <img src="images/location.svg" width="45px" alt="location" />
                <h4 className="mb-0 text-white fw-bolder">
                  Ünvan
                  <br /> <span className="fw-lighter fs-6">Baku.Azadlıq</span>
                </h4>
              </div>
            </div>
            <div className="col-3">
              <div className="footer-top-data d-flex gap-15 align-items-between">
                <img src="images/call.svg" width="55px" alt="location" />
                <h4 className="mb-0 text-white fw-bolder">
                  Əlaqə
                  <br />{' '}
                  <span className="fw-lighter fs-6">+994(55)239****</span>
                </h4>
              </div>
            </div>
            <div className="col-3">
              <div className="footer-top-data d-flex gap-15 align-items-center">
                <img src="images/mail.svg" width="45px" alt="mail" />
                <h4 className="mb-0 text-white fw-bolder">
                  Mail <br />
                  <span className="fw-lighter fs-6">
                    turalmemmedov01@mail.ru
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <h4 className="text-white mb-4">Məlumat</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className="text-white-50 py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white-50 py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white-50 py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/term-condition" className="text-white-50 py-2 mb-1">
                  Terms & Conditions
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Hesab</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white-50 py-2 mb-1">Haqqımızda</Link>
                <Link className="text-white-50 py-2 mb-1">Faq</Link>
                <Link className="text-white-50 py-2 mb-1">Əlaqə</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Link</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white-50 py-2 mb-1">Disklər</Link>
                <Link className="text-white-50 py-2 mb-1">Şinlər</Link>
                <Link className="text-white-50 py-2 mb-1">Yağlar</Link>
                <Link className="text-white-50 py-2 mb-1">Qatqılar</Link>
              </div>
            </div>
            <div className="col-6">
              <h4 className="text-white mb-4">Abunə olun</h4>
              <p className="text-white-50 fs-6">
                Yeniliklər üçün abunə olmağı unutmayın, xahiş edirik aşağıdakı
                formanı doldurun.
              </p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Email ünvanı"
                  aria-label="Email ünvanı"
                  aria-describedby="basic-addon2"
                />
                <button>
                  <img src="images/send.svg" height="60px" alt="" />
                </button>
              </div>
              <div className="social-icons d-flex align-items-center gap-30 mt-4">
                <a className="text-white" href="/">
                  <BsLinkedin className="fs-5" />
                </a>
                <a className="text-white" href="/">
                  <BsInstagram className="fs-5" />
                </a>
                <a className="text-white" href="/">
                  <BsGithub className="fs-5" />
                </a>
                <a className="text-white" href="/">
                  <BsFacebook className="fs-5" />
                </a>
                <a className="text-white" href="/">
                  <BsWhatsapp className="fs-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Developer's Tural
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
