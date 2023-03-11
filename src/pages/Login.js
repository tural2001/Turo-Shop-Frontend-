import React from 'react';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
const Login = () => {
  return (
    <>
      <Meta title={'Login'} />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row py-5 mb-5">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Login</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="email" name="email" placeholder="Email" />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />

                <div>
                  <Link to="/forgot-password">Forgot Password</Link>
                  <div className="mt-3 d-flex justify-content-center align-items-center gap-10">
                    <button className="border-0 btn-primary">Login</button>
                    <Link to="/signup">
                      <button className="border-0 btn-primary">Signup</button>
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

export default Login;
