
import Link from 'next/link';
import styles from '/styles/Home.module.css';

const NavBar = () => (

    <nav>
        <Link href={'https://github.com/ZiXyos'} passHref={true}>
            <a>
            <h1 className={styles.title}>HI! 👋🏾</h1>
            <h2 style={{color: '#FF824D'}}>Sorry It's a little bit empty here....</h2>
            </a>
        </Link>
    </nav>
);

export default NavBar;
