import React, { useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { SlLike } from 'react-icons/sl';
import { FaUser } from 'react-icons/fa';
import { SlBasket } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { Typeahead } from 'react-bootstrap-typeahead'; // ES2015
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { getAProduct } from '../features/products/productSlice';
import { FiLogOut } from 'react-icons/fi';
import { getUserCart } from '../features/user/userSlice';

const Header = () => {
  const [showInput, setShowInput] = useState(false);
  const [total, setTotal] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const authState = useSelector((state) => state?.auth);
  const productState = useSelector((state) => state?.product?.product);
  const updateState = useSelector(
    (state) => state?.auth?.updatedProfile?.updateaUser
  );
  const [productOpt, setProductOpt] = useState([]);
  const [paginate, setPaginate] = useState(true);

  const getTokenFromLocalStorage = localStorage.getItem('customer')
    ? JSON.parse(localStorage.getItem('customer'))
    : null;

  const config2 = {
    headers: {
      Authorization: `Bearer ${
        getTokenFromLocalStorage !== null ? getTokenFromLocalStorage?.token : ''
      }`,
      Accept: 'application/json',
    },
  };

  useEffect(() => {
    dispatch(getUserCart(config2));
  }, []);

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum = sum + Number(cartState[index]?.quantity) * cartState[index]?.price;
      setTotal(sum);
    }
  }, [cartState]);

  useEffect(() => {
    let data = [];
    for (let index = 0; index < productState?.length; index++) {
      const element = productState[index];
      data.push({ id: index, prod: element?._id, name: element?.title });
    }
    setProductOpt(data);
  }, [productState]);

  const handleIconClick = () => {
    setShowInput(!showInput);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <header className="header-top-strip">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              {/* <p className="text-white mb-0">
                100 AZN-dən yuxarı pulsuz çatdırılma
              </p> */}
            </div>
            <div className="col-6 d-flex justify-content-end">
              <a className="text-white" href="tel:+994 552391112">
                Əlaqə: +994 55-239-11-12
              </a>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper head py-3">
        <div className="container-xxl">
          <div className="row  align-items-center justify-content-between">
            <div className="col-3  d-flex justify-content-space align-items-center ">
              <img
                src="https://api.logo.com/api/v2/images?logo=logo_27bcec54-c41d-4a85-a096-3c43dc1a1c48&format=webp&margins=0&quality=60&width=500&background=transparent&u=1683752902"
                alt=""
                width={100}
              />
              <h2 className="mt-3">
                <Link to="/" className="text-white first-link">
                  Turo Store
                </Link>
              </h2>
            </div>
            <div className="col-4">
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
                  <Typeahead
                    id="pagination-example"
                    onPaginate={() => console.log('Results paginated')}
                    onChange={(selected) => {
                      navigate(`/product/${selected[0]?.prod}`);
                      dispatch(getAProduct(selected[0]?.prod));
                    }}
                    minLength={2}
                    options={productOpt}
                    paginate={paginate}
                    labelKey={'name'}
                    placeholder="Search for Products here..."
                  />
                )}
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-end gap-20">
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
                    to={authState?.user === null ? '/login' : '/my-profile'}
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <FaUser className="fs-4" />
                    {authState?.user === null ? (
                      <p className="mb-0">
                        Giriş <br /> Hesabım
                      </p>
                    ) : (
                      <p className="mb-0">
                        Welcome <br /> {authState?.user?.name}
                        {updateState?.name}
                      </p>
                    )}
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <SlBasket className="fs-3" />

                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">
                        {cartState?.length ? cartState?.length : 0}
                      </span>
                      <p className="mb-0">{total ? total : 0}Azn</p>
                    </div>
                  </Link>
                </div>
                <button
                  onClick={handleLogout}
                  className="border border-0 bg-transparent text-white text-uppercase"
                  type="button"
                >
                  {authState?.user === null ? (
                    ''
                  ) : (
                    <FiLogOut className="fs-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex justify-content-center align-items-center">
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-20">
                    <NavLink to="/">Əsas</NavLink>
                    <NavLink to="/product">Məhsullar</NavLink>
                    <NavLink to="/my-orders">Mənim Sifarişim</NavLink>
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
