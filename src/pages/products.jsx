import { ProductCard } from "@/components/ProductCard";
import RootLayout from "@/components/RootLayout";
import React from "react";

function Products() {
  return (
    <div className="w-full">
      <div className="flex align-items-center w-full justify-content-center">
        <div className="grid grid-cols-3 gap-4">
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
