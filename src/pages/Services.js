import React from 'react';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta';

const Services = () => {
  return (
    <>
      <Meta title={'Xidmətlər'} />
      <div className="services-wrapper-1 bg-light">
        <div className="row py-5 ">
          <div className="col-5 ">
            <div className="d-flex flex-column  mt-5">
              <img
                src="https://www.atlantech.net/hubfs/Blog_images/Atlantech_Hybrid-Cloud-Implementation.png"
                alt=""
                className="img-fluid"
                style={{ borderRadius: '50px' }}
              />
            </div>
          </div>

          <div className="col-7 d-flex flex-column justify-content-center align-items-center">
            <div className="col-10 d-flex justify-content-center">
              <div className="card text-center col-3">
                <div className="card-img">
                  <img
                    src="https://img.icons8.com/?size=512&id=SZIOLhqepltk&format=png"
                    className="mt-4"
                    alt=""
                    width={50}
                  />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                  <Link to="/diagnostic" className="">
                    <div className="text-white">
                      <h5 className="card-title mt-3">Diaqnostika</h5>
                      <p className="card-text mt-5 align-items-center">
                        Bizim diaqnostika xidmətimiz müxtəlif səviyyədə
                        təcrübəli və sertifikatlı mütəxəssislərdən ibarətdir.
                      </p>
                    </div>
                    <h6 className="btn link mt-2"> Daha Ətraflı</h6>
                  </Link>
                </div>
              </div>
              <div className="card text-center col-3">
                <div className="card-img">
                  <img
                    src="https://img.icons8.com/?size=512&id=z6xjjxOBzXBu&format=png"
                    className="mt-4"
                    alt=""
                    width={50}
                  />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                  <Link to="/lubrication" className="text-danger">
                    <div className="text-white">
                      <h5 className="card-title mt-3">Yağlama</h5>
                      <p className="card-text  mt-5 align-items-center">
                        Bizim keyfiyyətli yağ dəyişim xidmətimiz avtomobilinizin
                        mühərrik sisteminin sağlamlığını təmin edir.
                      </p>
                    </div>
                    <h6 className="btn link mt-4"> Daha Ətraflı</h6>
                  </Link>
                </div>
              </div>
              <div className="card text-center col-3">
                <div className="card-img">
                  <img
                    src="https://img.icons8.com/?size=512&id=43630&format=png"
                    className="mt-4"
                    alt=""
                    width={50}
                  />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                  <Link to="/repair" className="text-danger">
                    <div className="text-white">
                      <h5 className="card-title mt-3">Təmir</h5>
                      <p className="card-text  mt-5 align-items-center">
                        Bizim ekspert kadromuz avtomobilinizin problemini tez və
                        effektiv şəkildə həll edəcək.
                      </p>
                    </div>
                    <h6 className="btn link mt-5"> Daha Ətraflı</h6>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
