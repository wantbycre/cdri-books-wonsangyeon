import type { JSX } from "react";
import Head from "./Head";

const Layout = ({ children }: { children: JSX.Element }) => {
    return (
        <div id="wrap" className="px-3 md:px-0 md:w-[960px] md:m-auto">
            <Head />
            {children}
        </div>
    );
};

export default Layout;
