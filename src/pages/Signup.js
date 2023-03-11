import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Meta from '../components/Meta';
import CustomInput from '../components/CustomInput';

const Signup = () => {
  return (
    <>
      <Meta title={'Signup'} />
      <Container class1="signup-wrapper py-5 home-wrapper-2">
        <div className="row py-5 mb-5">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Signup</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="text" name="name" placeholder="Ad" />
                <CustomInput type="text" name="email" placeholder="Email" />
                <CustomInput
                  type="tel"
                  name="Mobile"
                  placeholder="Telefon Nömrəsi"
                />
                <CustomInput
                  className="mt-1"
                  type="password"
                  name="password"
                  placeholder="Password"
                />

                <div>
                  <Link to="/forgot-password">Forgot Password</Link>
                  <div className="mt-3 d-flex justify-content-center align-items-center gap-10">
                    <button className="border-0 btn-primary" type="submit">
                      Create
                    </button>
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

export default Signup;
