import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { auth } from "../firebase.init";
import PaymentForm from "../PaymentForm";
import apiClient from "../utilities/axios";
import Loading from "../utilities/Loading";
import useTitle from "../utilities/useTitle";

const Purchase = () => {
    useTitle("Purchase");
    const [user, loading, userError] = useAuthState(auth);
    const { id } = useParams();

    const { isLoading, error, data } = useQuery(
        "purchase",
        async () => (await apiClient(`/products/${id}`)).data
    );
    const [min, setMin] = useState(0);

    if (isLoading) return <Loading />;

    return (
        <div>
            <div className="min-h-screen hero bg-base-200">
                <h2>Purchase</h2>
                <div className="w-full max-w-xl shadow-2xl card bg-base-100">
                    <div className="card-body">
                        <fieldset className="p-6 border rounded border-base-900">
                            <legend className="text-xl text-slate-900 text-semibold">
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
                            <legend className="text-xl text-slate-900 text-semibold">
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
                                        min || data?.product?.minOrderQuantity
                                    }
                                    onChange={(e) => setMin(e.target.value)}
                                />
                            </div>
                        </fieldset>
                        <fieldset className="p-6 border rounded border-base-900">
                            <legend className="text-xl text-slate-900 text-semibold">
                                Payment Information:
                            </legend>
                            <div className="my-2">
                                <PaymentForm />
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
