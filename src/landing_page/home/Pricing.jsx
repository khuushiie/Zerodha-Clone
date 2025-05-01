import React from 'react';
function Pricing() {
    return (
        <div className='container mb-5' style={{ marginTop: "10rem" }}>
            <div className="row">
                <div className="col-1"></div>

                <div className="col-4">
                    <h1>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{ textDecoration: "none" }}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>

                <div className="col-2 text-center" style={{ fontSize: "0.75rem" }}>
                    <img src="media/images/pricing-eq.svg" alt="" />
                    <p>Free account opening</p>
                </div>

                <div className="col-2 text-center" style={{ fontSize: "0.75rem" }}>
                    <img src="media/images/pricing-eq.svg" alt="" />
                    <p>Free equity delivery and direct mutual funds</p>
                </div>

                <div className="col-2 text-center" style={{ fontSize: "0.75rem" }}>
                    <img src="media/images/other-trades.svg" alt="" />
                    <p>Intraday and F&O </p>
                </div>
            </div>
        </div>
    );
}

export default Pricing;