import React from "react";
import { Col, Row } from "react-bootstrap";
import categoryImage from "../../assets/work/catefory.png";
import BazazaImage from "../../assets/work/bzaza.png";
import fnganImage from "../../assets/work/fngan.png";
import LambaImage from "../../assets/work/lamba.png";
import "./Work.scss";

const Work = () => {
    return (
        <div className="work-experience mt-5">
            <h2>Work Experience</h2>
            <div className="boxs mt-5">
                <Row>
                    <Col sm={12} md={6}>
                        <div className="box">
                            <img src={categoryImage} alt="image" />
                            <div className="details">
                                <h3>CIB on the Mobile </h3>
                                <p>
                                    Take your client onboard seamlessly by our
                                    amazing tool of digital onboard process.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="box">
                            <img src={LambaImage} alt="image" />
                            <div className="details">
                                <h3>CIB on the Mobile </h3>
                                <p>
                                    Take your client onboard seamlessly by our
                                    amazing tool of digital onboard process.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="box">
                            <img src={fnganImage} alt="image" />
                            <div className="details">
                                <h3>CIB on the Mobile </h3>
                                <p>
                                    Take your client onboard seamlessly by our
                                    amazing tool of digital onboard process.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="box">
                            <img src={BazazaImage} alt="image" />
                            <div className="details">
                                <h3>CIB on the Mobile </h3>
                                <p>
                                    Take your client onboard seamlessly by our
                                    amazing tool of digital onboard process.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Work;
