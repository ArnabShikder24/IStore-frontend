import OrderCard from "@/components/OrderCard";
import RootLayout from "@/components/RootLayout";
import { auth } from "@/lib/firebase";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Cart() {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(orders);
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
    }, [user]); 
    if (loading) {
        return <p>Loading...</p>
    }
    return (
        <div className="py-10">
            {error && <p>Error: {error}</p>}
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-3 gap-20">
                {orders.map((order, idx) => <OrderCard order={order} key={idx} />)}
            </div>
        </div>
        </div>
    );
}

Cart.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};