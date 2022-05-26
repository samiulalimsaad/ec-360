import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { auth } from "../firebase.init";
import Loading from "../utilities/Loading";
import useFetch from "../utilities/useFetch";
import useTitle from "../utilities/useTitle";
import PaymentForm from "./PaymentForm";

const Payment = () => {
    useTitle("Payment");
    const [user, loading, userError] = useAuthState(auth);
    const { id } = useParams();

    const { data, isLoading, error } = useFetch(`/orders/${id}`, id);

    const [min, setMin] = useState(0);
    const [transactionId, setTransactionId] = useState("");

    if (isLoading) return <Loading />;

    return (
        <section>
            <div className="min-h-screen hero bg-base-200">
                <h2>Payment</h2>
                <div className="w-full max-w-xl shadow-2xl card bg-base-100">
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
                                    value={data?.orders?.name || ""}
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
                                    value={data?.orders?.price || ""}
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
                                    value={data?.orders?.quantity}
                                    disabled
                                />
                            </div>
                        </fieldset>
                        <fieldset className="p-6 border rounded border-base-900">
                            <legend className="text-xl font-semibold text-slate-900">
                                Payment Information:
                            </legend>
                            <div className="my-2">
                                {transactionId && (
                                    <div className="my-4 text-success">
                                        <span className="font-semibold">
                                            Transaction Id : {transactionId}
                                        </span>
                                    </div>
                                )}
                                <PaymentForm
                                    setTransactionId={setTransactionId}
                                />
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payment;
