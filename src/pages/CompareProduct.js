import React from 'react';
import Meta from '../components/Meta';
import Container from '../components/Container';

const CompareProduct = () => {
  return (
    <>
      <Meta title={'Compare Products'} />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                className="position-absolute cross img-fluid"
                alt="cross"
              />
              <div className="product-card-image">
                <img src="images/disk.webp" alt="disk" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">Disk R18 Vossen</h5>
                <h6 className="price mb-3">100 azn</h6>

                <div>
                  <div className="product-detail">
                    <h5>Brend</h5>
                    <p>Vossen</p>
                  </div>
                  <div className="product-detail">
                    <h5>Mövcud</h5>
                    <p>Stokda var</p>
                  </div>
                  <div className="product-detail">
                    <h5>Ölçü</h5>
                    <p>R18</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                className="position-absolute cross img-fluid"
                alt="cross"
              />
              <div className="product-card-image">
                <img src="images/disk.webp" alt="disk" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">Disk R18 Vossen</h5>
                <h6 className="price mb-3">100 azn</h6>

                <div>
                  <div className="product-detail">
                    <h5>Brend</h5>
                    <p>Vossen</p>
                  </div>
                  <div className="product-detail">
                    <h5>Mövcud</h5>
                    <p>Stokda var</p>
                  </div>
                  <div className="product-detail">
                    <h5>Ölçü</h5>
                    <p>R18</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;
