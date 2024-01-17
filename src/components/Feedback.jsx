import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import manImage from '../assets/man.jpeg';
import whatsappImage from '../assets/WhatsApp Image.jpeg';
import whatsappImage2 from '../assets/WhatsApp Image 2023-12-27 at 3.24.50 PM.jpeg';
import heroImage from '../assets/hero.jpg';

function Feedback() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,  // Change this to 2 for mobile screens
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,  // Adjust the breakpoint based on your design
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (

        <div className=' py-5 bg-orange-200' >
            <div className="w-3/4 max-w-screen-xl mx-auto" data-aos="zoom-in">

                <div className="mt-20">

                    <h1 className='flex justify-center items-center text-4xl italic font-black font-family: Eurostile LT  text-black pb-10'>Review of Our Customers</h1>

                    <Slider {...settings}>

                        {data.map((d) => (

                            <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">

                                <div className="h-56 rounded-t-xl  bg-orange-400 flex justify-center items-center">
                                    <img src={d.img} alt='' className="h-20 w-30 rounded-full opacity-90" />
                                </div>


                                <div className="flex flex-col justify-center items-center gap-4 p-4">
                                    <p className=" text-xl font-semibold">{d.name}</p>
                                    <p>{d.review}</p>
                                    <button className='bg-orange-700 text-white text-lg px-6 py-1 rounded-xl'>Review</button>
                                </div>


                            </div>
                        ))}
                    </Slider>

                </div>

            </div>
        </div>
    );
};



const data = [

    {
        name: "Ayan Shaikh",
        img: manImage,
        review: "Great experience. Did a great job fixed my screen and charging port in about 20 minutes and gave me a free screen protector. 10/10 would recommend.",

    },


    {
        name: "Sufiyan Mansoor",
        img: whatsappImage,
        review: "Excellent customer service, phone was collected from my place, repaired and delivered within a span of 5 hours...Great experience. Good luck.. 10/10..",

    },


    {
        name: "Ahmed",
        img: whatsappImage2,
        review: "Great service, the guy comes at your doorstep to pick the item you need repaired, worked well with my busy schedule. Got my Apple Watch SE ..",

    },

    {
        name: "Ali Khan",
        img: heroImage,
        review: "Great service, the guy comes at your doorstep to pick the item you need repaired, worked well with my busy schedule. Got my Apple Watch SE..",

    }


]


export default Feedback;
