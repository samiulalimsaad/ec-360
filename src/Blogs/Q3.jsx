import React from "react";

const Q3 = () => {
    return (
        <div>
            <h3 className="my-4 text-2xl font-semibold text-center">
                How does prototypical inheritance work?
            </h3>
            <div className="flex items-center justify-center">
                <ul className="list-decimal">
                    <li>
                        In javascript Prototypal Inheritance is a feature to add
                        methods and properties in objects.
                    </li>
                    <li>
                        It is a method by which an object can inherit the
                        properties and methods of another object.
                    </li>
                    <li>
                        Traditionally, in order to get and set the [[Prototype]]
                        of an object, we use Object.getPrototypeOf and
                        Object.setPrototypeOf.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Q3;
