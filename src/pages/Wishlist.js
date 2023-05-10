import React, { useEffect } from 'react';
import Meta from '../components/Meta';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getUserWishList } from '../features/user/userSlice';
import { addToWishlist } from '../features/products/productSlice';

const Wishlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getWishListFromDb();
  }, []);

  const getWishListFromDb = () => {
    dispatch(getUserWishList());
  };

  const wishlistState = useSelector((state) => state.auth?.wishlist?.wishlist);
  console.log(wishlistState);
  const removeFromWishList = (id) => {
    dispatch(addToWishlist(id));
    setTimeout(() => {
      dispatch(getUserWishList());
    }, 300);
  };
  return (
    <>
      <Meta title={'Wishlist'} />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {wishlistState?.length === 0 && (
            <div className="text-center fs-3">No Data</div>
          )}
          {wishlistState?.map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="wishlist-card position-relative">
                  <img
                    onClick={() => {
                      removeFromWishList(item?._id);
                    }}
                    src="images/cross.svg"
                    className="position-absolute cross img-fluid"
                    alt="cross"
                  />
                  <div className="wishlist-card-image bg-white">
                    <img
                      src={
                        item?.images && item.images.length > 0
                          ? item.images[0].url
                          : 'camera.jpg'
                      }
                      alt="disk"
                      className="img-fluid d-block mx-auto"
                    />
                  </div>
                  <div className="py-3 px-3">
                    <h5 className="title">{item?.title}</h5>
                    <h6
                      className="description fw-lighter"
                      dangerouslySetInnerHTML={{ __html: item?.description }}
                    ></h6>
                    <h6 className="price mb-3">{item?.price}</h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
