import React from 'react';

function Universe() {
    return (
        <div className='container'>
            <div className="row text-center mb-5" >
                <p className='fs-5 mb-5 text-muted'>Want to know more about our technology stack? Check out the <a href="" style={{ textDecoration: "none" }}>Zerodha.tech</a> blog.</p>
                <h1 className=' mb-5 text-muted'>The Zerodha Universe</h1>
                <p className=' mb-5 text-muted'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>

            <div className="row">
                <div className="col-2"></div>

                <div className="col-2">
                    <div className="row">
                        <img src="media/images/zerodhaFundhouse.png" alt="" style={{ width: "90%" }} className='text-center' />
                        <p style={{ fontSize: "0.75rem", }} className='text-center mt-4 text-muted'>Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.
                        </p>
                    </div>

                    <div className="row mt-5">
                        <img src="media/images/streakLogo.png" alt="" style={{ width: "90%" }} className='text-center' />
                        <p style={{ fontSize: "0.75rem", }} className='text-center mt-4 text-muted'>Systematic trading platform
                            that allows you to create and backtest
                            strategies without coding.
                        </p>
                    </div>
                </div>

                <div className="col-1"></div>
                <div className="col-2">
                    <div className="row">
                        <img src="media/images/sensibullLogo.svg" alt="" style={{ width: "90%" }} className='text-center' />
                        <p style={{ fontSize: "0.75rem", }} className='text-center mt-4 text-muted'>Options trading platform that lets you
                            create strategies, analyze positions, and examine
                            data points like open interest, FII/DII, and more.

                        </p>
                    </div>

                    <div className="row mt-5">
                        <img src="media/images/smallcaseLogo.png" alt="" style={{ width: "90%" }} className='text-center' />
                        <p style={{ fontSize: "0.75rem", }} className='text-center mt-4 text-muted'>Thematic investing platform
                            that helps you invest in diversified
                            baskets of stocks on ETFs.
                        </p>
                    </div>
                </div>
                <div className="col-1"></div>

                <div className="col-2">
                    <div className="row">
                        <img src="media/images/goldenpiLogo.png" alt="" style={{ width: "90%" }} className='text-center' />
                        <p style={{ fontSize: "0.75rem", }} className='text-center mt-4 text-muted'>Investment research platform
                            that offers detailed insights on stocks,
                            sectors, supply chains, and more.

                        </p>
                    </div>

                    <div className="row mt-5">
                        <img src="media/images/dittoLogo.png" alt="" style={{ width: "90%" }} className='text-center' />
                        <p style={{ fontSize: "0.75rem", }} className='text-center mt-4 text-muted'>Personalized advice on life
                            and health insurance. No spam
                            and no mis-selling.
                        </p>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>

            <div className="row mt-5 mb-5">
            <button className='p-2 btn btn-primary fs-5 mb-5' style={{ width: "20%", margin: "0 auto" }}>Sign up for free</button>

            </div>
        </div>
    );
}

export default Universe;