import React from 'react';
import Container from '../components/Container';
import Meta from '../components/Meta';

const Resetpassword = () => {
  return (
    <>
      <Meta title={'Signup'} />
      <Container class1="signup-wrapper py-5 home-wrapper-2">
        <div className="row py-5 mb-5">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Reset Password</h3>
              <form action="" className="d-flex flex-column gap-15">
                <Container
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <Container
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />

                <div>
                  <div className="mt-3 d-flex justify-content-center align-items-center gap-10">
                    <button className="border-0 btn-primary" type="submit">
                      Ok
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

export default Resetpassword;
