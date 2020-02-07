import React from 'react';
import './modal.css'

const Modal = () => {
    return (
        <div className="modal-bg">
            <div className="modal-container">
                <div className="closeModal">CloseX</div>
                <div className="schedual-
                ">
                    <div className="schedual-Heading">Sechdule Now</div>
                    <div className="schedual-Day-Container">
                        <div className="sd-From container-50">
                            <p>From</p>
                            <input type="text" />
                        </div>
                        <div className="sd-To container-50">
                            <p>To</p>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="schedual-Time-Container">
                        <div className="st-From container-50">
                            <p>From</p>
                            <input type="text" />
                        </div>
                        <div className="st-To container-50">
                            <p>To</p>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="schedual-Frequency-Container">
                    <div className="st-From container-100">
                            <p>Screenshot every:</p>
                            <input type="text" />
                 </div>
       
                    </div>
                    <div className="schedual-Button-container">
                        <button className="schedual-Buttons cancel">Cancel</button>
                        <button className="schedual-Buttons start">Start</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
