import RootLayout from "@/components/RootLayout";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { toast } from "react-toastify";

const SingleProducts = () => {
    const router = useRouter();
    const { pid } = router.query;
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
        try {
            const response = await axios.get(
            `http://localhost:5000/api/v1/product?product_id=${pid}`
            );
            setProduct(response.data.data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            console.error("Error fetching product:", error.message);
            setLoading(false);
        }
        };
        if (pid) {
            fetchProduct();
        }
    }, [pid]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
    
        return () => unsubscribe();
    }, []);

    if (loading) {
        return <p>loading...</p>
    }
    if (!product) {
        return <p>Product not found.</p>;
    }
    const email = user?.email;
    const { title, img, description, color, category, price, quantity, product_id } = product;
    const AddToCart = async () => {
        if (!email) {
          return;
        }
        let user_id;
        const url = `http://localhost:5000/api/v1/user?email=${email}`;
        try {
          const response = await axios.get(url);
          const userData = response.data;
          user_id = userData[0].user_id;
        } catch (error) {
          console.error('Error fetching user info:', error);
        }
    
    
        if (user_id) {
          const priceFloat = parseFloat(price);
          const orderData = {
            user_id: user_id,
            product_id: product_id,
            quantity: 1,
            subtotal: 1 * priceFloat,
            email: email
          };
      
          try {
            const orderResponse = await axios.post('http://localhost:5000/api/v1/order', orderData);
            if (orderResponse?.data.message === "Product already exist you can't add it again") {
              toast.error(orderResponse?.data.message);
            } else {
              toast.success("successfully added to card");
            }
            console.log(orderResponse.data);
          } catch (error) {
            console.error('Error creating order:', error);
            toast.error(error.message);
          } 
        }
      }    

    return (
        <div>
        <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
            <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div className="flex flex-wrap -mx-4">
                <div className="w-full mb-8 md:w-1/2 md:mb-0">
                <div className="sticky top-0 z-2 overflow-hidden ">
                    <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                    <Image
                        width={500}
                        height={500}
                        className="object-cover w-full lg:h-full "
                        src={img}
                        alt="product image"
                    />
                    </div>
                    <div className="flex-wrap hidden md:flex ">
                    <div className="w-1/2 p-2 sm:w-1/4">
                        <a
                        href="#"
                        className="block border border-blue-300 hover:border-blue-300"
                        >
                        <Image
                            width={450}
                            height={250}
                            className="object-cover w-full lg:h-20"
                            src={img}
                            alt="product image"
                        />
                        </a>
                    </div>
                    <div className="w-1/2 p-2 sm:w-1/4">
                        <a
                        href="#"
                        className="block border border-transparent hover:border-blue-300"
                        >
                        <Image
                            width={450}
                            height={250}
                            className="object-cover w-full lg:h-20"
                            src={img}
                            alt="product image"
                        />
                        </a>
                    </div>
                    <div className="w-1/2 p-2 sm:w-1/4">
                        <a
                        href="#"
                        className="block border border-transparent hover:border-blue-300"
                        >
                        <Image
                            width={450}
                            height={250}
                            className="object-cover w-full lg:h-20"
                            src={img}
                            alt="product image"
                        />
                        </a>
                    </div>
                    <div className="w-1/2 p-2 sm:w-1/4">
                        <a
                        href="#"
                        className="block border border-transparent hover:border-blue-300"
                        >
                        <Image
                            width={450}
                            height={250}
                            className="object-cover w-full lg:h-20"
                            src={img}
                            alt="product image"
                        />
                        </a>
                    </div>
                    </div>
                    <div className="px-6 pb-6 mt-6 border-t border-gray-300 dark:border-gray-400 ">
                    <div className="flex flex-wrap items-center mt-6">
                        <span className="mr-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-4 h-4 text-gray-700 dark:text-gray-400 bi bi-truck"
                            viewBox="0 0 16 16"
                        >
                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                        </svg>
                        </span>
                        <h2 className="text-lg font-bold text-gray-700 dark:text-gray-400">
                        Free Shipping
                        </h2>
                    </div>
                    <div className="mt-2 px-7">
                        <a
                        className="text-sm text-blue-400 dark:text-blue-200"
                        href="#"
                        >
                        Get delivery dates
                        </a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="w-full px-4 md:w-1/2 ">
                <div className="lg:pl-20">
                    <div className="mb-8 ">
                    <h2 className="max-w-xl mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                        {title}
                    </h2>
                    <p className="inline-block mb-6 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                        <span>${price}</span>
                        <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">
                            ${parseFloat(price) + 245.33}
                        </span>
                    </p>
                    <p className="max-w-md text-gray-700 dark:text-gray-400">
                        {description}
                    </p>
                    </div>
                    <div className="mb-8">
                    <h2 className="w-16 pb-1 mb-4 text-2xl font-bold border-b border-blue-300 dark:text-gray-400 dark:border-gray-600">
                        Colors
                    </h2>
                    <div className="flex flex-wrap -mx-2 -mb-2">
                        {color}
                    </div>
                    </div>
                    <div className="mb-8">
                    <h2 className="w-16 pb-1 mb-6 text-xl font-semibold border-b border-blue-300 dark:border-gray-600 dark:text-gray-400">
                        Storage
                    </h2>
                    <div>
                        <div className="flex flex-wrap -mx-2 -mb-2">
                        <button className="px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300 dark:text-gray-400">
                            256 GB
                        </button>
                        <button className="px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                            512 GB
                        </button>
                        <button className="px-4 py-2 mb-2 mr-2 font-semibold border rounded-md hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                            1 TB
                        </button>
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                    <button onClick={AddToCart} className="w-full p-4 bg-blue-500 rounded-md lg:w-2/5 dark:text-gray-200 text-gray-50 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-700">
                        Add to cart
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </div>
    );
};

export default SingleProducts;

SingleProducts.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
