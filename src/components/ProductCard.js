import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';
import mainbanner from '../images/main-banner-1.jpg';
import disk from '../images/disk.webp';
import prodcompare from '../images/prodcompare.svg';
import view from '../images/view.svg';
import addcart from '../images/add-cart.svg';
import wish from '../images/wish.svg';

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={`${
          location.pathname === '/product' ? `gr-${grid}` : 'col-12'
        }`}
      >
        <Link
          to={`${
            location.pathname === '/product'
              ? '/product/:id'
              : location.pathname === '/product/:id'
              ? '/product/:id'
              : ':id'
          }`}
          className="product-card position-relative "
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={disk} className="img-fluid" alt="product" />
            <img src={mainbanner} className="img-fluid" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">Castrol</h6>
            <h5 className="product-title">Vossen R18,270 </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              iusto quam numquam ullam, nemo fugit ut sed tempora odit
              praesentium voluptates impedit.
            </p>
            <p className="price">100 azn</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === '/product' ? 'col-12' : `gr-${grid}`
        }`}
      >
        <Link to="/product/:id" className="product-card position-relative ">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={disk} className="img-fluid" alt="product" />
            <img src={mainbanner} className="img-fluid" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">Castrol</h6>
            <h5 className="product-title">Vossen R18,270 </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              iusto quam numquam ullam, nemo fugit ut sed tempora odit
              praesentium voluptates impedit.
            </p>
            <p className="price">100 azn</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
