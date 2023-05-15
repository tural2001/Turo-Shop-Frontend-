import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Meta from '../components/Meta';
import { GiCheckMark } from 'react-icons/gi';
import { AiFillAlert } from 'react-icons/ai';

const Services = () => {
  return (
    <>
      <Meta title={'Xidmətlər'} />
      <div className="services-wrapper-1 bg-light">
        <div className="row py-5 ">
          <div className="col-4 services-left text-center">
            <div className="d-flex flex-column  mt-5">
              <h4 className="mt-4 fw-lighter">Xidmət Səviyyəsi</h4>
              <p className="mt-5">
                <ul className="">
                  <img
                    src="https://img.icons8.com/?size=512&id=VzU7PPLtpY2i&format=png"
                    width={20}
                    className="mb-1"
                    alt=""
                  />{' '}
                  <li className="mb-0">
                    Avtomobilinizin bütün diaqnostika təhlil və testləri müasir
                    və sərfəli avadanlıqlarımızla həyata keçirilir
                  </li>
                  <br />
                  <img
                    src="https://img.icons8.com/?size=512&id=VzU7PPLtpY2i&format=png"
                    width={20}
                    className="mb-1"
                    alt=""
                  />{' '}
                  <li className="mb-3">
                    Yağ dəyişimi zamanı tətbiq etdiyimiz orijinal yağlar və
                    filtrlər avtomobilinizin ömrünü artırır.
                  </li>
                  <img
                    src="https://img.icons8.com/?size=512&id=VzU7PPLtpY2i&format=png"
                    width={20}
                    className="mb-1 "
                    alt=""
                  />{' '}
                  <li className="">
                    Avtomobilinizin bütün təmir işləri müxtəlif səviyyədə
                    təcrübəli ustalar tərəfindən həyata keçirilir.
                  </li>
                  <li></li>
                </ul>
              </p>
            </div>
          </div>

          <div className="col-7 d-flex flex-column justify-content-center align-items-center">
            <div className="logo   mb-3">
              <b className="mt-5">
                Tu<span>ro </span>Ser<span>vi</span>ce
              </b>
            </div>
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
                  <div>
                    <h5 className="card-title mt-3">Diaqnostika</h5>
                    <p className="card-text mt-5 align-items-center">
                      Bizim diaqnostika xidmətimiz müxtəlif səviyyədə təcrübəli
                      və sertifikatlı mütəxəssislərdən ibarətdir.
                    </p>
                  </div>
                  <button className="btn link mb-4">
                    <Link to="/diagnostic" className="text-danger">
                      Daha Ətraflı
                    </Link>
                  </button>
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
                  <div>
                    <h5 className="card-title mt-3">Yağlama</h5>
                    <p className="card-text  mt-5 align-items-center">
                      Bizim keyfiyyətli yağ dəyişim xidmətimiz avtomobilinizin
                      mühərrik sisteminin sağlamlığını təmin edir.
                    </p>
                  </div>
                  <button className="btn link mb-4">
                    <Link to="/lubrication" className="text-danger">
                      Daha Ətraflı
                    </Link>
                  </button>
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
                  <div>
                    <h5 className="card-title mt-3">Təmir</h5>
                    <p className="card-text  mt-5 align-items-center">
                      Bizim ekspert kadromuz avtomobilinizin problemini tez və
                      effektiv şəkildə həll edəcək.
                    </p>
                  </div>
                  <button className="btn link mb-4">
                    <Link to="/repair" className="text-danger">
                      Daha Ətraflı
                    </Link>
                  </button>
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
