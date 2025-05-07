import React from 'react';

function Hero() {
    return (
        <div className="container">
            <div className="row text-center mt-5 mb-5" style={{ borderBottom: "1px solid #eaeaea", paddingBottom: "8rem" }}>
                <h1 className='mt-5 text-muted'>Zerodha Products</h1>
                <p className='fs-5'>Sleek, modern, and intuitive trading platforms</p>
                <p>Check out our <a href='' style={{ textDecoration: "none" }}>investment offerings <i class="fa-solid fa-arrow-right"></i></a></p>
            </div>
        </div>
    );
}

export default Hero;