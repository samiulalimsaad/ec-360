import { Field, Form, Formik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import apiClient from "../utilities/apiClient";
import useTitle from "../utilities/useTitle";
const initialValues = {
    name: "",
    image: "",
    minOrderQuantity: "",
    availableQuantity: "",
    price: "",
};

const AddProduct = () => {
    useTitle("add a Product | Dashboard");

    const uploadProduct = async (values) => {
        console.log(values);

        try {
            const { data } = await apiClient.post("/product", values);
            if (data.success) {
                toast.success("Product Added Successfully");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div>
            <div className="min-h-screen hero bg-base-200">
                <h2>Add Product</h2>
                <div className="w-full max-w-xl shadow-2xl card bg-base-100">
                    <Formik
                        onSubmit={uploadProduct}
                        initialValues={initialValues}
                    >
                        {({ isSubmitting }) => (
                            <Form className="card-body">
                                <fieldset className="p-6 border rounded border-base-900">
                                    <legend className="text-xl font-semibold text-center text-slate-900">
                                        Product Information:
                                    </legend>
                                    <div className="form-control">
                                        <label className="label label-text">
                                            Product Name
                                        </label>
                                        <Field
                                            type="text"
                                            name="name"
                                            className="input input-bordered"
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label label-text">
                                            Product Price
                                        </label>
                                        <Field
                                            type="text"
                                            name="price"
                                            className="input input-bordered"
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label label-text">
                                            Min Order
                                        </label>
                                        <Field
                                            type="number"
                                            name="minOrderQuantity"
                                            className="input input-bordered"
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label label-text">
                                            Available
                                        </label>
                                        <Field
                                            type="number"
                                            name="availableQuantity"
                                            className="input input-bordered"
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label label-text">
                                            Image Link
                                        </label>
                                        <Field
                                            type="text"
                                            name="image"
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

export default AddProduct;