import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react';

import styles from '../styles/Home.module.css';

import internet from '/public/internet.png';
import poop from '/public/poop.png';
import moon from '/public/moon.png'
import NavBar from './components/layout/navbar';

type DataType = {

	icon: StaticImageData;
	redirect: string;
	loading: number;
}

let data1: DataType = {

	icon: internet,
	redirect: 'https://www.google.com/search?client=firefox-b-d&q=google+comment+ne+plus+etre+con',
	loading: 6.66
}

let data2: DataType = {

	icon: poop,
	redirect: 'https://www.google.com/search?q=comment+etre+beau&client=firefox-b-d&sxsrf=APq-WBvuONdSzV2ifNIECZD3ubiRAR5c-g%3A1649877211439&ei=2yBXYomkGsnQaJi3h5gE&ved=0ahUKEwjJ_fDI35H3AhVJKBoKHZjbAUMQ4dUDCA0&uact=5&oq=comment+etre+beau&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEMsBMgUIABDLATIFCAAQywEyBQgAEMsBMgUIABDLATIFCAAQywEyBQgAEMsBMgUIABDLATIFCAAQywEyBQgAEMsBOggIABCwAxDLAToJCAAQsAMQCBAeOgQIIxAnOgUIABCRAjoECAAQQzoFCAAQgAQ6BQguEIAEOgQILhBDOgsILhCABBDHARCjAjoOCC4QgAQQxwEQowIQ1AI6BwguEIAEEAo6DgguEMcBEK8BENQCEMsBOggILhCABBDUAjoLCC4QgAQQxwEQ0QM6BwgjELECECc6BAguEAo6BAgAEAo6BggjECcQEzoKCAAQgAQQhwIQFDoLCC4QxwEQ0QMQywE6CAguENQCEJECOgUILhDLAUoECEEYAUoECEYYAFCvDliDQmC8RWgCcAB4AIAB2QKIAfcZkgEIOS4xNi4xLjGYAQCgAQHIAQTAAQE&sclient=gws-wiz',
	loading: 6.67
}

let night: DataType = {

	icon: moon,
	redirect: 'https://www.tf1.fr/tf1/miss-france/news/inscrivez-vous-au-casting-de-miss-france-2022-38417394.html',
	loading: 0.00
}

const Home: NextPage = () => {

	const [data, setData] = useState<DataType>(data1);

	useEffect(() => {

		let bool = Math.random() < 0.5;

		bool ? setData(data1) : setData(data2)
		const d = new Date();
		let hour = d.getHours();

		if (hour > 23) setData(night);
	}, [])

  	return (
		<div className={styles.main}>

			<NavBar />
			<div className={styles.App_comp}>
				<Link href={data.redirect} passHref={true}>
					<Image src={data.icon} width={100} height={100} className={styles.App_logo} alt={'❤️'}/>
				</Link>
				<Link href={'https://github.com/ZiXyos'} passHref={true}>
					<p className={styles.App_intro}>Loading... {data.loading}%</p>
				</Link>
			</div>
    	</div>
  	);
}

export default Home
