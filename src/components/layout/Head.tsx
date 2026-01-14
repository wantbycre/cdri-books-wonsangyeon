"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const styles = {
    active: "border-b-2 border-primary",
};

const Head = () => {
    const pathname = usePathname();

    return (
        <header className="flex justify-between items-center mb-15 mt-3">
            <h1 className="text-[24px] font-bold">
                <Link href="/">CERTICOS BOOKS</Link>
            </h1>
            <nav>
                <ul className="flex gap-10">
                    <li>
                        <Link
                            href="/"
                            className={
                                pathname === "/book" ? styles.active : ""
                            }
                        >
                            도서 검색
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/cart"
                            className={
                                pathname === "/cart" ? styles.active : ""
                            }
                        >
                            내가 찜한 책
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Head;
