import {
    CardElement,
    Elements,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../firebase.init";
import { GET_URL } from "../utilities/apiClient";

const stripePromise = loadStripe(process.env.VITE_card_key);

const CheckoutForm = ({ setTransactionId }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            toast.error(error.message);
        } else {
            try {
                const { data } = await axios.patch(
                    GET_URL(`/orders/${id}`),
                    {
                        paid: true,
                        status: "pending",
                    },
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
                    toast.success("Payment successful");
                    setTransactionId(paymentMethod.id);
                }
            } catch (error) {
                toast.error(error.message);
                if (
                    error.response.status === 401 ||
                    error.response.status === 403
                ) {
                    signOut(auth);
                    return navigate("/login");
                }
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: "16px",
                            color: "#424770",
                            "::placeholder": {
                                color: "#aab7c4",
                            },
                        },
                        invalid: {
                            color: "#9e2146",
                        },
                    },
                }}
            />
            <div className="mt-6 form-control">
                <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={!stripe || !elements}
                >
                    Pay
                </button>
            </div>
        </form>
    );
};

const PaymentForm = ({ setTransactionId }) => (
    <Elements stripe={stripePromise}>
        <CheckoutForm setTransactionId={setTransactionId} />
    </Elements>
);

export default PaymentForm;
