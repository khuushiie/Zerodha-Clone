import React from 'react';

function CreateTicket() {
    return (
        <div className='container'>
            <div className="row mb-5 mt-5">
                <p className='text-muted, mb-5, fs-5' style={{ marginLeft: "6.8rem" }}>To create a ticket, select a relevant topic</p>
            </div>

            <div className="row mt-5">
                <div className="col-1"></div>

                <div className="col-3">
                    <h5><i class="fa-solid fa-plus"></i> Account Opening</h5>
                    <p className='ticket mt-4'>Resident individual</p>
                    <p className='ticket'>Minor</p>.
                    <p className='ticket'>Non Resident Indian (NRI)</p>
                    <p className='ticket'>Company, Partnership, HUF and LLP</p>
                    <p className='ticket'>Glossary</p>
                </div>
                <div className="col-1"></div>

                <div className="col-3">
                    <h5><i class="fa-regular fa-user"></i> Your Zerodha Account</h5>
                    <p className='ticket mt-4'>Your Profile</p>
                    <p className='ticket'>Account modification</p>
                    <p className='ticket'>Client Master Report (CMR) and Depository Participant (DP)</p>
                    <p className='ticket'>Nomination</p>
                    <p className='ticket'>Transfer and conversion of securities</p>
                </div>

                <div className="col-1"></div>

                <div className="col-3">
                    <h5><i class="fa-solid fa-chart-simple"></i> Kite</h5>
                    <p className='ticket mt-4'>IPO</p>
                    <p className='ticket'>Trading FAQs</p>
                    <p className='ticket'>Margin Trading Facility (MTF) and Margins</p>
                    <p className='ticket'>Charts and orders</p>
                    <p className='ticket'>Alerts and Nudges</p>
                    <p className='ticket'>General</p>
                </div>
            </div>

            <div className="row mt-5 mb-5">
                <div className="col-1"></div>

                <div className="col-3">
                    <h5><i class="fa-solid fa-wallet"></i> Funds</h5>
                    <p className='ticket mt-4'>Add money</p>
                    <p className='ticket'>Withdraw money</p>
                    <p className='ticket'>Add bank accounts</p>
                    <p className='ticket'>eMandates</p>
                </div>

                <div className="col-1"></div>

                <div className="col-3">
                    <h5><i class="fa-solid fa-terminal"></i> Console</h5>
                    <p className='ticket mt-4'>Portfolio</p>
                    <p className='ticket'>Corporate actions</p>
                    <p className='ticket'>Funds statement</p>
                    <p className='ticket'>Reports</p>
                    <p className='ticket'>Profile</p>
                    <p className='ticket'>Segments</p>
                </div>

                <div className="col-1"></div>

                <div className="col-3">
                    <h5><i class="fa-solid fa-coins"></i> Coin</h5>
                    <p className='ticket mt-4'>Understanding mutual funds and Coin</p>
                    <p className='ticket'>Coin app</p>
                    <p className='ticket'>Coin web</p>
                    <p className='ticket'>Transactions and reports</p>
                    <p className='ticket'>Alerts and Nudges</p>
                    <p className='ticket'>National Pension Scheme (NPS)</p>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;