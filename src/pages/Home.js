import React, { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import { services } from '../utils/Data';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs } from '../features/blogs/blogSlice';
import { moment } from 'moment';
import { Link } from 'react-router-dom';

const Home = () => {
  const blogState = useSelector((state) => state?.blog?.blog);
  const dispatch = useDispatch();
  useEffect(() => {
    getblogs();
  }, []);

  const getblogs = () => {
    dispatch(getAllBlogs());
  };
  return (
    <>
      <div className="home-wrapper-1" style={{ position: 'relative' }}>
        <div className="row">
          <div className="col-6">
            <img
              src="https://upgradedpoints.com/wp-content/uploads/2022/05/Turo_Scenic.jpg"
              alt=""
              className="img-fluid"
              style={{ width: '100%', height: '100%', opacity: 0.7 }}
            />
          </div>
          <div className="col-6">
            <img
              src="https://www.nidirect.gov.uk/sites/default/files/images/news/online-shopping.jpeg"
              alt=""
              className="img-fluid"
              style={{ width: '100%', height: '100%', opacity: 0.7 }}
            />
            <div
              className="text-center"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <h1 className="text-dark">
                Indi alış <span className="text-dark">-</span> verişə başla və
                xüsusi endirimlərdən yararlan
              </h1>
              <Link
                to={'/signup'}
                className="btn btn-light p-3 mt-5 home-btn  btn-outline-warning"
              >
                Qeydiyyat
              </Link>
            </div>
          </div>
        </div>
      </div>

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
          <div className="col-12 pb-3">
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
      <Container class1="marque-wrapper py-2">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee>
                <div className="mx-4 w-25">
                  <img src="images/brand-01.svg" width="100px" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.svg" width="80px" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.svg" width="80px" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.svg" width="80px" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.svg" width="80px" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.svg" width="90px" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.svg" width="80px" alt="brand" />
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
          {/* <div className="row">
            {Array.isArray() &&
              blogState?.map((item, index) => {
                return (
                  <div className="col-6 mb-3" key={index}>
                    <BlogCard
                      id={item?._id}
                      title={item?.title}
                      description={item?.description}
                      image={
                        item?.images && item.images.length > 0
                          ? item.images[0].url
                          : 'camera.jpg'
                      }
                      date={moment(item?.createdAt).format(
                        'MMMM Do YYYY,h:mm a'
                      )}
                    />
                  </div>
                );
              })}
          </div> */}
          <div className="row">
            <div className="d-flex gap-10 flex-wrap">
              <BlogCard data={blogState} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
