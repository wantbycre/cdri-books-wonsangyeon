import { useQuery } from "@tanstack/react-query";
import { fetchBooks } from "@/services/bookService";
import { SearchParams } from "@/types/book";

export const useBookSearch = (params: SearchParams) => {
    return useQuery({
        queryKey: ["books", params],
        queryFn: () => fetchBooks(params),
        enabled: !!params.query,
        staleTime: 1000 * 60 * 5, // 5분간 데이터 유효
        gcTime: 1000 * 60 * 10, // 10분간 캐시 유지
    });
};
