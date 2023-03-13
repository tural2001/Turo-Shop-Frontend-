import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import { services } from '../utils/Data';

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5 ">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>Yüksək Keyfiyyətli</h4>
                <h5>
                  LongLife <span> 504/507</span>{' '}
                </h5>
                <p>50 azn'dən başlayaraq</p>
                <Link className="button">Indi Alın</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center mt-4">
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-1.jpeg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Yüksək Keyfiyyətli</h4>
                  <h5>
                    LongLife <span> 504/507</span>{' '}
                  </h5>
                  <p>50 azn'dən başlayaraq</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-3.webp"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Yüksək Keyfiyyətli</h4>
                  <h5>
                    LongLife <span> 504/507</span>{' '}
                  </h5>
                  <p>50 azn'dən başlayaraq</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-2.webp"
                  alt="main banner"
                  width="100%"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Yüksək Keyfiyyətli</h4>
                  <h5>
                    LongLife <span> 504/507</span>{' '}
                  </h5>
                  <p>50 azn'dən başlayaraq</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-4.jpeg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Yüksək Keyfiyyətli</h4>
                  <h5>
                    LongLife <span> 504/507</span>{' '}
                  </h5>
                  <p>50 azn'dən başlayaraq</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between align-items-center">
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h5>Qatqılar</h5>
                  <p>12 ədəd</p>
                </div>
                <img src="images/fluid.jpeg" alt="10w40_oil" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h5>Yağlar</h5>
                  <p>25 ədəd</p>
                </div>
                <img src="images/oil.jpeg" alt="oil" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h5>Disklər</h5>
                  <p>18 ədəd</p>
                </div>
                <img src="images/disk.webp" alt="disk" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h5>Şinlər</h5>
                  <p>9 ədəd</p>
                </div>
                <img src="images/tires.jpeg" alt="tires" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Nümayiş etdirilən Məhsullar</h3>
          </div>
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Özəl Məhsullar</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="marque-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee>
                <div className="mx-4 w-25">
                  <img src="images/brand-01.svg" width="200px" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.svg" width="120px" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.svg" width="120px" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.svg" width="120px" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.svg" width="120px" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.svg" width="100px" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.svg" width="120px" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Bizim Son Bloqlarımız</h3>
          </div>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </Container>
    </>
  );
};

export default Home;
