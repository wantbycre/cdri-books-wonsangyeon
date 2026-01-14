"use client";

import Image from "next/image";
import { useAtom } from "jotai";
import { searchResultAtom } from "@/store/bookAtom";
import Books from "@/components/ui/books";

const BooksList = () => {
    // atom data
    const [{ contents, isError }] = useAtom(searchResultAtom);

    return (
        <article>
            <section className="flex font-[400] mb-5">
                <p className="me-5">도서 검색 결과</p>
                <span>
                    총{" "}
                    <strong className="text-primary">
                        {contents?.length || 0}
                    </strong>
                    건
                </span>
            </section>

            {isError ? (
                <section className="text-center mt-40">
                    <Image
                        src="/emp-book.svg"
                        width={80}
                        height={80}
                        alt="검색 결과가 없습니다."
                        className="m-auto"
                    />
                    <p className="text-secondary mt-10">
                        오류가 발생하였습니다.
                        <br />
                        다시 검색해주세요.
                    </p>
                </section>
            ) : !contents || contents.length === 0 ? (
                <section className="text-center mt-40">
                    <Image
                        src="/emp-book.svg"
                        width={80}
                        height={80}
                        alt="검색 결과가 없습니다."
                        className="m-auto"
                    />
                    <p className="text-secondary mt-10">
                        검색된 결과가 없습니다.
                    </p>
                </section>
            ) : (
                <Books contents={contents} />
            )}
        </article>
    );
};

export default BooksList;
