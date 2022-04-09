import React, { FunctionComponent, ReactElement } from "react";

import Header from "./header";
import Footer from "./footer";
import NavBar from "./navbar";

import { DockComponent } from "../dock/dock.component";
import { DockItems } from '../dock/item.component'

interface LayoutProps {

    children: React.ReactNode;
}


const itemList: any[] = [

    <DockItems name="Finder" img='/public/MemojiDev.png' key={1}/>,
    <DockItems name="Sys pref" img='/public/MemojiDev.png' key={2}/>,
    <DockItems name="Mail" img='/public/MemojiDev.png' key={3}/>,
    <DockItems name="Music" img='/public/MemojiDev.png' key={4}/>,
    <DockItems name="sys pref" img='/public/MemojiDev.png' key={5}/>,
    <DockItems name="sys pref" img='/public/MemojiDev.png' key={6}/>,

]

const Layout = ({ children }: LayoutProps) => (

    <>
        <Header />
        <NavBar />
        <div>
            <main className="bg-purple-700 min-h-screen">
                {children}
                <DockComponent DockItems={itemList}/>
            </main>

        </div>
        <Footer />
    </>
);

export default Layout;