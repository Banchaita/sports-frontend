import HeroSection from '@/components/HeroSection';
import React from 'react';


const ContactForm = () => {
    return (
        <div className="contact_us_6">
            <HeroSection/>
            <div className="container grid md:grid-cols-2 gap-4 mt-16 md:mt-36">
                <form className="form-box bg-white p-8 shadow-lg rounded-lg">
                    <div className="mob-text mb-4">
                        <p className="text-blk contactus-head text-3xl font-bold">
                            Get in Touch
                        </p>
                        <p className="text-blk contactus-subhead text-gray-600 hidden md:block">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis diam lectus sapien.
                        </p>
                    </div>
                    <div className="responsive-container-block" id="i2cbk">
                        <div className="responsive-cell-block" id="i10mt-3">
                            <p className="text-blk input-title text-left pb-1 text-sm font-medium text-gray-600">
                                FIRST NAME
                            </p>
                            <input className="input w-full h-12 px-4 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500" id="ijowk-3" name="FirstName" placeholder="Please enter first name..." />
                        </div>
                        {/* More input fields */}
                        {/* ... */}
                        <div className="responsive-cell-block" id="i634i-3">
                            <p className="text-blk input-title text-left pb-1 text-sm font-medium text-gray-600">
                                WHAT DO YOU HAVE IN MIND ?
                            </p>
                            <textarea className="textinput w-full min-h-32 px-4 py-3 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500" id="i5vyy-3" placeholder="Please enter query..."></textarea>
                        </div>
                    </div>
                    <button className="submit-btn w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded mt-4">
                        Submit
                    </button>
                </form>
                <div className="map-part p-4">
                    <p className="text-blk map-contactus-head text-2xl font-bold text-blue-500">
                        Reach us at
                    </p>
                    <p className="text-blk map-contactus-subhead text-gray-600 max-w-xs">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis diam lectus sapien.
                    </p>
                    <div className="social-media-links mob flex justify-start mt-0 mr-0 mb-4 ml-0">
                        <a className="social-icon-link mr-4" href="#" id="ix94i-2-2">
                            <img className="link-img image-block w-8 h-8" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png" />
                        </a>
                        {/* More social media links */}
                        {/* ... */}
                    </div>
                    <div className="map-box max-w-screen-md h-52 bg-cover bg-center" style={{ backgroundImage: "url('https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/sc23.png')" }}>
                        {/* Map content */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
