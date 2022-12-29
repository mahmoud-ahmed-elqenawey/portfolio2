import React from "react";
import fbIcon from "../../assets/fb.png";
import "./About.scss";

const About = () => {
    return (
        <div className="about mt-5">
            <h2>I'm a Software Engineer.| </h2>
            <span>
                Currently, I'm a Software Engineer at{" "}
                <img src={fbIcon} alt="koko" /> Facebook,
            </span>
            <p className="mt-5">
                A self-taught UI/UX designer, functioning in the industry for 3+
                years now. I make meaningful and delightful digital products
                that create an equilibrium between user needs and business
                goals.
            </p>
        </div>
    );
};

export default About;
