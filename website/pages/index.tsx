import type { NextPage } from 'next';

import { WindowApp } from '../components/app/window.component';
import { CodeApp } from '../components/app/code/code.app';
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
		<div>
			{}
    	</div>
  	);
}

export default Home
