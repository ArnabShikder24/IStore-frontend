import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

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
  const { title, img, description, color, category, price, quantity: oldQuantity } = product;
  const handleSubmitQuantity = async () => {
    if (newQuantity < 1) {
      toast.error("Quantity must be greater than 0");
      return;
    }
    if (oldQuantity < newQuantity) {
      toast.error("Quantity must be less than Available quantity");
      return;
    }
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
      setUpdateSuccess(response.data.message);
      toast.success("Order Updated");
    } catch (error) {
      console.error('Error updating order:', error.message);
      setError(error.message)
      setUpdateSuccess('')
    }
  };

  const handleDeleteOrder = async () => {
    const orderToDelete = {
      order_id: order_id,
      email: email
    };

    try {
      const response = await axios.post('http://localhost:5000/api/v1/order/delete', orderToDelete);
      console.log('Order deleted successfully:', response.data.message);
      setUpdateSuccess(response.data.message);
      toast.success("Product Removed");
    } catch (error) {
      console.error('Error deleting order:', error.message);
      setUpdateSuccess('')
    }
  };
  return (
    <>
      {product && (
        <>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700">
            <Image
              width={450}
              height={250}
              className="p-8 rounded-t-lg h-[400px]"
              src={img}
              alt="product image"
            />
            <div className="px-5 pb-5">
              <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                Order_id: {order_id}
              </h5>
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
              <div>
                <span className="text-base font-bold text-gray-900 dark:text-white">
                  Quantity: {quantity}
                </span>
                <br />
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  SubTotal: ${subtotal}
                </span>
              </div>
              <div>
                category: {category}, colour: {color}
              </div>
              {show && (
                <div className="my-3">
                  <p className="text-sm mb-1">Update Your Quantity : </p>
                  <div className="flex gap-2 items-center">
                    <button
                      className="w-8 h-8 bg-red-500 text-white rounded-lg flex items-center justify-center"
                      onClick={() => setNewQuantity(prevQuantity => prevQuantity > 0 && prevQuantity - 1)}
                    >-</button>
                    <input
                      className="w-24 h-10 rounded-lg"
                      type="number"
                      onChange={e => setNewQuantity(parseInt(e.target.value, 10))}
                      value={newQuantity}
                    />
                    <button
                      className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center"
                      onClick={() => setNewQuantity(prevQuantity => prevQuantity + 1)}
                    >+</button>
                  </div>
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
                      confirm
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
                    <button onClick={handleDeleteOrder}className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-5">
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
