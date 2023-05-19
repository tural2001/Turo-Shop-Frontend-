import React, { useEffect } from 'react';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../features/user/userSlice';

const Orders = () => {
  const dispatch = useDispatch();
  const orderState = useSelector(
    (state) => state.auth.getorderedProduct?.orders
  );
  console.log(orderState);

  useEffect(() => {
    dispatch(getOrders());
  }, []);
  return (
    <Container class1="cart-wrapper home-wrapper-2 py-5">
      <div className="row">
        <div className="col-12">
          <div className="row">
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
          <div className="col-12 mt-3">
            {orderState &&
              orderState.map((item, index) => {
                return (
                  <div className="row" key={index}>
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
                    <div className="col-12 bg-light">
                      <div className="row">
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
                              <div className="row">
                                <div className="col-3">
                                  <p>{i?.product?.title}</p>
                                </div>
                                <div className="col-3">
                                  <p>{i?.product?.quantity}</p>
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
      </div>
    </Container>
  );
};

export default Orders;
