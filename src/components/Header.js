import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { GoGitCompare } from 'react-icons/go';
import { SlLike } from 'react-icons/sl';
import { FaUser } from 'react-icons/fa';
import { SlBasket } from 'react-icons/sl';

const Header = () => {
  const [showInput, setShowInput] = useState(false);

  const handleIconClick = () => {
    setShowInput(!showInput);
  };

  return (
    <>
      <header className="header-top-strip">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                100 AZN-dən yuxarı pulsuz çatdırılma
              </p>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <a className="text-white" href="tel:+994 8721231">
                Əlaqə: +994 55-239-11-12
              </a>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper head py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2 mt-3">
              <h2>
                <Link to="/" className="text-white first-link">
                  Turo Store
                </Link>
              </h2>
            </div>
            <div className="col-5">
              <div
                className="input-group"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <span
                  className="input-group-text bg-white"
                  onClick={handleIconClick}
                  id="basic-addon2"
                >
                  <BsSearch className="fs-6" />
                </span>
                {showInput && (
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Məhsulu burada axtarın..."
                    aria-label="Məhsulu burada axtarın..."
                    aria-describedby="basic-addon2"
                  />
                )}
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <GoGitCompare className="fs-4" />
                    <p className="mb-0">
                      Məhsul{' '}
                      <span>
                        <br /> Müqayisəsi
                      </span>
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <SlLike className="fs-4" />
                    <p className="mb-0">
                      Sevimlilər <br />
                      siyahısı
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <FaUser className="fs-4" />
                    <p className="mb-0">
                      Giriş <br /> Hesabım
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <SlBasket className="fs-3" />

                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">200Azn</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex justify-content-between align-items-center">
                <div className="drop">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="images/menu.svg" alt="" />
                      <span className="me-5 ">Kateqoriyalar</span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Əsas</NavLink>
                    <NavLink to="/product">Məhsullar</NavLink>
                    <NavLink to="/services">Xidmətlər</NavLink>
                    <NavLink to="/contact">Əlaqə</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
