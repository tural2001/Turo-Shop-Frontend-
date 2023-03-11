import React, { useState } from 'react';
import BreadCrump from '../components/BreadCrump';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from 'react-rating-stars-component';
import ReactImageZoom from 'react-image-zoom';
import { AiOutlineHeart } from 'react-icons/ai';
import { TbGitCompare } from 'react-icons/tb';
import Container from '../components/Container';

const SingleProduct = () => {
  const props = {
    width: 600,
    height: 500,
    zoomWidth: 500,
    img: 'https://images.cars.com/cldstatic/wp-content/uploads/cadillac-escalade-2021-20.JPG',
  };

  const [orderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log('text', text);
    var textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };
  return (
    <>
      <Meta title={'ShippingPolicy'} />
      <BreadCrump title={'shipping'} />
      <Container class1="main-product-wrapper py-5 home-wrapper">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  src="https://www.seat.sg/content/dam/public/seat-website/car-terms/v/ventilated-disc-brakes/seat-ventilated-disc-brakes.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://www.seat.sg/content/dam/public/seat-website/car-terms/v/ventilated-disc-brakes/seat-ventilated-disc-brakes.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://www.seat.sg/content/dam/public/seat-website/car-terms/v/ventilated-disc-brakes/seat-ventilated-disc-brakes.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://www.seat.sg/content/dam/public/seat-website/car-terms/v/ventilated-disc-brakes/seat-ventilated-disc-brakes.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">R18 disk vossen</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">100azn</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">Based on 2 reviews</p>
                </div>
                <a href="#review" className="review-btn mt-2">
                  Write a Review
                </a>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type:</h3>
                  <p className="product-data">Gsc</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand:</h3>
                  <p className="product-data">Gsc</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category:</h3>
                  <p className="product-data">Gsc</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags:</h3>
                  <p className="product-data">Gsc</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availablity:</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Size:</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      18
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      19
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      21
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      22
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-30  flex-row mt-2 mb-3">
                  <h3 className="product-heading mt-2">Quantity:</h3>
                  <div className="">
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      className="form-control"
                      id=""
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30">
                    <button className="" type="submit">
                      Add to Card
                    </button>
                    <button className="">Buy it now</button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="/">
                      <AiOutlineHeart className="fs-5 me-2" />
                      Add to Compare
                    </a>
                  </div>
                  <div>
                    <a href="/">
                      <TbGitCompare className="fs-5 me-2" />
                      Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column  my-3">
                  <h3 className="product-heading">Shipping and Returns :</h3>
                  <p className="product-data">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Velit voluptates incidunt reprehenderit, iusto voluptas
                    adipisci
                  </p>
                </div>
                <div className="d-flex gap-10 flex-column my-3">
                  <h3 className="product-heading">Copy Product Link :</h3>
                  <a
                    href="#/"
                    onClick={() => {
                      copyToClipboard(
                        'https://staticimg.titan.co.in/Titan/Catalog/1805QM01_1.jpg?impolicy=pqmed&imwidth=640'
                      );
                    }}
                  >
                    Copy Product Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                consequuntur doloremque officiis perferendis voluptas velit quod
                nisi, facilis officia ipsam earum odit et! Facere veniam, dicta
                perferendis molestias distinctio eum.{' '}
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3>Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 reviews</p>
                  </div>
                </div>
                <div>
                  {orderedProduct && (
                    <a className="text-dark text-decoration-underline" href="/">
                      Write a review
                    </a>
                  )}
                </div>
              </div>
              <div className="review-form py-4">
                <h4>Write review</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="3"
                      placeholder="comments"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div className="reviews">
                <div className="review">
                  <h6 className="mb-0">Navdeepp</h6>
                  <div className="d-flex gap-10 align-items-center">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Facilis, neque exercitationem adipisci non excepturi velit
                    officia eaque incidunt labore, iste reprehenderit ipsa
                    blanditiis dolorem dolor repudiandae, nemo harum fuga
                    nostrum?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our popula product</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
