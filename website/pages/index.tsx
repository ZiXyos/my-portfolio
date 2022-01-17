import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Button from './components/button/basic_buttons'
import Layout from './components/layout/layout'
import Tags from './components/tags/tags'

const Home: NextPage = () => {
  	return (
		<div className={styles.container}>
			<h1>this is My Portfolio 👨🏾‍💻</h1>
    	</div>
  	);
}

export default Home
