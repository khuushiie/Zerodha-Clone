import React from 'react';
import Hero from './Hero';

function SupportPage() {
    return ( 
        <div>
            <Hero/>
            <SupportPage/>
        </div>
     );
}

export default SupportPage;