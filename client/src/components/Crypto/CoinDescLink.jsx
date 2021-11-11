import React from 'react';
import HTMLReactParser from 'html-react-parser';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

const CoinDescLink = ({ cryptoDetails }) => {
  return (
    <Title level={3} className='coin__desc'>
      What is {cryptoDetails.name}?{HTMLReactParser(cryptoDetails.description)}
    </Title>
  );
};

export default CoinDescLink;
