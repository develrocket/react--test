import React, {useEffect} from "react";
import HomeNavbar from "../components/Navbars/HomeNavbar";
import HomeHeader from "../components/Headers/HomeHeader";
import HomeContent from "./home-sctions/HomeContent";
import HomeReviews from "./home-sctions/HomeReviews";
import HomeFooter from "../components/Footer/HomeFooter";
import HomeCopyright from "../components/Footer/HomeCopyright";

function Home() {

    useEffect(() => {
        document.body.classList.add("index-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("index-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, [])

    return (
        <>
            <HomeNavbar />
            <div className="wrapper">
                <HomeHeader />
                <HomeContent />
                <HomeReviews />
                <HomeFooter />
                <HomeCopyright />
            </div>
        </>
    )
}

export default Home;
