import React from 'react';
function Hero() {
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center mb-5">

                <h1 className='mt-5 text-muted'>Charges</h1>
                <p className='fs-5 text-muted mt-3'>List of all charges and taxes</p>
            </div>
            <div className="row">
                <div className="col-3 text-center">
                    <img src="media/images/pricing0.svg" alt="" style={{ width: "90%" }} className='text-center' />
                    <h2>Free equity delivery</h2>
                    <p className='text-center mt-4 text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>

                <div className="col-1"></div>

                <div className="col-3 text-center">
                    <img src="media/images/other-trades.svg" alt="" style={{ width: "90%" }} className='text-center' />
                    <h2>Intraday and F&O trades</h2>
                    <p className='text-center mt-4 text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>

                <div className="col-1"></div>

                <div className="col-3 text-center">
                    <img src="media/images/pricing0.svg" alt="" style={{ width: "90%" }} className='text-center' />
                    <h2>Free direct MF</h2>
                    <p className='text-center mt-4 text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>

            </div>
        </div>
    );
}

export default Hero;