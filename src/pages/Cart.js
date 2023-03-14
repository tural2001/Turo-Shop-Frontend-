import React from 'react';
import Meta from '../components/Meta';
import disk from '../images/disk.webp';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const Cart = () => {
  return (
    <>
      <Meta title={'Cart'} />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1 d-flex align-items-center">Məhsul</h4>
              <h4 className="cart-col-2">Qiymət</h4>
              <h4 className="cart-col-3">Say</h4>
              <h4 className="cart-col-4">Toplam</h4>
            </div>
            <div className="cart-data  mb-2 py-3 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img src={disk} className="img-fluid" alt="productimage" />
                </div>
                <div className="w-75">
                  <p>Vossen</p>
                  <p>Ölçü: R18</p>
                </div>
              </div>
              <div className="cart-col-2 d-flex align-items-center">
                <h5 className="price">100 azn</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="form-control"
                    min={1}
                    max={10}
                  />
                </div>
                <div>
                  <AiFillDelete className="text-danger" />
                </div>
              </div>
              <div className="cart-col-4 d-flex align-items-center">
                <h5 className="price">100 azn</h5>
              </div>
            </div>
          </div>
          <div className="col-12 py-1 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Davam etmək
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>Ümumi : 1000 AZN</h4>
                <p>Toplam dəyər</p>
                <Link to="/checkout" className="button">
                  Yoxla
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
