import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase.init";
import { GET_URL } from "../../utilities/apiClient";
import Loading from "../../utilities/Loading";
import useFetch from "../../utilities/useFetch";
import useTitle from "../../utilities/useTitle";

const MakeAdmin = () => {
    useTitle("Users | Dashboard");

    const [user, loading] = useAuthState(auth);

    const { data, isLoading, error, refetch } = useFetch(`/all-user`, user);

    const makeAdmin = async (id) => {
        try {
            const { data: updatedUser } = await axios.patch(
                GET_URL(`/user/${id}`),
                {
                    role: "admin",
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
            if (updatedUser.success) {
                toast.success(updatedUser.message);
                refetch();
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const revokeAdmin = async (id) => {
        try {
            const { data: updatedUser } = await axios.patch(
                GET_URL(`/user/${id}`),
                {
                    role: "",
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
            if (updatedUser.success) {
                toast.success(updatedUser.message);
                refetch();
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    if (isLoading || loading) return <Loading />;

    return (
        <section className="p-10">
            <div className="overflow-x-auto">
                <table className="table w-full table-zebra">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.user?.map((v, i) => (
                            <tr key={v._id}>
                                <th>{i + 1}</th>
                                <td>{v.name}</td>
                                <td>{v.email}</td>
                                <td>
                                    {v.role !== "admin" ? (
                                        <button
                                            className="btn btn-success"
                                            onClick={() => makeAdmin(v._id)}
                                        >
                                            Make Admin
                                        </button>
                                    ) : user?.email === v.email ||
                                      v.email === "admin@admin.com" ? (
                                        <button className="btn btn-accent">
                                            Super Admin
                                        </button>
                                    ) : (
                                        <button
                                            className="btn btn-error"
                                            onClick={() => revokeAdmin(v._id)}
                                        >
                                            Revoke Admin
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MakeAdmin;
