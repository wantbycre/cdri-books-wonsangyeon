import "./globals.css";
import type { Metadata } from "next";
import QueryProvider from "@/components/providers/QueryProvider";
import { Noto_Sans_KR } from "next/font/google";

const notoSansKr = Noto_Sans_KR({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    variable: "--font-noto",
});

export const metadata: Metadata = {
    title: "CDRI kakao books",
    description: "frontend test coding to kakao books",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <body className={notoSansKr.className}>
                <QueryProvider>{children}</QueryProvider>
            </body>
        </html>
    );
}
