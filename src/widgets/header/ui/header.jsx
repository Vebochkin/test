import { Flex } from 'antd';
import styles from '../styles/header.module.scss';
import logo from '../assets/Logo.png';
import search from '../assets/Search.svg';
import message from '../assets/message.svg';
import notification from '../assets/notification.svg';
import clsx from 'clsx';

const Header = () => {
  return (
    <header className={styles.header}>
      <Flex justify='space-between' align='center'>
        <div className={styles.logo}>
          <img src={logo} alt='Logo' />
          <div className={styles.logo_text}>
            World <br /> Transport
            <br /> Function
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button}>
            <img src={search} alt='search' className={styles.icon} />
          </button>
          <button className={clsx(styles.button, styles.bg_black)}>
            <img src={notification} alt='notification' className={styles.icon} />
          </button>
          <button className={styles.button}>
            <img src={message} alt='message' className={styles.icon} />
          </button>
        </div>
      </Flex>
    </header>
  );
};

export default Header;
