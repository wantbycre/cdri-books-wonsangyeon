"use client";

import { cartContentAtom } from "@/store/bookAtom";
import { useAtom } from "jotai";
import Books from "@/components/ui/books";

const Cart = () => {
    const [cartStorage, setCartStorage] = useAtom(cartContentAtom); // cart atom

    return (
        <article>
            <h2 className="text-xl mb-3 font-[700]">내가 찜한 책</h2>
            <section className="flex font-[400] mb-5">
                <p className="me-5">찜한 책</p>
                <span>
                    총{" "}
                    <strong className="text-primary">
                        {cartStorage.length}
                    </strong>
                    건
                </span>
            </section>
            <Books contents={cartStorage} />
        </article>
    );
};

export default Cart;
