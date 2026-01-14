import { useQuery } from "@tanstack/react-query";
import { fetchBooks } from "@/services/bookService";
import { SearchParams } from "@/types/book";

// src/hooks/useBooks.ts
export const useBookSearch = (params: SearchParams) => {
    return useQuery({
        queryKey: ["books", params],
        queryFn: () => fetchBooks(params),
        enabled: !!params.query,
    });
};
