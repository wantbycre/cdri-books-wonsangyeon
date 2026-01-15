"use client";

import Image from "next/image";
import { useState } from "react";
import { useAtom } from "jotai";
import { cartContentAtom } from "@/store/bookAtom";
import { Book } from "@/types/book";

interface Props {
    contents: Book[];
}

const Books = ({ contents }: Props) => {
    const [openIsbn, setOpenIsbn] = useState<string | null>(null); // key
    const [cartStorage, setCartStorage] = useAtom(cartContentAtom); // cart atom

    // 국가 화폐단위 처리
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("ko-KR").format(price);
    };

    // toggle
    const handleToggle = (isbn: string) => {
        setOpenIsbn(openIsbn === isbn ? null : isbn);
    };

    // 내가 찜한 책
    const handleCartToggle = (book: Book) => {
        const isBook = cartStorage.some((n) => n.isbn === book.isbn);

        if (isBook) {
            const filterCart = cartStorage.filter((n) => n.isbn !== book.isbn);
            setCartStorage(filterCart);
        } else {
            setCartStorage((prev) => [...prev, book]);
        }
    };

    return (
        <>
            {contents.map((book, index) => {
                const isbn = book.isbn || String(index);
                const isOpen = openIsbn === isbn;

                const isCart = cartStorage.some((n) => n.isbn === book.isbn);

                return (
                    <div key={isbn} className="flex flex-col">
                        {!isOpen && (
                            <section className="flex flex-col md:flex-row justify-between items-center border-b border-gray py-3 ps-3 md:ps-7 pe-5">
                                <div className="flex w-full md:w-auto md:flex-1 pe-5">
                                    <div className="w-[48px] h-[68px] bg-gray me-8 relative overflow-hidden shrink-0">
                                        <Image
                                            src={book.thumbnail}
                                            alt={book.title}
                                            sizes="48px"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <p className="md:text-lg font-[600]  max-w-[300px]">
                                            {/* truncate */}
                                            {book.title}
                                        </p>
                                        <span className="text-sm text-secondary ms-5">
                                            {book.authors.join(", ")}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center w-[360px] justify-end">
                                    <div className="text-lg font-[600] whitespace-nowrap">
                                        {book.sale_price > 0
                                            ? `${formatPrice(
                                                  book.sale_price
                                              )}원`
                                            : `${formatPrice(book.price)}원`}
                                    </div>
                                    <div className="flex ms-10">
                                        <a
                                            href={book.url}
                                            target="_blank"
                                            className="py-3 px-6 text-white bg-primary rounded-md cursor-pointer"
                                        >
                                            구매하기
                                        </a>
                                        <button
                                            type="button"
                                            className="py-3 ps-6 pe-5 text-secondary bg-light-gray rounded-md ms-2 flex items-center cursor-pointer"
                                            onClick={() => handleToggle(isbn)}
                                        >
                                            상세보기
                                            <Image
                                                src="/arrow.svg"
                                                width={12}
                                                height={18}
                                                alt="펼침"
                                                className="ms-1"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* 상세 섹션 (isOpen이 true일 때만 block) */}
                        <div className={isOpen ? "block" : "hidden"}>
                            <section className="flex flex-col md:flex-row justify-between border-b border-gray py-8 ps-7 pe-5 bg-[#fafafa]">
                                <div className="flex flex-col md:flex-row flex-1">
                                    <div className="relative w-[210px] h-[280px] bg-gray me-8 shrink-0 overflow-hidden shadow-md">
                                        <Image
                                            src={book.thumbnail}
                                            alt={book.title}
                                            fill
                                            className="object-cover"
                                            sizes="210px"
                                        />
                                        <button
                                            className="absolute right-2 top-2 z-10"
                                            onClick={() =>
                                                handleCartToggle(book)
                                            }
                                        >
                                            <Image
                                                src={
                                                    isCart
                                                        ? "/like-active.svg"
                                                        : "/like.svg"
                                                }
                                                width={24}
                                                height={24}
                                                alt="좋아요"
                                            />
                                        </button>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center mt-5 md:mt-2">
                                            <p className="text-22 font-[700]">
                                                {book.title}
                                            </p>
                                            <span className="text-sm text-secondary ms-5">
                                                {book.authors.join(", ")}
                                            </span>
                                        </div>
                                        <div className="mt-6">
                                            <p className="font-[600] mb-3 text-16">
                                                책 소개
                                            </p>
                                            <div className="text-[10px] pe-8 md:w-110">
                                                {book.contents}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex md:w-[360px] flex-col justify-between items-stretch text-end mt-5 md:mt-0">
                                    <div className="mb-5 md:mb-0">
                                        <button
                                            type="button"
                                            className="py-3 ps-6 pe-5 text-secondary bg-light-gray rounded-md cursor-pointer inline-flex items-center"
                                            onClick={() => setOpenIsbn(null)}
                                        >
                                            상세보기
                                            <Image
                                                src="/arrow.svg"
                                                width={12}
                                                height={18}
                                                alt="닫힘"
                                                className="ms-1 transform rotate-180"
                                            />
                                        </button>
                                    </div>
                                    <div className="mb-2">
                                        {book.sale_price > 0 && (
                                            <div className="text-lg flex items-center justify-end text-font-subtitle">
                                                <span className="text-[10px] text-subtitle font-[400] me-2">
                                                    원가
                                                </span>
                                                <span className="line-through">
                                                    {formatPrice(book.price)}원
                                                </span>
                                            </div>
                                        )}
                                        <div className="text-lg font-[600] flex items-center justify-end mt-2">
                                            <span className="text-[10px] text-subtitle font-[400] me-2">
                                                {book.sale_price > 0
                                                    ? "할인가"
                                                    : "판매가"}
                                            </span>
                                            {formatPrice(
                                                book.sale_price > 0
                                                    ? book.sale_price
                                                    : book.price
                                            )}
                                            원
                                        </div>
                                        <a
                                            href={book.url}
                                            target="_blank"
                                            className="block text-center py-3 px-6 text-white bg-primary rounded-md cursor-pointer w-full mt-6 font-bold"
                                        >
                                            구매하기
                                        </a>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Books;
