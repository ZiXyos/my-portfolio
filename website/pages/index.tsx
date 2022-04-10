import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Button from '../components/button/basic_buttons';
import Layout from '../components/layout/layout';
import Tags from '../components/tags/tags';
import { WindowApp } from '../components/app/window.component';
import { ResizableDiv } from '../components/div/resizable.component';
import { CodeApp } from '../components/app/code/code.app';
import { DockComponent } from '../components/dock/dock.component';
import { DockItems } from '../components/dock/item.component';

const itemList: any[] = [

    <DockItems name="Finder" img='/public/MemojiDev.png' key={1}/>,
    <DockItems name="Sys pref" img='/public/MemojiDev.png' key={2}/>,
    <DockItems name="Mail" img='/public/MemojiDev.png' key={3}/>,
    <DockItems name="Music" img='/public/MemojiDev.png' key={4}/>,
    <DockItems name="VSCode" img='/public/MemojiDev.png' key={5}/>,
    <DockItems name="iTerm" img='/public/MemojiDev.png' key={6}/>,

]

const Home: NextPage = () => {

  	return (
		<div className=''>
    	</div>
  	);
}

export default Home
