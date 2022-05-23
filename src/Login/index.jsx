import axios from "axios";
import { signOut } from "firebase/auth";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import {
    useAuthState,
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
    useUpdatePassword,
} from "react-firebase-hooks/auth";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../firebase.init";
import useTitle from "../utilities/useTitle";
import { LoginValidationSchema } from "../validator";

const Login = () => {
    useTitle("Login");

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
        useSignInWithGoogle(auth);
    const [user1] = useAuthState(auth);
    const [updatePassword, updating, errorPass] = useUpdatePassword(auth);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user1 || user || userGoogle) {
            const userData = {
                email: user1?.email,
                name: user1?.displayName,
            };
            axios
                .post(`http://localhost:5000/login`, userData, {
                    header: {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "*",
                    },
                })
                .then(({ data }) => {
                    if (data.success) {
                        localStorage.setItem("accessToken", data.token);
                        navigate(from, { replace: true });
                    } else {
                        signOut(auth);
                    }
                });
        } else {
            localStorage.removeItem("accessToken");
        }
    }, [user, user1, userGoogle]);

    const signIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (email && password) {
            signInWithEmailAndPassword(email, password);
        }
    };

    return (
        <div className="flex items-center justify-center p-4 sm:container sm:p-20">
            <div className="sm:w-1/3">
                <Formik
                    onSubmit={signIn}
                    validationSchema={LoginValidationSchema}
                    initialValues={{ email: "", password: "" }}
                >
                    {({ isSubmitting }) => (
                        <Form
                            className="p-4 px-8 pt-6 pb-8 mb-4 bg-white border rounded-md shadow-md border-slate-500"
                            onSubmit={signIn}
                        >
                            {(error || errorGoogle || errorPass) && (
                                <p className="p-4 mb-4 bg-red-200 rounded-md">
                                    {error?.message ||
                                        errorGoogle?.message ||
                                        errorPass?.message}
                                </p>
                            )}
                            <div className="mb-4">
                                <label
                                    className="block mb-2 text-sm font-bold text-slate-700"
                                    htmlFor="username"
                                >
                                    Email
                                </label>
                                <Field
                                    className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none text-slate-700 focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    required
                                />
                                <ErrorMessage
                                    className="text-error"
                                    name="email"
                                    component="div"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    className="block mb-2 text-sm font-bold text-slate-700"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <Field
                                    className="w-full px-3 py-2 mb-3 leading-tight border rounded shadow appearance-none border-slate-500 text-slate-700 focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="******************"
                                    required
                                />
                                <ErrorMessage
                                    className="text-error"
                                    name="password"
                                    component="div"
                                />
                            </div>
                            <div className="space-y-4">
                                <button
                                    className="w-full btn btn-info"
                                    type="submit"
                                >
                                    Sign In
                                </button>
                                <button
                                    className="w-full btn btn-error"
                                    onClick={() => signInWithGoogle()}
                                >
                                    <img
                                        src="/images/google.png"
                                        alt=""
                                        className="h-6 mx-2"
                                    />
                                    Sign in With Google
                                </button>
                            </div>
                            <div className="flex items-center justify-center mt-4">
                                <p>Don't have an account?</p>
                                <NavLink
                                    to="/signup"
                                    className="ml-2 text-sky-600"
                                >
                                    Create New
                                </NavLink>
                            </div>
                            <div className="flex items-center justify-center mt-4 text-sky-600">
                                <button
                                    type="button"
                                    onClick={async () => {
                                        await updatePassword(email);
                                        toast.success("Updated password!", {
                                            theme: "dark",
                                        });
                                    }}
                                    disabled={isSubmitting}
                                >
                                    Forgot Password?
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Login;
