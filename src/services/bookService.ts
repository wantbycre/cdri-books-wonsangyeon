import { SearchParams } from "@/types/book";

const KAKAO_URL = "https://dapi.kakao.com/v3/search/book";
const KAKAO_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;

export const fetchBooks = async ({
    query,
    target,
    page = 1,
    size = 10,
}: SearchParams) => {
    if (!query) return null;

    const params = new URLSearchParams({
        query,
        page: String(page),
        size: String(size),
    });

    // target이 있을 때만 파라미터 추가
    if (target) {
        params.append("target", target);
    }

    const res = await fetch(`${KAKAO_URL}?${params.toString()}`, {
        headers: {
            Authorization: `KakaoAK ${KAKAO_KEY}`,
        },
    });

    if (!res.ok) throw new Error("도서 데이터를 불러오는 데 실패했습니다.");
    return res.json();
};
