import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import Spinner from '../Spinner';

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage =
  'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';

const News = ({ simplified }) => {
  const { data: currencies } = useGetCryptosQuery(100);
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const count = simplified ? 6 : 12;
  const { data } = useGetCryptoNewsQuery({
    newsCategory,
    count,
  });

  if (!data?.value) return <Spinner />;

  return (
    <Row gutter={[24, 24]}>
      {data.value.map(news => (
        <Col xs={24} sm={12} lg={8} key={news.id}>
          <Card>
            <a href={news.url} target='_blank'>
              <div className='news__card'>
                <Title level={4}>{news.name}</Title>
                <img
                  style={{
                    maxWidth: '200px',
                    maxHeight: '100px',
                    borderRadius: '50px',
                  }}
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  alt=''
                />
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
