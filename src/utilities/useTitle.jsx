import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = title + " | EC-360";
    }, [title]);
    return title;
};

export default useTitle;
