export interface Book {
    title: string;
    contents: string;
    url: string;
    isbn: string;
    datetime: string;
    authors: string[];
    publisher: string;
    thumbnail: string;
    price: number;
    sale_price: number;
    status: string;
}

export interface KakaoBookResponse {
    documents: Book[];
    meta: {
        is_end: boolean;
        pageable_count: number;
        total_count: number;
    };
}

export type SearchType = "title" | "isbn" | "publisher" | "person";

export interface SearchParams {
    query: string;
    target: SearchType;
    page?: number;
    size?: number;
}
