import React from 'react';
import { Typography } from 'antd';
import { CryptoCurrencies, News } from '../../components';
import Cryptostats from './Cryptostats';

const { Title } = Typography;

const Homepage = () => {
  return (
    <>
      <Cryptostats />
      <Title level={2} className='heading'>
        Top 10 Cryptocurrencies in the world
      </Title>
      <CryptoCurrencies simplified />
      <Title level={2} className='heading'>
        Latest Crypto News
      </Title>
      <News simplified />
    </>
  );
};

export default Homepage;
