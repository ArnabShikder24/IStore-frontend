import OrderCard from "@/components/OrderCard";
import RootLayout from "@/components/RootLayout";
import { auth } from "@/lib/firebase";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Cart() {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [updateSuccess, setUpdateSuccess] = useState('');
    const [loading, setLoading] = useState(true);
    const [mainTotal, setMainTotal] = useState(0);
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const router = useRouter();
    useEffect(() => {
        setLoading(true)
        const calculateMainTotal = () => {
            const total = orders.reduce((accumulator, currentOrder) => {
            return accumulator + parseFloat(currentOrder.subtotal);
            }, 0);
    
            setMainTotal(total.toFixed(2));
            setLoading(false)
        };
        calculateMainTotal();
    }, [orders]);
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(false);
        });

    return () => unsubscribe();
    }, []);


    useEffect(() => {
        const fetchData = async (usere) => {
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/order?email=${usere?.email}`, {
                headers: {
                    'Accept': 'application/json'
                }
                });
                setOrders(response.data.data);
            } catch (error) {
                setError(error.message);
                console.error('Error fetching products:', error.message);
            }
        };
        fetchData(user);
    }, [user, updateSuccess, randomNumber]); 
    if (loading) {
        return <p>Loading...</p>
    }
    return (
        <div className="py-10">
            {error && <p>Error: {error}</p>}
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-3 gap-20">
                {orders.map((order, idx) => <OrderCard order={order} setUpdateSuccess={setUpdateSuccess} key={idx} />)}
            </div>
            </div>
            <div className="text-center mt-20 py-10">
                <h1 className="text-xl font-bold">Your Total Amount</h1>
                <p className="text-xl font-bold py-4">${mainTotal}</p>
                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => router.push("/confirmed")}
                >
                        Confirm Order
                    </button>
            </div>
        </div>
    );
}

Cart.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};