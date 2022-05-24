import { Field, Form, Formik } from "formik";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { auth } from "../firebase.init";
import apiClient from "../utilities/axios";
import Loading from "../utilities/Loading";
import useTitle from "../utilities/useTitle";

const Profile = () => {
    useTitle("Profile");
    const [user, loading, userError] = useAuthState(auth);

    const { isLoading, error, data } = useQuery(
        ["Profile", user],
        async () => (await apiClient(`/user?email=${user?.email || ""}`)).data
    );

    console.log(user?.email);
    const updateUser = (values) => {
        console.log(values);
    };

    console.log(data);

    if (isLoading || loading) return <Loading />;

    const initialValues = {
        email: user?.email,
        name: user?.displayName,
        education: "",
        address: "",
        phone: "",
        linkedin: "",
    };

    return (
        <div>
            <div className="min-h-screen p-10 hero bg-base-200">
                <h2>Profile</h2>
                <div className="w-full shadow-2xl card bg-base-100">
                    <Formik onSubmit={updateUser} initialValues={initialValues}>
                        {({ isSubmitting }) => (
                            <Form className="flex-row justify-between gap-4 card-body">
                                <fieldset className="w-full p-6 border rounded border-base-900">
                                    <legend className="text-xl font-semibold text-slate-900">
                                        User Information:
                                    </legend>
                                    <div className="form-control">
                                        <label className="label label-text">
                                            User Name
                                        </label>
                                        <Field
                                            type="text"
                                            name="name"
                                            className="input input-bordered input-accent"
                                            disabled
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label label-text">
                                            Email
                                        </label>
                                        <Field
                                            type="text"
                                            name="email"
                                            className="input input-bordered input-accent"
                                            disabled
                                        />
                                    </div>
                                </fieldset>
                                <fieldset className="w-full p-6 border rounded border-base-900">
                                    <legend className="text-xl font-semibold text-slate-900">
                                        Additional Information:
                                    </legend>
                                    <div className="form-control">
                                        <label className="label label-text">
                                            Education
                                        </label>
                                        <Field
                                            type="text"
                                            name="education"
                                            className="input input-bordered input-accent"
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label label-text">
                                            Address
                                        </label>
                                        <Field
                                            type="text"
                                            name="address"
                                            className="input input-bordered input-accent"
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label label-text">
                                            Phone Number
                                        </label>
                                        <Field
                                            type="text"
                                            name="phone"
                                            className="input input-bordered input-accent"
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label label-text">
                                            LinkedIn Link
                                        </label>
                                        <Field
                                            type="text"
                                            name="linkedin"
                                            className="input input-bordered input-accent"
                                        />
                                    </div>
                                    <div className="my-4 form-control">
                                        <button
                                            type="submit"
                                            className="btn btn-accent"
                                            disabled={isSubmitting}
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

export default Profile;
