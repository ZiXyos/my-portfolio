import React from "react";

import Header from "./header";
import Footer from "./footer";
import NavBar from "./navbar";

interface LayoutProps {

    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (

    <>
        <Header />
        <NavBar />
        <main>
            {children}
        </main>
        <Footer />
    </>
);

export default Layout;