import { useEffect, useState } from "react";

import styles from '/styles/Home.module.css'

const Footer = () => {

    const [bg, setBg] = useState<boolean>(false);

    useEffect( () => {

        setBg(Math.random() < 0.5)
    }, []);

    return (
        <footer onClick={() =>  bg ? setBg(false) : setBg(true)}>
            {
                bg ? <p>Made 4 U ❤️ so get my ☕️</p> : <p >Made With ❤️ and some ☕️</p>
            }
        </footer>
    )
};

export default Footer;