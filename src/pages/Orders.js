import React, { useEffect } from 'react';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../features/user/userSlice';

const Orders = () => {
  const dispatch = useDispatch();
  const orderState = useSelector(
    (state) => state?.auth?.getorderedProduct?.orders
  );
  const refresh = () => window.location.reload(true);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  <button onClick={refresh}>Refresh</button>;

  return (
    <Container class1="cart-wrapper home-wrapper-2 py-5">
      <div className="row">
        {orderState && orderState.length > 0 ? (
          <div className="col-12">
            <div className="row px-3">
              <div className="col-3">
                <h5>Order Id</h5>
              </div>
              <div className="col-3">
                <h5>Total Amount</h5>
              </div>
              <div className="col-3">
                <h5>Toral Amount after Discount</h5>
              </div>
              <div className="col-3">
                <h5>Status</h5>
              </div>
            </div>
            <div className="col-12 px-3 mt-3">
              {orderState &&
                orderState.map((item, index) => {
                  return (
                    <div
                      style={{
                        backgroundColor: '#f3d00b',
                        borderRadius: '10px',
                      }}
                      className="row pt-3 mt-3"
                    >
                      <div className="col-3">
                        <p>{item?._id}</p>
                      </div>
                      <div className="col-3">
                        <p>{item?.totalPrice}</p>
                      </div>
                      <div className="col-3">
                        <p>{item?.totalPriceAfterDiscount}</p>
                      </div>
                      <div className="col-3">
                        <p>{item?.orderStatus}</p>
                      </div>
                      <div className="col-12 text-white  bg-light">
                        <div
                          className="row pt-3"
                          style={{
                            backgroundColor: '#232f3e',
                          }}
                        >
                          <div className="col-3">
                            <h5>Product Name</h5>
                          </div>
                          <div className="col-3">
                            <h5>Quantity</h5>
                          </div>
                          <div className="col-3">
                            <h5>Price</h5>
                          </div>
                          <div className="col-3">
                            <h5>Brand</h5>
                          </div>
                          <div className="col-12">
                            {item?.orderItems?.map((i, index) => {
                              return (
                                <div
                                  style={{ backgroundColor: 'febd69' }}
                                  className="row pt-3 my-3"
                                  key={index}
                                >
                                  <div className="col-3">
                                    <p>{i?.product?.title}</p>
                                  </div>
                                  <div className="col-3">
                                    <p>{i?.quantity}</p>
                                  </div>
                                  <div className="col-3">
                                    <p>{i?.product?.price}</p>
                                  </div>
                                  <div className="col-3">
                                    <p>{i?.product?.brand}</p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ) : (
          <p className="text-center">
            {' '}
            <button className="text-center btn-primary p-2" onClick={refresh}>
              Refresh
            </button>
          </p>
        )}
      </div>
    </Container>
  );
};

export default Orders;
