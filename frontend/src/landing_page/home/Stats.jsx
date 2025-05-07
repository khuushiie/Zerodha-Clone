import React from 'react';
function Stats() {
    return (
        <div className='container mt-5 mb-5'>
            <div className="row">
                <div className="col-1"></div>

                <div className="col-5 p-5">
                    <h1 className='mb-5'>Trust with confidence</h1>

                    <h4>Customer-first always</h4>
                    <p className='fs-6 text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    <h4>No spam or gimmicks</h4>
                    <p className='fs-6 text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href='#' style={{ textDecoration: "none" }}>Our philosophies.</a></p>

                    <h4>The Zerodha universe</h4>
                    <p className='fs-6 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h4>Do better with money</h4>
                    <p className='fs-6 text-muted'>With initiatives like <a href='#' style={{ textDecoration: "none" }}>Nudge</a> and <a href='#' style={{ textDecoration: "none" }}>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>

                <div className="col-5 p-5">
                    <img src="media/images/ecosystem.png" alt="" className='img-fluid' />
                    <div className="row mt-5">
                        <a className="col text-center" style={{ textDecoration: "none" }}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                        <a className="col" style={{ textDecoration: "none" }}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>

                </div>

                <div className="col-1"></div>
            </div>

            <div className="row d-flex justify-content-center align-items-center">
                <img src="media/images/pressLogos.png" alt="" style={{ width: "55%" }} />
            </div>
        </div>
    );
}

export default Stats;