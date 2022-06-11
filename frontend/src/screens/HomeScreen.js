import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsRequest } from '../features/products/productSlice';

import { Row, Col } from 'react-bootstrap';
import Product from './../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { productList, loading, error } = useSelector(
    (state) => state.products
  );
  // console.log(products);
  // const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(getProductsRequest());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {productList.map((el) => (
            <Col key={el._id} sm={12} md={6} lg={4}>
              <Product {...el} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
