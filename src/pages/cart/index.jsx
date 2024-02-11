import { ProductCard } from "@/components/ProductCard";
import RootLayout from "@/components/RootLayout";

export default function Cart() {
    return (
        <div className="py-10">
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-3 gap-20">
                <ProductCard />
            </div>
        </div>
        </div>
    );
}

Cart.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};