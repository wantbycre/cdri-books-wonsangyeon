"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useBookSearch } from "@/hooks/useBooks";
import BooksList from "./BooksList";

import { Spinner } from "@/components/ui/spinner";
import { SearchType } from "@/types/book";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const Book = () => {
    const [word, setWord] = useState(""); // input 타이핑
    const [searchWord, setSearchWord] = useState(""); // 검색
    const [type, setType] = useState<SearchType>("title"); // 상세검색
    const [modal, setModal] = useState(false); // 모달
    const [modalWord, setModalWord] = useState(); // 모달 타이핑

    // useEffect(() => {
    const { data, isLoading, isError } = useBookSearch({
        query: searchWord,
        target: type,
    });
    // }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSearchWord(word);
    };

    console.log(data?.documents);

    return (
        <>
            <search>
                <form onSubmit={handleSubmit}>
                    <h2 className="text-xl mb-5">도서검색</h2>
                    <div className="relative flex items-center mb-4">
                        <input
                            type="text"
                            className="bg-light-gray rounded-3xl w-[480px] leading-12 ps-12"
                            placeholder="검색어를 입력하세요."
                            value={word}
                            onChange={(e) => setWord(e.target.value)}
                        />
                        <Image
                            src="/search.svg"
                            width={20}
                            height={20}
                            alt="검색"
                            className="absolute left-[13px] top-[13px]"
                        />
                        <div>
                            <button
                                type="button"
                                className="ms-4 px-2 py-1 text-sm border border-subtitle rounded-lg text-subtitle cursor-pointer"
                                onClick={() => setModal(true)}
                            >
                                상세검색
                            </button>
                        </div>

                        {/* 상세검색 팝업 */}
                        <div className={modal ? "block" : "hidden"}>
                            <div className="fixed inset-0 flex justify-center items-center z-1000 border">
                                <div className="fixed left-0 top-0 bottom-0 right-0 bg-black opacity-20"></div>
                                <div className="bg-white fixed left-auto top-1/2 z-2000 w-[360px] rounded-2xl shadow-2xl pt-10 pb-5 px-7">
                                    <div className="flex">
                                        <div className="me-2">
                                            <Select
                                                value={type}
                                                onValueChange={(
                                                    value: SearchType
                                                ) => setType(value)}
                                            >
                                                <SelectTrigger className="w-[100px] border-0 border-b border-gray shadow-none">
                                                    <SelectValue placeholder="제목" />
                                                </SelectTrigger>
                                                <SelectContent
                                                    style={{ zIndex: 3000 }}
                                                >
                                                    <SelectItem value="title">
                                                        제목
                                                    </SelectItem>
                                                    <SelectItem value="person">
                                                        저자명
                                                    </SelectItem>
                                                    <SelectItem value="publisher">
                                                        출판사
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="flex-1">
                                            <input
                                                type="text"
                                                placeholder="검색어 입력"
                                                className="border-b border-primary w-full h-8"
                                                onChange={(e) =>
                                                    setWord(e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <button
                                            type="submit"
                                            className="py-2 px-6 text-white bg-primary rounded-md cursor-pointer w-full"
                                        >
                                            검색하기{" "}
                                        </button>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => setModal(false)}
                                    >
                                        <Image
                                            src="/close.svg"
                                            width={12}
                                            height={12}
                                            alt="팝업 닫기"
                                            className="absolute right-[13px] top-[13px] cursor-pointer"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* 검색기록 */}
                        {/* <div className="absolute left-0 top-[48px] bg-light-gray rounded-b-3xl w-[480px]">
                            <ul className="pb-2">
                                <li className="ps-12 pe-5 py-2 flex justify-between text-subtitle">
                                    <button
                                        type="button"
                                        className="cursor-pointer"
                                    >
                                        노르웨이숲
                                    </button>
                                    <button type="button">
                                        <Image
                                            src="/delete.svg"
                                            width={16}
                                            height={16}
                                            alt="삭제"
                                            className="cursor-pointer"
                                        />
                                    </button>
                                </li>
                                <li className="ps-12 pe-5 py-2 flex justify-between text-subtitle">
                                    <button
                                        type="button"
                                        className="cursor-pointer"
                                    >
                                        노르웨이숲
                                    </button>
                                    <button type="button">
                                        <Image
                                            src="/delete.svg"
                                            width={16}
                                            height={16}
                                            alt="삭제"
                                            className="cursor-pointer"
                                        />
                                    </button>
                                </li>
                                <li className="ps-12 pe-5 py-2 flex justify-between text-subtitle">
                                    <button
                                        type="button"
                                        className="cursor-pointer"
                                    >
                                        노르웨이숲
                                    </button>
                                    <button type="button">
                                        <Image
                                            src="/delete.svg"
                                            width={16}
                                            height={16}
                                            alt="삭제"
                                            className="cursor-pointer"
                                        />
                                    </button>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </form>
            </search>
            <article>
                <section className="flex font-[400] mb-5">
                    <p className="me-5">도서 검색 결과</p>
                    <span>
                        총{" "}
                        <strong className="text-primary">
                            {data?.documents.length || 0}
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
                ) : !data?.documents || data.documents.length === 0 ? (
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
                    <BooksList BooksData={data.documents} />
                )}
            </article>
        </>
    );
};

export default Book;
