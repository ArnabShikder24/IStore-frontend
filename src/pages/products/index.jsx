import { ProductCard } from "@/components/ProductCard";
import RootLayout from "@/components/RootLayout";
import { auth } from "@/lib/firebase";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/products', {
          headers: {
            'Accept': 'application/json'
          }
        });
        setProducts(response.data.data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching products:', error.message);
      }
    };

    fetchData();
  }, []); 
  if (loading) {
    return <p>Loading...</p>
  }
  return (
    <div className="py-10">
      {error && <p>Error: {error}</p>}
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 gap-20">
          {products.map((product, idx) => <ProductCard product={product} email={user.email} key={idx} />)}
        </div>
      </div>
    </div>
  );
}

export default Products;
Products.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
