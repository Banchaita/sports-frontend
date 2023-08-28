import React from 'react';

const HeroSection = () => {
    return (
        <div className="bg-cover bg-center h-52" style={{ backgroundImage: "url('google-map.png')",height:"40vh"}}>
            <div className="container mx-auto text-center">
                <h1 className="text-black text-4xl font-bold">Contact Us</h1>
                <p className="text-black text-lg mt-8 font-semibold">Get in touch with us for any inquiries</p>
            </div>
        </div>
        
    );
};

export default HeroSection;



