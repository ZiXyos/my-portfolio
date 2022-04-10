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
    <DockItems name="VSCode" img='/public/MemojiDev.png' key={5}/>,
    <DockItems name="iTerm" img='/public/MemojiDev.png' key={6}/>,

]

const Layout = ({ children }: LayoutProps) => (

    <>
        <Header />
        <div className="min-h-screen flex-row scroll-smooth md:scroll-auto">
            <main className="min-h-screen bg-desktop bg-cover">
                <NavBar />
                    {children}
                <DockComponent DockItems={itemList}/>
            </main>

        </div>
    </>
);

export default Layout;