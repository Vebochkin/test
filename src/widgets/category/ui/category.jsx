import React from 'react';
import { Card } from 'antd';
 
const { Meta } = Card;
const Category = () => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="../assets/image.png" />}
  >
    <Meta title="Error"   />
  </Card>
);
export default Category;