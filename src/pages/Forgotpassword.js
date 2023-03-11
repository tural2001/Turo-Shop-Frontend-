import React from 'react';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const Forgotpassword = () => {
  return (
    <>
      <Meta title={'Forgotpassword'} />
      <Container class1="forgot-wrapper py-5 home-wrapper-2">
        <div className="row py-5 mb-5">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset your password</h3>
              <p className="text-center my-2 mb-3">
                We will send you an email reset your password
              </p>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="email" name="email" placeholder="Email" />
                <div>
                  <div className="mt-3 d-flex justify-content-center flex-column align-items-center gap-15">
                    <button className="border-0 btn-primary" type="submit">
                      Submit
                    </button>
                    <Link to="/login">
                      <h5>Cancel</h5>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Forgotpassword;
