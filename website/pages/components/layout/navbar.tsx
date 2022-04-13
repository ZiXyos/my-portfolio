
import Link from 'next/link';
import styles from '/styles/Home.module.css';

const NavBar = () => (

    <nav>
        <Link href={'https://www.instagram.com/killian_mdry/'}>
            <h1 className={styles.title}>Hola 👋🏾</h1>
        </Link>
    </nav>
);

export default NavBar;
