import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Meta from '../components/Meta';

const Services = () => {
  return (
    <>
      <Meta title={'Xidmətlər'} />
      <Container class1="services-wrapper-1 py-5 ">
        <div className="row">
          <div className="col-12">
            <div className="logo d-flex justify-content-center animate__animated animate__flipInX">
              <b>
                Tu<span>ro </span>Ser<span>vi</span>ce
              </b>
            </div>
          </div>
          <div className="col-12">
            <p className="d-flex justify-content-center mt-3 animate__heartBeat">
              “Biz sizin bütün avtomobil ehtiyaclarınız üçün buradayıq,
              təhlükəsiz və rahat gediş üçün bizə etibar edin!
            </p>
          </div>
        </div>
      </Container>
      <Container class1="marque-wrapper py-2 bg-light">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper ">
                <Marquee className="">
                  <div className="mx-4 w-25">
                    <img src="images/opel.svg" width="60px" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/bmw.svg" width="60px" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/chrysler.svg" width="60px" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/mercedes.svg" width="60px" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/kia.svg" width="60px" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/hyundai.svg" width="60px" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/romeo.svg" width="60px" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="services-wrapper-2 py-5">
        <div className="row">
          <div className="col-12 mb-3">
            <h3 className="section-heading">Diaqnostika</h3>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-4">
            <div className="im">
              <img
                src="images/blog-1.jpeg"
                className="img-fluid rounded-pill"
                alt="diagnostic"
              />
            </div>
          </div>
          <div className="col-8 py-2">
            <div className="check">
              <ul className="d-flex flex-column justify-content-center gap-15 ">
                <li className="d-flex gap-10">
                  <img
                    src="images/check.svg"
                    className="img-fluid mb-2"
                    alt=""
                  />
                  <p className="mb-0">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Necessitatibus magnam commodi eos cupiditate fugiat, Et,
                    obcaecati!
                  </p>
                </li>
                <li className="d-flex gap-10">
                  <img
                    src="images/check.svg"
                    className="img-fluid mb-0"
                    alt=""
                  />
                  <p className="mb-0">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Necessitatibus magnam commodi eos cupiditate fugiat, Et,
                    obcaecati!
                  </p>
                </li>
                <li className="d-flex gap-10">
                  <img
                    src="images/check.svg"
                    className="img-fluid mb-0"
                    alt=""
                  />
                  <p className="mb-0">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Necessitatibus magnam commodi eos cupiditate fugiat, Et,
                    obcaecati!
                  </p>
                </li>
                <li className="d-flex gap-10">
                  <img
                    src="images/check.svg"
                    className="img-fluid mb-0"
                    alt=""
                  />
                  <p className="mb-0">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Necessitatibus magnam commodi eos cupiditate fugiat, Et,
                    obcaecati!
                  </p>
                </li>
              </ul>
              <div className="d-flex click mb-1">
                <Link to="/login" className="d-flex gap-15 ">
                  <button class="custom-btn btn-3">
                    <span>Bizə Qoşul</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 mb-3">
            <h3 className="section-heading">Yağlama</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div>
              <img
                src="images/oil-change.jpeg"
                className="img-fluid rounded-pill"
                alt="diagnostic"
              />
            </div>
          </div>
          <div className="col-8 py-2">
            <div className="check">
              <ul className="d-flex flex-column justify-content-center gap-15">
                <li className="d-flex gap-10">
                  <img
                    src="images/check.svg"
                    className="img-fluid mb-2"
                    alt=""
                  />
                  <p className="mb-0">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Necessitatibus magnam commodi eos cupiditate fugiat, Et,
                    obcaecati!
                  </p>
                </li>
                <li className="d-flex gap-10">
                  <img
                    src="images/check.svg"
                    className="img-fluid mb-0"
                    alt=""
                  />
                  <p className="mb-0">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Necessitatibus magnam commodi eos cupiditate fugiat, Et,
                    obcaecati!
                  </p>
                </li>
                <li className="d-flex gap-10">
                  <img
                    src="images/check.svg"
                    className="img-fluid mb-0"
                    alt=""
                  />
                  <p className="mb-0">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Necessitatibus magnam commodi eos cupiditate fugiat, Et,
                    obcaecati!
                  </p>
                </li>
                <li className="d-flex gap-10">
                  <img
                    src="images/check.svg"
                    className="img-fluid mb-0"
                    alt=""
                  />
                  <p className="mb-0">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Necessitatibus magnam commodi eos cupiditate fugiat, Et,
                    obcaecati!
                  </p>
                </li>
              </ul>
              <div className="click mb-1">
                <Link to="/login" className="d-flex gap-15">
                  <button class="custom-btn btn-3">
                    <span>Bizə Qoşul</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-12">
            <h3 className="section-heading mt-5">Təmir</h3>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-4">
            <div>
              <img
                src="images/car-repair.jpeg"
                className="img-fluid rounded-pill"
                alt="diagnostic"
              />
            </div>
          </div>
          <div className="col-8 py-2">
            <div className="check">
              <ul className="d-flex flex-column justify-content-center gap-15">
                <li className="d-flex gap-10">
                  <img
                    src="images/check.svg"
                    className="img-fluid mb-2"
                    alt=""
                  />
                  <p className="mb-0">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Necessitatibus magnam commodi eos cupiditate fugiat, Et,
                    obcaecati!
                  </p>
                </li>
                <li className="d-flex gap-10">
                  <img
                    src="images/check.svg"
                    className="img-fluid mb-0"
                    alt=""
                  />
                  <p className="mb-0">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Necessitatibus magnam commodi eos cupiditate fugiat, Et,
                    obcaecati!
                  </p>
                </li>
                <li className="d-flex gap-10">
                  <img
                    src="images/check.svg"
                    className="img-fluid mb-0"
                    alt=""
                  />
                  <p className="mb-0">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Necessitatibus magnam commodi eos cupiditate fugiat, Et,
                    obcaecati!
                  </p>
                </li>
                <li className="d-flex gap-10">
                  <img
                    src="images/check.svg"
                    className="img-fluid mb-0"
                    alt=""
                  />
                  <p className="mb-0">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Necessitatibus magnam commodi eos cupiditate fugiat, Et,
                    obcaecati!
                  </p>
                </li>
              </ul>
              <div className="click mb-1">
                <Link to="/login" className="d-flex gap-15">
                  <button class="custom-btn btn-3">
                    <span>Bizə Qoşul</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Services;
