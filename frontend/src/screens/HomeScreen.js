import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../actions/productActions';

import { Row, Col } from 'react-bootstrap';
import Product from './../components/Product';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(productActions());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((el) => (
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
