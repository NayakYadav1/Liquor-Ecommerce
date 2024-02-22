import React from "react";

import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa"
import Payment from "../../assets/payments.png"
const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        SRY store is one of the best shop where you can find the original liquor at the the best price than the market. It is located at Handigaun-5, Kathmandu. Please vist once for more details.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Handigaun-5, Kathmandu, Nepal, 666400
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: +977 9841774148</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: sry@store.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <div className="text">Beer</div>
                    <div className="text">Vodka</div>
                    <div className="text">Rum</div>
                    <div className="text">Wine</div>
                    <div className="text">Whiskey</div>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <div className="text">Homes</div>
                    <div className="text">About</div>
                    <div className="text">Privacy Policy</div>
                    <div className="text">Terms & Condition</div>
                    <div className="text">Contect Us</div>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">SRYSTORE 2024 BY SRY.</div>
                    <img src={Payment} alt="Payment mode loading" />
                </div>
            </div>
        </div>
    )
};

export default Footer;
