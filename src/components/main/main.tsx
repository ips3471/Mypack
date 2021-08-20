import Header from '../header/header';
import Maker from '../maker/maker';
import Overview from '../overview/overview';
import styles from './main.module.css';

const Main = () => {


    return(
        <div className={styles.main}>
        <Header />
        <Maker />
        <Overview />
        </div>
    )
};

export default Main;