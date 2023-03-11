import React from 'react';
import Meta from '../components/Meta';
import BreadCrump from '../components/BreadCrump';
import Container from '../components/Container';

const PrivacyPolicy = () => {
  return (
    <>
      <Meta title={'PrivacyPolicy'} />
      <BreadCrump title={'Privacy'} />

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

export default PrivacyPolicy;
