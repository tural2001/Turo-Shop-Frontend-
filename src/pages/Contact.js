import React from 'react';
import Container from '../components/Container';
import Meta from '../components/Meta';
import { AiOutlineHome } from 'react-icons/ai';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const Contact = () => {
  return (
    <>
      <Meta title={'Əlaqə'} />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96970.1375653932!2d49.56104081012017!3d40.578762149797164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403096dcd0923f6b%3A0xdf4767c369322a71!2zU3VtcWF5xLF0!5e0!3m2!1str!2saz!4v1678136232703!5m2!1str!2saz"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen="auto"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Əlaqə</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ad"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Telefon nömrəsi"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Şərh"
                    ></textarea>
                  </div>
                  <div>
                    <button className="button">Göndər</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Bizə Müraciət Edin</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-5 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-2" />
                      <address className="mb-0">
                        Babak 7, Araz market yaxınlığı,dayanacağın yanı
                      </address>
                    </li>
                    <li className="mb-5 d-flex gap-15 align-items-center">
                      <BsFillTelephoneInboundFill className="fs-4" />
                      <a href="tel:+994 7777777">+994 077-777-7777</a>
                    </li>
                    <li className="mb-5 d-flex gap-15 align-items-center">
                      <BsFillEnvelopeFill className="fs-2" />
                      <a href="mailto:tural@mail.ru">tural@mail.ru</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineInfoCircle className="fs-2" />
                      <p className="mb-0">1-5 günlər 9:00-18:00-dək</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
