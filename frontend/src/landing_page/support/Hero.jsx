import React from 'react';

function Hero() {
    return (
        <div className="container-fluid support-hero">
            <div className="row supportWrapper ">
                <div className="d-flex justify-content-between mt-5">
                    <div className="fs-4">Support Portal</div>
                    <a href="" style={{ color: "white", fontSize:"1.15rem"}}>Track Tickets</a>
                </div>
            </div>

            <div className="row supportWrapper">
                <div className=" mt-5" style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className="col-7">
                        <p className='fs-4'>Search for an answer or browse help topics to create a ticket</p>
                        <input type="text" name="" id="input" placeholder='Eg: how do i activate F&O, whiy is my order getting rejected...' /> <br />
                        <a href="" className='links'>Track account opening</a> &nbsp;&nbsp;
                        <a href="" className='links'>Track segment activation</a>&nbsp;&nbsp;
                        <a href="" className='links'>Intraday margins</a>&nbsp;&nbsp;
                        <a href="" className='links'>Kite user manual</a>
                    </div>

                    <div className="col-1"></div>

                    <div className="col-4">
                        <p className='fs-4'>Featured</p>
                        
                        1. <a href="" className='links'>Quantity Freeze Limits for Indices from May 02, 2025</a> <br /> <br />
                        2. <a href="" className='links'>Latest Intraday leverages and Square-off timings</a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Hero;