import React from 'react';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className='container ' style={{marginBottom: "8rem"}}>
            <div className="row">
                <div className="col-1"></div>

                <div className="col-5 p-3">
                    <img src={imageURL} alt="" />
                </div>

                <div className="col-1"></div>

                <div className="col-4" style={{ marginLeft: "5rem", marginTop: "6rem" }}>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "65%", marginTop: "2rem" }}>
                        <a href={tryDemo} style={{ textDecoration: "none" }}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} style={{ textDecoration: "none" }}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", width:"70%",  marginTop: "2rem" }}>
                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg' /></a>
                        <a href={appStore}><img src="media/images/appstoreBadge.svg" alt="" /></a>
                    </div>

                </div>

                <div className="col-1"></div>

            </div>
        </div>
    );
}

export default LeftSection;
