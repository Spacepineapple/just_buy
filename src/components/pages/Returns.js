import React from 'react';

function Shipping() {
    return(
        <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
            <h2 className="display-5 fw-bold">Returns Policy</h2>
            <p className="col-md-8 fs-4">To find out more about our returns policy, click the button below</p>
            <button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#returnsPolicyModal">View Policy</button>
        </div>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="returnsPolicyModal" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h1 className="modal-title fs-5" id="returnsPolicyModal">Returns Policy</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>We accept returns on all products within 35 days. Returned products may be exchanged for credit, a different product, or a full refund to the original payment method. To return your product, please follow the instructions in your order confirmation email. If you do not have your order confirmation, contact us using one of the methods on our contact page. Please note that in some cases, we cannot accept a return:</p>
                    <ul>
                        <li>Damaged items</li>
                        <li>Items from multipacks unless returned as a whole set</li>
                        <li>Items for which no proof of purchase can be provided</li>
                    </ul>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
            </div>
        </div>

    </div>
    )
}

export default Shipping;