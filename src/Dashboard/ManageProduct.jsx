import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { auth } from "../firebase.init";
import apiClient from "../utilities/apiClient";
import useTitle from "../utilities/useTitle";
import CancelModal from "./CancelModal";

const ManageProduct = () => {
    useTitle("Manage Product | Dashboard");
    const [productId, setProductId] = useState("");
    const [user, loading, userError] = useAuthState(auth);

    const { isLoading, error, data, refetch } = useQuery(
        ["make-admin"],
        async () => (await apiClient("/products")).data
    );
    console.log({ data });
    const deleteProduct = async () => {
        try {
            const { data: updatedProduct } = await apiClient.delete(
                `/products/${productId}`
            );
            if (updatedProduct.success) {
                toast.success(updatedProduct.message);
                refetch();
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="p-10">
            <div className="overflow-x-auto">
                <table className="table w-full table-zebra">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>price</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.products?.reverse()?.map((v, i) => (
                            <tr key={v.id}>
                                <th>{i + 1}</th>
                                <td>{v.name}</td>
                                <td>{v.price}</td>
                                <td>
                                    <figure className="overflow-hidden">
                                        <img
                                            className="duration-200 hover:scale-110"
                                            src={v?.image}
                                            alt="Shoes"
                                        />
                                    </figure>
                                </td>
                                <td>
                                    <label
                                        htmlFor="Cancel-Modal"
                                        className="btn btn-success"
                                        onClick={() => setProductId(v._id)}
                                    >
                                        Delete
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <CancelModal callback={deleteProduct} />
        </div>
    );
};

export default ManageProduct;
