import React, { useState } from 'react';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from 'react-rating-stars-component';
import { AiOutlineHeart } from 'react-icons/ai';
import { TbGitCompare } from 'react-icons/tb';
import Container from '../components/Container';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAProduct } from '../features/products/productSlice';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Color from '../components/Color';
import { addProdToCart } from '../features/user/userSlice';

const SingleProduct = () => {
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  console.log(quantity);
  const location = useLocation();
  const getProductId = location.pathname.split('/')[2];
  const productState = useSelector((state) => state.product?.singleproduct);
  // const cartState = useSelector((state) => state.auth);

  console.log(productState);

  const uploadCart = () => {
    dispatch(
      addProdToCart({
        productId: productState?._id,
        quantity,
        price: productState?.price,
      })
    );
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAProduct(getProductId));
  }, [dispatch, getProductId]);

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
      <Container class1="main-product-wrapper py-5 home-wrapper">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <Zoom>
                  <img
                    src={
                      productState?.images[0].url
                        ? productState?.images[0].url
                        : null
                    }
                    width="100"
                    alt=""
                  />
                </Zoom>
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              {Array.isArray(productState) &&
                productState.map((item, index) => {
                  return (
                    <div key={index}>
                      <img src={item?.url} alt="" />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">{productState?.title}</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">{productState?.price} Azn</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={productState?.totalrating}
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
                  <h3 className="product-heading">Brend:</h3>
                  <p className="product-data">{productState?.brand}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Kategoriya:</h3>
                  <p className="product-data">{productState?.category}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Etiket:</h3>
                  <p className="product-data">{productState?.tags}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Reng:</h3>
                  <Color colorData={productState?.color} />
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Mövcud:</h3>
                  <p className="product-data">
                    {productState?.quantity !== undefined
                      ? 'Stokda var'
                      : 'Stokda bitib'}
                  </p>
                </div>
                {Array.isArray(productState) &&
                  productState.map((item, index) => {
                    return (
                      <div className="d-flex gap-10 flex-column mt-2 mb-3">
                        <h3 className="product-heading">Ölçü:</h3>
                        <div className="d-flex flex-wrap gap-15">
                          <span
                            className="badge border border-1 bg-white text-dark border-secondary"
                            key={index}
                          >
                            {productState?.size}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                <div className="d-flex gap-30  flex-row mt-2 mb-3">
                  <h3 className="product-heading mt-2">Miqdar:</h3>
                  <div className="">
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      className="form-control"
                      id=""
                      onChange={(e) => setQuantity(e.target.value)}
                      value={quantity}
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30">
                    <button
                      onClick={() => {
                        uploadCart();
                      }}
                      className=""
                      type="submit"
                    >
                      Səbətə əlavə et
                    </button>
                    <button className="">Buy it now</button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="/">
                      <AiOutlineHeart className="fs-5 me-2" />
                      Müqayisə et
                    </a>
                  </div>
                  <div>
                    <a href="/">
                      <TbGitCompare className="fs-5 me-2" />
                      Bəyənilənlərə əlave et
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column  my-3">
                  <h3 className="product-heading">Çatdırılma və İadə :</h3>
                  <p className="product-data">
                    Pulsuz Çatdırılma və Bütün məhsullara zəmanət! Məhsulları
                    <br />
                    <span className="text-dark text-bold">
                      2-5 iş günü
                    </span>{' '}
                    ərzində çatdırırıq
                  </p>
                </div>
                <div className="d-flex gap-10 flex-column my-3">
                  <h3 className="product-heading">Məhsul Linkini Kopyala :</h3>
                  <a
                    href="#/"
                    onClick={() => {
                      copyToClipboard(window.location.href);
                    }}
                  >
                    Məhsul Linkini Kopyala
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
            <h4>Açıqlama</h4>
            <div className="bg-white p-3">
              <p
                className=""
                dangerouslySetInnerHTML={{ __html: productState?.description }}
              ></p>
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
                  <h6 className="mb-0">Tural</h6>
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
      {/* <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our popula product</h3>
          </div>
        </div>
        <div className="row">
          {productState &&
            productState.map((item, index) => {
              if (item.tags === 'special') {
                return (
                  <SpecialProduct
                    key={index}
                    id={item?._id}
                    item={item?.title}
                    brand={item?.brand}
                    price={item?.price}
                    quantity={item?.quantity}
                    totalrating={item?.totalrating.toString()}
                    sold={item?.sold}
                    images={item?.images[0]?.url}
                  />
                );
              }
              return null;
            })}
        </div>
      </Container> */}
    </>
  );
};

export default SingleProduct;
