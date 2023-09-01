import Head from "next/head";
import Carousal from "../components/home/Carousal";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Testimonials from "../components/home/Testimonials";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import CoreTeam from "../components/home/CoreTeam";
import Donate from "../components/home/Donate";
import About from "../components/home/About";
import MarketingBanner from "../components/common/MarketingBanner";
import Event from "../components/common/Event";
import HeroV2 from "../components/home/HeroV2";
// import Header from "../components/common/Header";
import VideoSection from "../components/common/videoSection";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Head>
                <title>Ngo In India | Education For Poor Children | Donate Online For Underprivileged Children – Smyle
                    Pariwar Foundation</title>
                <link rel="icon" href="/logo.png"/>
                {/* Meta Tags Dynamically generated by metaseo.itsvg.in */}
                <meta name="title" content="Smyle Pariwar Foundation"/>
                <meta name="description"
                      content="Smyle Pariwar Foundation is an NGO in India. Our main aim is to provide education for underprivileged children, girl child, and give support for poor children's health. Donate for education to support poor children."/>
                <meta name="keywords"
                      content="NGO, NGO in India, Poor children, Donate for education, sponsor a child, education for underprivileged children, education, Smyle Pariwar Foundation"/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="smylepariwarfoundation.org"/>
                <meta property="og:title" content="Smyle Pariwar Foundation"/>
                <meta
                    property="og:description"
                    content="Smyle Pariwar Foundation is an NGO in India. Our main aim is to provide education for underprivileged children, girl child, and give support for poor children's health. Donate for education to support poor children."
                />
                <meta property="og:image" content="https://www.smylepariwarfoundation.org/img.png"/>
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="teamhnm.org"/>
                <meta property="twitter:title" content="Smyle Pariwar Foundation"/>
                <meta
                    property="twitter:description"
                    content="Smyle Pariwar Foundation is an NGO in India. Our main aim is to provide education for underprivileged children, girl child, and give support for poor children's health. Donate for education to support poor children."
                />
                <meta property="twitter:image" content="https://www.smylepariwarfoundation.org/img.png"/>
            </Head>

            <main>
                <Navbar/>
                <HeroV2/>
                {/*<MarketingBanner />*/}

                <Hero/>
                <VideoSection/>
                <Event/>
                {/*<Stats />*/}
                <Donate/>
                {/*<Carousal />*/}
                {/*<Testimonials />*/}
                <CoreTeam/>
                {/*<About />*/}
            </main>
            <Footer/>
            <MarketingBanner/>

            <a
                href="https://www.payumoney.com/paybypayumoney/#/DB085F74BD77B86D098E0C30FEC5AF6F"
                aria-label="Donate Now"
                title="Donate"
                className="fixed z-90 bottom-10 right-8 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:drop-shadow-2xl hover:animate-bounce duration-300">
                <Image
                    src={'/donate_now.png'}
                    width={100}
                    height={100}
                    alt="Donate Now"
                    title="Donate"
                    className="rounded-full">
                </Image>
            </a>

        </>
    );
}
