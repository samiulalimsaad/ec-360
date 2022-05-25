import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { auth } from "../firebase.init";
import apiClient from "../utilities/axios";
import Loading from "../utilities/Loading";
import useTitle from "../utilities/useTitle";
import CancelModal from "./CancelModal";

const MyOrders = () => {
    useTitle("My Order | Dashboard");

    const [user, loading, userError] = useAuthState(auth);

    const { isLoading, error, data } = useQuery(
        ["my-orders", user],
        async () => (await apiClient(`/orders/${user?.email}`)).data
    );

    if (isLoading || loading) return <Loading />;

    console.log(data);
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
                        </tr>
                    </thead>
                    <tbody>
                        {data?.orders?.map((v, i) => (
                            <tr key={v._id}>
                                <th>{i + 1}</th>
                                <td>{v.name}</td>
                                <td>{v.price}</td>
                                <td>{v.quantity || ""}</td>
                                <td>
                                    {v.paid ? (
                                        <button
                                            className="btn btn-ghost text-success"
                                            onClick={() => revokeAdmin(v._id)}
                                        >
                                            Paid
                                        </button>
                                    ) : (
                                        <div className="flex gap-2">
                                            <button
                                                className="btn btn-success"
                                                // onClick={() => makeAdmin(v._id)}
                                            >
                                                pay now
                                            </button>
                                            <label
                                                for="Cancel-Modal"
                                                class="btn btn-warning"
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
            <CancelModal />
        </div>
    );
};

export default MyOrders;
