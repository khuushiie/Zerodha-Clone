import React from 'react';

function RightSection({ imageURL, productName, productDescription, learnMore }) {
    return ( 
        <div className='container' style={{marginBottom: "8rem"}}>
            <div className="row">
                <div className="col-1"></div>

                <div className="col-4" style={{ marginLeft: "5rem", marginTop: "12rem" }}>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div style={{marginTop: "2rem" }}>
                        <a href={learnMore} style={{ textDecoration: "none" }}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>

                <div className="col-1"></div>

                <div className="col-5 p-3">
                    <img src={imageURL} alt="" />
                </div>

                <div className="col-1"></div>

            </div>
        </div>
     );
}

export default RightSection;