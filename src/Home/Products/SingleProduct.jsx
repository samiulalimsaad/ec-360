import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
    return (
        <div className="w-full h-full border-0 card card-compact bg-base-100 justify-self-center">
            <figure className="flex items-center justify-center overflow-hidden h-72">
                <img
                    className="duration-200 hover:scale-110"
                    src={
                        product.image
                            ? product.image
                            : "https://api.lorem.space/image/shoes?w=400&h=225"
                    }
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p className="text-2xl text-slate-700">${product.price}</p>
                <div className="flex items-center justify-between text-xl text-slate-700">
                    <span>min : {product.minOrderQuantity}</span>
                    <span>available : {product.availableQuantity}</span>
                </div>
                <p className="line-clamp-5 text-slate-700">
                    {product.description}
                </p>
                <div className="justify-center card-actions">
                    <Link
                        to={`/purchase/${product._id}`}
                        className="w-full btn btn-info"
                    >
                        Buy Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
