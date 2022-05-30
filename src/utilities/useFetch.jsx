import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.init";
import { GET_URL } from "./apiClient";

const useFetch = (path, dependencies) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({});

    const [f, ff] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(GET_URL(path), {
                headers: {
                    "Content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            })
            .then((res) => {
                if (res?.data.success) {
                    setData(res.data);
                } else {
                    signOut(auth);
                    navigate("/login");
                }
            })
            .catch((err) => {
                if (
                    err.response.status === 401 ||
                    err.response.status === 403
                ) {
                    signOut(auth);
                    navigate("/login");
                }
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [dependencies, f]);

    const refetch = () => ff((p) => !p);

    return { data, isLoading, error, refetch };
};

export default useFetch;
