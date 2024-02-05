import React from 'react';
import { Carousel } from 'antd';
import styles from '../styles/slider.module.scss';
import img from '../assets/img.jpg';

const Slider = () => {
  return (
    <>
      <Carousel
        dotPosition={'top'}
        dots={{ className: styles.dots }}
        className={styles.slider}
        autoplay
        autoplaySpeed={4000}>
        <div>
          <h3 className={styles.elem}>
            <img src={img} alt='qweqew' />
          </h3>
        </div>
        <div>
          <h3 className={styles.elem}>
            <img src={img} alt='qweqew' />
          </h3>
        </div>
        <div>
          <h3 className={styles.elem}>
            <img src={img} alt='qweqew' />
          </h3>
        </div>
        <div>
          <h3 className={styles.elem}>
            <img src={img} alt='qweqew' />
          </h3>
        </div>
      </Carousel>
    </>
  );
};
export default Slider;
