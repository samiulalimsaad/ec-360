import axios from "axios";
import { signOut } from "firebase/auth";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase.init";
import { GET_URL } from "../../utilities/apiClient";
import Loading from "../../utilities/Loading";
import useTitle from "../../utilities/useTitle";

const AddReview = () => {
    useTitle("Add Review | Dashboard");

    const [user, loading] = useAuthState(auth);

    const uploadReview = async (values, { resetForm }) => {
        try {
            const { data } = await axios.post(GET_URL("/review"), values, {
                headers: {
                    "Content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            });

            console.log(data);
            if (data.success) {
                toast.success("Review Added Successfully");
                resetForm();
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

    if (loading) return <Loading />;

    const initialValues = {
        name: user?.displayName,
        email: user?.email,
        description: "",
        rating: 5,
    };

    return (
        <div>
            <div className="min-h-screen hero bg-base-200">
                <h2>Add Product</h2>
                <div className="w-full max-w-xl shadow-2xl card bg-base-100">
                    <Formik
                        onSubmit={uploadReview}
                        initialValues={initialValues}
                    >
                        {({ isSubmitting }) => (
                            <Form className="card-body">
                                <fieldset className="p-6 border rounded border-base-900">
                                    <legend className="text-xl font-semibold text-center text-slate-900">
                                        Review:
                                    </legend>
                                    <div className="form-control">
                                        <label className="label label-text">
                                            Name
                                        </label>
                                        <Field
                                            type="text"
                                            name="name"
                                            className="input input-bordered"
                                            disabled
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label label-text">
                                            Email
                                        </label>
                                        <Field
                                            type="email"
                                            name="email"
                                            className="input input-bordered"
                                            disabled
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label label-text">
                                            Rating
                                        </label>
                                        <Field
                                            type="number"
                                            name="rating"
                                            className="input input-bordered"
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label label-text">
                                            Description
                                        </label>
                                        <Field
                                            as="textarea"
                                            name="description"
                                            className="input input-bordered"
                                        />
                                    </div>
                                    <div className="my-4 form-control">
                                        <button
                                            type="submit"
                                            className="btn btn-accent"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </fieldset>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default AddReview;
