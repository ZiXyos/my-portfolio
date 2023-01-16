import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react';

import styles from '../styles/Home.module.css';

import internet from '/public/internet.png';
import poop from '/public/poop.png';
import moon from '/public/moon.png'
import NavBar from './components/layout/navbar';






const Home: NextPage = () => {

  	return (
		<div className={styles.main}>

			<NavBar />
			<div className={styles.App_comp}>

				<Link href={"https://github.com/orgs/arcz-gg/repositories"} passHref={true}>
					<Image src={"/work-in-progress.png"} width={100} height={100} alt={'❤️'}/>
				</Link>
			</div>
    	</div>
  	);
}

export default Home
