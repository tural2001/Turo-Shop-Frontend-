import React from 'react';
import Meta from '../components/Meta';
import BreadCrump from '../components/BreadCrump';
import Container from '../components/Container';

const Wishlist = () => {
  return (
    <>
      <Meta title={'Wishlist'} />
      <BreadCrump title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                className="position-absolute cross img-fluid"
                alt="cross"
              />
              <div className="wishlist-card-image">
                <img src="images/disk.webp" alt="disk" />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">Disk R18 Vossen</h5>
                <h6 className="price mb-3">100 azn</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                className="position-absolute cross img-fluid"
                alt="cross"
              />
              <div className="wishlist-card-image">
                <img src="images/disk.webp" alt="disk" />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">Disk R18 Vossen</h5>
                <h6 className="price mb-3">100 azn</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                className="position-absolute cross img-fluid"
                alt="cross"
              />
              <div className="wishlist-card-image">
                <img src="images/disk.webp" alt="disk" />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">Disk R18 Vossen</h5>
                <h6 className="price mb-3">100 azn</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
