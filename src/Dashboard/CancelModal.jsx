import React from "react";
import useTitle from "../utilities/useTitle";

const CancelModal = ({ callback }) => {
    useTitle("Cancel Order | Dashboard");
    return (
        <div>
            <input type="checkbox" id="Cancel-Modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">
                        Do you really want to Proceed?
                    </h3>
                    <div class="modal-action">
                        <label for="Cancel-Modal" class="btn btn-success">
                            Skip
                        </label>
                        <label
                            for="Cancel-Modal"
                            class="btn btn-error"
                            onClick={callback}
                        >
                            Confirm
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelModal;
