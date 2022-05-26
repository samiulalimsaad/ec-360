import React from "react";

const Q4 = () => {
    return (
        <div>
            <h3 className="my-4 text-2xl font-semibold text-center">
                Why you do not set the state directly in React. For example, if
                you have const [products, setProducts] = useState([]). Why you
                do not set products = [...] instead, you use the setProducts
            </h3>
            <div className="flex items-center justify-center">
                <ul className="list-decimal">
                    <li>
                        we never update the state directly because : react do
                        some own task for performance and and if use directly
                        set products = [...] then we would face some un expected
                        behaviors
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Q4;
