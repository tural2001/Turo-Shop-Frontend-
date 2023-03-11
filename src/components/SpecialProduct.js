import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const SpecialProduct = () => {
  return (
    <div className="col-4 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img src="images/oil.jpeg" className="img-fluid" alt="" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Castrol</h5>
            <h6 className="title">
              Castrol 03124 Edge 0W-20 Advanced Full Sintetik Motor Yağı, 5
              Quart
            </h6>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">
                100 azn <strike>200azn</strike>
              </span>
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
                <p>Məhsullar: 5</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '25%' }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
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
