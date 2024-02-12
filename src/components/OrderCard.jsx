import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function OrderCard({ order, setUpdateSuccess }) {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const { email, order_id, product_id, quantity, subtotal, user_id } = order;
    const [newQuantity, setNewQuantity] = useState(quantity);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    useEffect(() => {
        const fetchProduct = async () => {
        try {
            const response = await axios.get(
            `http://localhost:5000/api/v1/product?product_id=${product_id}`
            );
            setProduct(response.data.data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            console.error("Error fetching product:", error.message);
            setLoading(false);
        }
        };

        fetchProduct();
    }, [product_id]);
  if (loading) {
    return <p>.</p>;
  }
    const { title, img, description, color, category, price } = product;
    const handleSubmitQuantity = async () => {
        const newSubtotal = parseFloat(price) * parseInt(newQuantity);
        const formdata = {
            quantity: parseInt(newQuantity),
            order_id: order_id,
            email: email,
            subtotal: newSubtotal
        }
        try {
            const response = await axios.post('http://localhost:5000/api/v1/order/update', formdata);
            console.log('Order updated successfully:', response.data.message);
            setUpdateSuccess(response.data.message)
          } catch (error) {
            console.error('Error updating order:', error.message);
            setError(error.message)
            setUpdateSuccess('')
          }
    }
  return (
    <>
      {product && (
        <>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700">
            <Image
              width={450}
              height={250}
              className="p-8 rounded-t-lg"
              src="https://images.unsplash.com/photo-1700125621736-75a6d245a308?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTUlMjBwcm8lMjBtYXh8ZW58MHx8MHx8fDA%3D"
              alt="product image"
            />
            <div class="px-5 pb-5">
              <h5 class="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                Order_id: {order_id}
              </h5>
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
              <div>
                <span class="text-base font-bold text-gray-900 dark:text-white">
                  Quantity: {quantity}
                </span>
                <br />
                <span class="text-xl font-bold text-gray-900 dark:text-white">
                  SubTotal: ${subtotal}
                </span>
              </div>
              <div>
                category: {category}, colour: {color}
              </div>
              {show && (
                <div className="my-3">
                  <p className="text-sm mb-1">Update Your Quantity : </p>
                  <input
                    className="w-24 h-10 rounded-lg"
                    type="number"
                    onChange={e => setNewQuantity(e.target.value)}
                    defaultValue={quantity}
                  />
                </div>
              )}

              <div className="mt-4">
                {show && (
                  <div>
                    <button
                        onClick={() => {
                            setShow(false)
                            handleSubmitQuantity();
                      }}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Submit
                    </button>
                    <button
                      onClick={() => setShow(false)}
                      className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-5"
                    >
                      cancel
                    </button>
                  </div>
                )}
                {!show && (
                  <div>
                    <button
                      onClick={() => setShow(true)}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Update
                    </button>
                    <button className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-5">
                      Remove from Cart
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}