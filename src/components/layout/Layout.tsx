import type { JSX } from "react";
import Head from "./Head";

const Layout = ({ children }: { children: JSX.Element }) => {
    return (
        <div id="wrap" className="w-[960px] m-auto">
            <Head />
            {children}
        </div>
    );
};

export default Layout;
