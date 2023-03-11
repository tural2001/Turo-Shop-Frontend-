import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import Container from '../components/Container';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';

const OurStore = () => {
  const [grid, setGrid] = useState(4);

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
                  <li>Yağ</li>
                  <li>Təkər</li>
                  <li>Disk</li>
                  <li>Qatqı</li>
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
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Min"
                    />
                    <label htmlFor="floatingInput">Min</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Max"
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
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Yağ
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Təkər
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Disk
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Qatqı
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Önə çıxan məhsullar</h3>
              <div>
                <div className="random-products mb-3 d-flex">
                  <div className="w-50">
                    <img
                      src="images/oil.jpeg"
                      className="img-fluid"
                      alt="oil"
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Castrol 03124 Edge 0W-20 Advanced Full Sintetik Motor
                      Yağı, 5 Quart
                    </h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>200 azn</b>
                  </div>
                </div>
                <div className="random-products  d-flex">
                  <div className="w-50">
                    <img
                      src="images/oil.jpeg"
                      className="img-fluid"
                      alt="oil"
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Castrol 03124 Edge 0W-20 Advanced Full Sintetik Motor
                      Yağı, 5 Quart
                    </h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>200 azn</b>
                  </div>
                </div>
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
                  <select name="" className="form-control form-select" id="">
                    <option value="manual">Normal</option>
                    <option value="best-selling">Çox satan</option>
                    <option value="title-ascending">A-Z</option>
                    <option value="title-descending">Z-A</option>
                    <option value="price-ascending">
                      Qiymət, azdan çoxa doğru
                    </option>
                    <option value="price-descending">
                      Qiymət, çoxdan aza doğru
                    </option>
                    <option value="created-ascending">
                      Tarix, köhnədən təzəyə doğru
                    </option>
                    <option value="created-descending">
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
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
