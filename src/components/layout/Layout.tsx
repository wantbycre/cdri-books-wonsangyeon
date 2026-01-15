import React from "react";
import Head from "./Head";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div id="wrap" className="px-3 md:px-0 md:w-[960px] md:m-auto">
            <Head />
            {children}
        </div>
    );
};

export default Layout;
