import React from 'react';
import Meta from '../components/Meta';
import BreadCrump from '../components/BreadCrump';
import Container from '../components/Container';

const ShippingPolicy = () => {
  return (
    <>
      <Meta title={'ShippingPolicy'} />
      <BreadCrump title={'shipping'} />

      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShippingPolicy;
