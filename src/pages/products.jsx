import { ProductCard } from "@/components/ProductCard";
import RootLayout from "@/components/RootLayout";
import React from "react";

function Products() {
  return (
    <div>
      <ProductCard />
    </div>
  );
}

export default Products;
Products.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
