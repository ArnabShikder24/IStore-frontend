import { ProductCard } from "@/components/ProductCard";
import RootLayout from "@/components/RootLayout";
import React from "react";

function Products() {
  return (
    <div className="py-10">
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 gap-20">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default Products;
Products.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
