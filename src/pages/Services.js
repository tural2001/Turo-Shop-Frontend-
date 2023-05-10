import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Meta from '../components/Meta';
import { GiCheckMark } from 'react-icons/gi';

const Services = () => {
  return (
    <>
      <Meta title={'Xidmətlər'} />
      <Container class1="services-wrapper-1  py-3">
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
      <Container class1="services-wrapper-2 bg-light py-5">
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
                  <GiCheckMark className="fs-4" />

                  <p className="mb-0">
                    Bizim diaqnostika xidmətimiz müxtəlif səviyyədə təcrübəli və
                    sertifikatlı mütəxəssislərdən ibarətdir.
                  </p>
                </li>
                <li className="d-flex gap-10">
                  <GiCheckMark className="fs-4" />
                  <p className="mb-0">
                    Avtomobilinizin bütün diaqnostika təhlil və testləri müasir
                    və sərfəli avadanlıqlarımızla həyata keçirilir.
                  </p>
                </li>
                <li className="d-flex gap-10">
                  <GiCheckMark className="fs-2" />
                  <p className="mb-0">
                    Diaqnostika xidmətimiz sizə avtomobilinizin sağlam və
                    effektiv işləməsinin təminatı verir və problemlərin daha
                    böyük problemlərə çevrilməsinin qarşısını alır.
                  </p>
                </li>
                <li className="d-flex gap-10">
                  <GiCheckMark className="fs-3" />
                  <p className="mb-0">
                    Əl ilə diaqnostika: Bu növ diaqnostika, avtomobilin
                    hissələrindəki səhvləri aşkar etmək üçün əl ilə tədqiqat və
                    yoxlama prosesidir.
                  </p>
                </li>
              </ul>
              <div className="d-flex click mb-1">
                <Link to="/diagnostic" className="d-flex gap-15 ">
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
                  <GiCheckMark className="fs-4" />
                  <p className="mb-0">
                    Bizim keyfiyyətli yağ dəyişim xidmətimiz avtomobilinizin
                    mühərrik sisteminin sağlamlığını təmin edir.
                  </p>
                </li>
                <li className="d-flex gap-10">
                  <GiCheckMark className="fs-4" />
                  <p className="mb-0">
                    Yağ dəyişimi zamanı tətbiq etdiyimiz orijinal yağlar və
                    filtrlər avtomobilinizin ömrünü artırır.
                  </p>
                </li>
                <li className="d-flex gap-10">
                  <GiCheckMark className="fs-4" />
                  <p className="mb-0">
                    Ekspert kadromuz və müasir avadanlıqlarımız vasitəsi ilə yağ
                    dəyişimi prosesi tez, sərfəli və dəqiqliklə həyata
                    keçirilir.
                  </p>
                </li>
                <li className="d-flex gap-10">
                  <GiCheckMark className="fs-2" />
                  <p className="mb-0">
                    Təklif etdiyimiz yağ dəyişim paketləri ilə avtomobilinizin
                    əsas baxımının həyata keçirilməsi ilə birlikdə daha böyük
                    keyfiyyət və performans əldə edə bilərsiniz.
                  </p>
                </li>
              </ul>
              <div className="click mb-1">
                <Link to="/lubrication" className="d-flex gap-15">
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
                  <GiCheckMark className="fs-4" />
                  <p className="mb-0">
                    Bizim ekspert kadromuz avtomobilinizin problemini tez və
                    effektiv şəkildə həll edəcək.
                  </p>
                </li>
                <li className="d-flex gap-10">
                  <GiCheckMark className="fs-4" />
                  <p className="mb-0">
                    Avtomobilinizin bütün təmir işləri müxtəlif səviyyədə
                    təcrübəli ustalar tərəfindən həyata keçirilir.
                  </p>
                </li>
                <li className="d-flex gap-10">
                  <GiCheckMark className="fs-4" />
                  <p className="mb-0">
                    Təmir işlərinin bütün mərhələlərində orijinal ehtiyya
                    hissələri tətbiq edilir.
                  </p>
                </li>
                <li className="d-flex gap-10">
                  <GiCheckMark className="fs-1" />
                  <p className="mb-0">
                    Məqsədimiz sizi təsdiqləmək və avtomobilinizin yenidən
                    işləməyə başlaması üçün güvən verərək, təmir və bakım
                    işlərinin hörmətli müştərilərimiz üçün çox vacib olduğunu
                    nümayiş etdirməkdir.
                  </p>
                </li>
              </ul>
              <div className="click mb-1">
                <Link to="/repair" className="d-flex gap-15">
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
