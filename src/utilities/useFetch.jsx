import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.init";

const url = (str) => "http://localhost:5000" + str;

const useFetch = (path, dependencies) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(url(path), {
                headers: {
                    "Content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            })
            .then((res) => {
                console.log({ res });
                if (res?.data.success) {
                    setData(res.data);
                } else {
                    signOut(auth);
                    navigate("/login");
                }
            })
            .catch((err) => {
                if (
                    err.response.status === 403 ||
                    err.response.status === 401
                ) {
                    signOut(auth);
                    navigate("/login");
                }
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [dependencies]);
    return [data, isLoading, error];
};

export default useFetch;
