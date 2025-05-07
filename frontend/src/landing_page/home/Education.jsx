import React from 'react';
function Education() {
    return (
        <div className='container mb-5' style={{ marginTop: "10rem" }}>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-5">
                    <img src="media/images/education.svg" alt="" />
                </div>

                <div className="col-5">
                    <h2>Free and open market education</h2>
                    <p className='mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" style={{ textDecoration: "none" }}>Varsity <i class="fa-solid fa-arrow-right"></i></a>

                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" style={{ textDecoration: "none" }}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>


                <div className="col-1"></div>
            </div>
        </div>
    );
}

export default Education;