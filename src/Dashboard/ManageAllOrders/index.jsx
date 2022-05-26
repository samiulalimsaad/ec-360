import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase.init";
import { GET_URL } from "../../utilities/apiClient";
import Loading from "../../utilities/Loading";
import useFetch from "../../utilities/useFetch";
import useTitle from "../../utilities/useTitle";
import CancelModal from "../CancelModal";

const ManageAllOrders = () => {
    useTitle("Manage All Order | Dashboard");

    const [productId, setProductId] = useState("");

    const [user, loading, userError] = useAuthState(auth);

    const { data, isLoading, error, refetch } = useFetch(`/orders`, user);

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

    const updateOrder = async (id) => {
        const payload = {
            paid: true,
            status: "shipped",
        };
        try {
            const { data: prod } = await axios.patch(
                GET_URL(`/orders/${id}`),
                payload,
                {
                    headers: {
                        "Content-type": "application/json",
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                }
            );

            if (prod.success) {
                toast.success("order completed. Go dashboard to pay.");
                refetch();
            }
        } catch (error) {
            if (
                error.response.status === 401 ||
                error.response.status === 403
            ) {
                signOut(auth);
                return location("/login");
            }
            toast.error(error.message);
        }
    };

    if (isLoading || loading) return <Loading />;

    return (
        <div className="p-10">
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
                                <td>{v.quantity}</td>
                                <td>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => {
                                            updateOrder(v._id);
                                        }}
                                    >
                                        {v.status}
                                    </button>
                                </td>
                                <td>
                                    {v.paid ? (
                                        <div className="flex justify-center">
                                            <button className="btn btn-ghost text-success">
                                                Paid
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="flex gap-2">
                                            <button className="btn btn-info">
                                                Unpaid
                                            </button>
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
        </div>
    );
};

export default ManageAllOrders;
