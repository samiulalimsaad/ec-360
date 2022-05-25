import {
    CardElement,
    Elements,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const stripePromise = loadStripe(process.env.VITE_card_key);

const CheckoutForm = ({ setTransactionId }) => {
    const stripe = useStripe();
    const elements = useElements();
    const id = useParams();

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
            toast.success("Payment successful");
            setTransactionId(paymentMethod.id);
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
