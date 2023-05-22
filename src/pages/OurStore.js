import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../features/products/productSlice';
import prodcompare from '../images/prodcompare.svg';
import view from '../images/view.svg';
import addcart from '../images/add-cart.svg';
import { addToWishlist } from '../features/products/productSlice';
import { AiOutlineHeart } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const navigate = useNavigate();
  const productState = useSelector((state) => state.product?.product);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  const [brand, setBrand] = useState(null);
  const [category, setCategory] = useState(null);
  const [tag, setTag] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [sort, setSort] = useState(null);

  useEffect(() => {
    let newBrands = [];
    let category = [];
    let newTags = [];
    for (let index = 0; index < productState?.length; index++) {
      const element = productState[index];
      newBrands.push(element.brand);
      category.push(element.category);
      newTags.push(element.tags);
    }
    setBrands(newBrands);
    setCategories(category);
    setTags(newTags);
  }, [productState]);

  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
  }, [sort, tag, brand, category, minPrice, maxPrice]);

  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };

  const getProducts = () => {
    dispatch(
      getAllProducts({ tag, sort, brand, category, minPrice, maxPrice })
    );
  };

  return (
    <>
      <Meta title={'Doğru Məkan'} />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Kateqorilər</h3>
              <div>
                <ul className="ps-0">
                  {categories &&
                    [...new Set(categories)].map((item, index) => {
                      return (
                        <li key={index} onClick={() => setCategory(item)}>
                          {item}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filtirləmə</h3>
              <div>
                <h5 className="sub-title">Mövcud</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Stokda var (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Stokda bitib (0)
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Qiymət</h5>
                <div className="d-flex aling-items-center gap-10">
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Min"
                      onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Min</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Max"
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                    <label htmlFor="floatingInput1">Max</label>
                  </div>
                </div>
              </div>
              <h5 className="sub-title">Ölçü</h5>
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label className="form-check-label" htmlFor="">
                    10w40 (5)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label className="form-check-label" htmlFor="">
                    5w40 (5)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label className="form-check-label" htmlFor="">
                    0w20 (8)
                  </label>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Məhsul etiketləri</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  {tags &&
                    [...new Set(tags)].map((item, index) => {
                      return (
                        <span
                          key={index}
                          className="text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3"
                          onClick={() => setTag(item)}
                        >
                          {item}
                        </span>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Məhsul brendləri</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  {brands &&
                    [...new Set(brands)].map((item, index) => {
                      return (
                        <span
                          key={index}
                          className="text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3"
                          onClick={() => setBrand(item)}
                        >
                          {item}
                        </span>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title ">Önə çıxan məhsullar</h3>
              <div className="special">
                {productState &&
                  productState
                    ?.filter((item) => item?.tags === 'popular')
                    .slice(0, 2)
                    .map((item, index) => (
                      <div key={index} style={{ borderBottom: '1px solid' }}>
                        <div className="product-card position-relative">
                          <div className="wishlist-icon position-absolute">
                            <button
                              className="border-0 bg-transparent"
                              onClick={(e) => {
                                addToWish(item?._id);
                              }}
                            >
                              <AiOutlineHeart className="fs-4 ai-outline-heart" />
                              <FcLike className="fs-4 fc-like" />
                            </button>
                          </div>
                          <div className="product-image">
                            <img
                              src={item?.images[0]?.url}
                              className="img-fluid"
                              alt="product"
                            />
                            <img
                              src={item?.images[0]?.url}
                              className="img-fluid"
                              alt="product"
                            />
                          </div>
                          <div className="product-details">
                            <h6 className="brand">{item?.brand}</h6>
                            <h5 className="product-title">{item?.title}</h5>

                            <p className="price">{item?.price} Azn</p>
                          </div>
                          <div className="action-bar position-absolute">
                            <div className="d-flex flex-column gap-15">
                              <button className="border-0 bg-transparent">
                                <img src={prodcompare} alt="compare" />
                              </button>
                              <button className="border-0 bg-transparent">
                                <img
                                  onClick={() =>
                                    navigate('/product/' + item?._id)
                                  }
                                  src={view}
                                  alt="view"
                                />
                              </button>
                              <button className="border-0 bg-transparent">
                                <img src={addcart} alt="addcart" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: '100px' }}>
                    Sort By:
                  </p>
                  <select
                    name=""
                    className="form-control form-select"
                    defaultValue={'manula'}
                    id=""
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="title">A-Z</option>
                    <option value="-title">Z-A</option>
                    <option value="price">Qiymət, azdan çoxa doğru</option>
                    <option value="-price">Qiymət, çoxdan aza doğru</option>
                    <option value="createdAt">
                      Tarix, köhnədən təzəyə doğru
                    </option>
                    <option value="-createdAt">
                      Tarix, təzədən köhnəyə doğru
                    </option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">32 Məhsul</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="product-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard
                  data={productState ? productState : []}
                  grid={grid}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
