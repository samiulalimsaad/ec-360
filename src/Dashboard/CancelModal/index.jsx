import React from "react";
import useTitle from "../../utilities/useTitle";

const CancelModal = ({ callback }) => {
    useTitle("Cancel Order | Dashboard");
    return (
        <section>
            <input type="checkbox" id="Cancel-Modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">
                        Do you really want to Proceed?
                    </h3>
                    <div className="modal-action">
                        <label
                            htmlFor="Cancel-Modal"
                            className="btn btn-success"
                        >
                            Skip
                        </label>
                        <label
                            htmlFor="Cancel-Modal"
                            className="btn btn-error"
                            onClick={callback}
                        >
                            Confirm
                        </label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CancelModal;
