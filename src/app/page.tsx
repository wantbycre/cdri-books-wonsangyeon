import Head from "@/components/layout/Head";
import Book from "@/components/book/page";

export default function Home() {
    return (
        <div id="wrap" className="w-[960px] m-auto">
            <Head />
            <Book />
        </div>
    );
}
