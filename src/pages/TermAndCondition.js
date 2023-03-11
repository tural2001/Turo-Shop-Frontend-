import React from 'react';
import Meta from '../components/Meta';
import BreadCrump from '../components/BreadCrump';
import Container from '../components/Container';

const TermAndCondition = () => {
  return (
    <>
      <Meta title={'Term And Condition'} />
      <BreadCrump title={'Condition'} />

      <Container className="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermAndCondition;
