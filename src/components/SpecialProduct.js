import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const SpecialProduct = (props) => {
  const { title, brand, price, quantity, totalrating, sold } = props;

  return (
    <div className="col-4 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img src="images/oil.jpeg" className="img-fluid" alt="" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">{brand}</h5>
            <h6 className="title">{title}</h6>
            <ReactStars
              count={5}
              size={24}
              value={totalrating}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">{price}azn</span> &nbsp;
              {/* <strike>200azn</strike> */}
            </p>
            <div className="discount-till">
              <p>
                <b>5 gün</b>
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>
              </div>
              <div className="prod-count my-3">
                <p>Məhsullar: {quantity}</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: (sold / (quantity + sold)) * 100 + '%' }}
                    aria-valuenow={sold}
                    aria-valuemin={0}
                    aria-valuemax={quantity + sold}
                  ></div>
                </div>
              </div>
              <Link>
                <button className="btn btn-warning btn-sm">
                  Səbətə əlavə et
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
