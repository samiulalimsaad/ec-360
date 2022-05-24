import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";
import PaymentForm from "../PaymentForm";
import useTitle from "../utilities/useTitle";

const Purchase = () => {
    useTitle("Purchase");
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <div className="min-h-screen hero bg-base-200">
                <h2>Purchase</h2>
                <div className="w-full max-w-sm shadow-2xl card bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <input
                                type="text"
                                className="input input-bordered"
                                value={user?.displayName || ""}
                                disabled
                            />
                        </div>
                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="email"
                                className="input input-bordered"
                                value={user?.email || ""}
                                disabled
                            />
                        </div>
                        <div className="my-2">
                            <PaymentForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
