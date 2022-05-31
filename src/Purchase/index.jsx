import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../firebase.init";
import { GET_URL } from "../utilities/apiClient";
import Loading from "../utilities/Loading";
import useFetch from "../utilities/useFetch";
import useTitle from "../utilities/useTitle";

const Purchase = () => {
    useTitle("Purchase");
    const [user, loading, userError] = useAuthState(auth);
    const { id } = useParams();
    const location = useNavigate();
    const { data, isLoading, error } = useFetch(`/products/${id}`, id);

    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        setQuantity(data?.product?.minOrderQuantity);
    }, [data]);

    const orderNow = async () => {
        const payload = {
            ...data?.product,
            quantity,
            paid: false,
            status: "processing",
        };
        delete payload["_id"];
        try {
            const { data: prod } = await axios.post(
                GET_URL(`/orders`),
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

    if (isLoading) return <Loading />;

    return (
        <section>
            <div className="min-h-screen hero bg-base-200">
                <h2>Purchase</h2>
                <div className="w-full max-w-xl card bg-base-100">
                    <div className="card-body">
                        <fieldset className="p-6 border rounded border-base-900">
                            <legend className="text-xl font-semibold text-slate-900">
                                User Information:
                            </legend>
                            <div className="form-control">
                                <label className="label label-text">
                                    User Name
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered"
                                    value={user?.displayName || ""}
                                    disabled
                                />
                            </div>
                            <div className="form-control">
                                <label className="label label-text">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered"
                                    value={user?.email || ""}
                                    disabled
                                />
                            </div>
                        </fieldset>
                        <fieldset className="p-6 border rounded border-base-900">
                            <legend className="text-xl font-semibold text-slate-900">
                                Product Information:
                            </legend>
                            <div className="form-control">
                                <label className="label label-text">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered"
                                    value={data?.product?.name || ""}
                                    disabled
                                />
                            </div>
                            <div className="form-control">
                                <label className="label label-text">
                                    Product Price
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered"
                                    value={data?.product?.price || ""}
                                    disabled
                                />
                            </div>
                            <div className="form-control">
                                <label className="label label-text">
                                    Min Order
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered"
                                    value={
                                        data?.product?.minOrderQuantity || ""
                                    }
                                    disabled
                                />
                            </div>
                            <div className="form-control">
                                <label className="label label-text">
                                    Available
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered"
                                    value={
                                        data?.product?.availableQuantity || ""
                                    }
                                    disabled
                                />
                            </div>
                            <div className="form-control">
                                <label className="label label-text">
                                    Quantity
                                </label>
                                <input
                                    type="number"
                                    className="input input-bordered input-accent"
                                    min={data?.product?.minOrderQuantity}
                                    max={data?.product?.availableQuantity}
                                    value={
                                        quantity ||
                                        data?.product?.minOrderQuantity
                                    }
                                    onChange={(e) =>
                                        setQuantity(e.target.value)
                                    }
                                />
                            </div>
                            <div className="my-4 form-control">
                                <button
                                    className="btn btn-accent"
                                    onClick={orderNow}
                                >
                                    Order Now
                                </button>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Purchase;
