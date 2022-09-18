import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductsStart } from '../features/products/productsSlice';

import { Row, Col } from 'react-bootstrap';
import Product from './../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const keyword = params.keyword || '';

  const { loading, error, productList } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProductsStart({ keyword }));
  }, [dispatch, keyword]);

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
