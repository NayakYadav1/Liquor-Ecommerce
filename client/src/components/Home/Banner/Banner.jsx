import "./Banner.scss";
import BannerImg from "../../../assets/Banner.webp";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                            <h2>LIQUOR</h2> <br /> <h4> IS THE ANSWER </h4>  <br /> ...what was the question??
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="" />
            </div>
        </div>
    )
};

export default Banner;
