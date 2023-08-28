// pages/about.js (or any other page)

import Head from 'next/head';
import Breadcrumb from '../components/Breadcrumb';
import HeroAboutBanner from '@/components/HeroAboutBanner';
import Wrapper from '@/components/Wrapper';
import { FaPlayCircle } from 'react-icons/fa';


const AboutPage = () => {
    return (
        <>
            {/* <Head>
        <title>About Us | My Next.js App</title>
      </Head> */}
            <main>
                <HeroAboutBanner />
                <Wrapper>
                    {/* heading and paragraph start */}
                    <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                        <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                            STUNNING COLLECTION
                        </div>
                        <div className="text-md md:text-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam officia, quas
                            architecto accusantium minima placeat eos iusto saepe, aliquid consequuntur.
                        </div>
                    </div>
                    {/* heading and paragraph end */}

                    <div className="colorlib-about">
                        <div className="container mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
                                <div className="mb-3">
                                    <div className="video colorlib-video relative" style={{ backgroundImage: "url('about.jpg')" }}>
                                        <a
                                            href="https://vimeo.com/channels/staffpicks/93951774"
                                            className="popup-vimeo absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                                            style={{
                                                width: "90px",
                                                height: "90px",
                                                backgroundColor: "#88c8bc",
                                                boxShadow: "0px 14px 30px -15px rgba(0, 0, 0, 0.75)",
                                                borderRadius: "50%",
                                            }}
                                        >
                                            <div className="text-6xl flex justify-center items-center mt-[1.5rem] text-white">
                                                <FaPlayCircle className="icon" style={{ fontSize: "40px" }} />
                                            </div>
                                        </a>
                                        <div className="overlay absolute inset-0"></div>
                                    </div>

                                </div>
                                <div className="about-wrap">
                                    <h2 className="text-2xl font-bold mb-3">Footwear the leading eCommerce Store around the Globe</h2>
                                    <p className="mb-3">The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </Wrapper>
            </main>
        </>
    );
};

export default AboutPage;
