import { useState } from "react";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";

export default function Home({ products }) {
    const [displayCount, setDisplayCount] = useState(6); // Display 6 products initially

    const handleSeeMore = () => {
        setDisplayCount(prevCount => prevCount + 3); // Show 3 more products on each "See More" click
    };

    const handleSeeLess = () => {
        setDisplayCount(prevCount => Math.max(prevCount - 3, 6)); // Show minimum of 6 products on "See Less" click
    };
    return (
        <main>
            <HeroBanner />
            <Wrapper>
                {/* heading and paragraph start */}
                
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Cushioning for Your Miles
                    </div>
                    <div className="text-md md:text-xl">
                        A lightweight Nivia ZoomX midsole is combined with
                        increased stack heights to help provide cushioning
                        during extended stretches of running.
                    </div>
                </div>
                {/* heading and paragraph end */}

                {/* products grid start */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    {products?.data?.slice(0, displayCount).map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}
                </div>
                {/* products grid end */}
                
                {/* "See More" and "See Less" buttons */}
                <div className="flex justify-center my-5">
                    {displayCount === 6 ? (
                        <button
                            onClick={handleSeeMore}
                            className="border border-gray-400 px-6 py-2 rounded-md text-gray-600 hover:text-gray-800"
                        >
                            See More
                        </button>
                    ) : (
                        <button
                            onClick={handleSeeLess}
                            className="border border-gray-400 px-6 py-2 rounded-md text-gray-600 hover:text-gray-800"
                        >
                            See Less
                        </button>
                    )}
                </div>
            </Wrapper>
        </main>
    );
}

export async function getStaticProps() {
    const products = await fetchDataFromApi("/api/products?populate=*");

    return {
        props: { products },
    };
}
