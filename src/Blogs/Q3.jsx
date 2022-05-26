import React from "react";

const Q3 = () => {
    return (
        <div>
            <h3 className="text-2xl font-semibold text-center my-4">
                How does prototypical inheritance work?
            </h3>
            <p>
                In javascript Prototypal Inheritance is a feature to add methods
                and properties in objects.
            </p>
            <p>
                It is a method by which an object can inherit the properties and
                methods of another object.
            </p>
            <p>
                Traditionally, in order to get and set the [[Prototype]] of an
                object, we use Object.getPrototypeOf and Object.setPrototypeOf.
            </p>
        </div>
    );
};

export default Q3;
