import React from "react";

const CancelModal = ({ id }) => {
    return (
        <div>
            <label for="Cancel-Modal" class="btn modal-button">
                open modal
            </label>

            <input type="checkbox" id="Cancel-Modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">
                        Do you really want to Cancel?
                    </h3>
                    <div class="modal-action">
                        <label for="Cancel-Modal" class="btn btn-success">
                            Skip
                        </label>
                        <label for="Cancel-Modal" class="btn btn-error">
                            Confirm
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelModal;
