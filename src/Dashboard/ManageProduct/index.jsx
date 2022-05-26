import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase.init";
import { GET_URL } from "../../utilities/apiClient";
import useFetch from "../../utilities/useFetch";
import useTitle from "../../utilities/useTitle";
import CancelModal from "../CancelModal";

const ManageProduct = () => {
    useTitle("Manage Product | Dashboard");
    const [productId, setProductId] = useState("");
    const [user, loading, userError] = useAuthState(auth);

    const { data, isLoading, error, refetch } = useFetch(`/products`, user);

    const deleteProduct = async () => {
        try {
            const { data: updatedProduct } = await axios.delete(
                GET_URL(`/products/${productId}`),
                {
                    headers: {
                        "Content-type": "application/json",
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                }
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
        <section className="p-10">
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
                                    <figure className="w-40 h-full overflow-hidden">
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
        </section>
    );
};

export default ManageProduct;
