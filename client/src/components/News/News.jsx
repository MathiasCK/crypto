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
  const [newsCategory, setNewsCategory] = useState('cryptocurrency');
  const { data } = useGetCryptoNewsQuery({
    newsCategory,
  });

  console.log(data);

  if (!data) return <Spinner />;

  const { articles } = data;

  return (
    <Row gutter={[24, 24]}>
      {articles.map(article => (
        <Col xs={24} sm={12} lg={8} key={article.rank}>
          <Card>
            <a href={article.link} target='_blank' rel='noreferrer'>
              <div className='news__card'>
                <div className='news__header'>
                  <Title level={4}>{article.title}</Title>
                  <img
                    style={{
                      maxWidth: '200px',
                      maxHeight: '100px',
                    }}
                    src={article.media || demoImage}
                    alt=''
                  />
                </div>
                <p>
                  {article.summary.length > 100
                    ? `${article.summary.substring(0, 100)}...`
                    : article.summary}
                </p>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
