import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { auth } from "../firebase.init";
import apiClient from "../utilities/axios";
import Loading from "../utilities/Loading";

const MakeAdmin = () => {
    const [user, loading] = useAuthState(auth);

    const { isLoading, error, data, refetch } = useQuery(
        ["make-admin"],
        async () => (await apiClient("/all-user")).data
    );

    const makeAdmin = async (id) => {
        try {
            const { data: updatedUser } = await apiClient.patch(`/user/${id}`, {
                role: "admin",
            });
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
            const { data: updatedUser } = await apiClient.patch(`/user/${id}`, {
                role: "",
            });
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
        <div className="p-10">
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
                                    ) : user?.email === v.email ? (
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
        </div>
    );
};

export default MakeAdmin;
