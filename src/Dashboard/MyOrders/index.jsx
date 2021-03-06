import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../firebase.init";
import { GET_URL } from "../../utilities/apiClient";
import Loading from "../../utilities/Loading";
import useFetch from "../../utilities/useFetch";
import useTitle from "../../utilities/useTitle";
import CancelModal from "../CancelModal";

const MyOrders = () => {
    useTitle("My Order | Dashboard");

    const [productId, setProductId] = useState("");

    const [user, loading, userError] = useAuthState(auth);

    const { data, isLoading, error, refetch } = useFetch(
        `/my-orders/${user?.email}`,
        user
    );

    const cancelProduct = async () => {
        try {
            const { data } = await axios.delete(
                GET_URL(`/orders/${productId}`),
                {
                    headers: {
                        "Content-type": "application/json",
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                }
            );
            if (data.success) {
                toast.success("Order Canceled Successfully");
                refetch();
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    if (isLoading || loading) return <Loading />;

    return (
        <section className="p-10">
            <div className="overflow-x-auto">
                <table className="table w-full table-zebra">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.orders?.map((v, i) => (
                            <tr key={v._id}>
                                <th>{i + 1}</th>
                                <td>{v.name}</td>
                                <td>{v.price}</td>
                                <td>{v.quantity || ""}</td>
                                <td>{v.status || ""}</td>
                                <td>
                                    {v.paid ? (
                                        <div className="flex justify-center">
                                            <button className="btn btn-ghost text-success">
                                                Paid
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="flex gap-2">
                                            <Link
                                                to={`/payment/${v._id}`}
                                                className="btn btn-success"
                                                // onClick={() => makeAdmin(v._id)}
                                            >
                                                pay now
                                            </Link>
                                            <label
                                                htmlFor="Cancel-Modal"
                                                className="btn btn-warning"
                                                onClick={() =>
                                                    setProductId(v._id)
                                                }
                                            >
                                                Cancel
                                            </label>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <CancelModal callback={cancelProduct} />
        </section>
    );
};

export default MyOrders;
