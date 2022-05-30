import React from "react";
import useTitle from "../utilities/useTitle";

const Portfolio = () => {
    useTitle("Portfolio");
    return (
        <section className="flex items-center justify-center w-full h-screen mx-auto bg-white">
            <iframe
                height="100%"
                width="100%"
                className="w-full h-full"
                src="https://docs.google.com/document/d/e/2PACX-1vTEB_yr3wyFxPnOm4GeOaMmH_limSsL4Dya7J2qNoTdG148U1Lt2tTOZqRk1HSYAyZ5NvgS3ru2gaqO/pub?embedded=true"
            ></iframe>
        </section>
    );
};

export default Portfolio;
