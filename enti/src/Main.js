import "./Main.css";
import { Container, Row, Col } from "react-bootstrap/";
import { useInView } from "react-intersection-observer";

function Main() {
    const { ref: aboutRef, inView: aboutVisible } = useInView({
        threshold: 0.25,
        triggerOnce: true,
    });
    return (
        <div>
            <Container fluid className="mainContainer" id="main" ref={aboutRef}>
                <div>
                    <h1 className="mainTitle">About This Website</h1>
                    <hr className="titleHr" />
                    <br />
                    <Row>
                        <Col
                            xs={12}
                            sm={12}
                            md={12}
                            lg={6}
                            xl={6}
                            xxl={6}
                            className={`${"mainTextOrig"} ${aboutVisible ? "mainTextAnim" : "mainTextOrig"
                                }`}
                        >
                            <p className="text-start">We are Group 7</p>
                            <p className="text-start">
                                This website contains six of our key, focused recommendations for improvements to 17th Ave in Calgary.
                                After conducting a lot of primary and secondary research, we have backed up our recommendations with key
                                facts and figures. To view our recommendations, simply scroll down and click on each rectangle which will
                                open a more detailed view of each recommendation.
                            </p>
                        </Col>
                        <Col
                            xs={12}
                            sm={12}
                            md={12}
                            lg={6}
                            xl={6}
                            xxl={6}
                            style={{ zIndex: 100 }}
                            className={`${"d-flex align-items-center justify-content-center mainImgOrig"} ${aboutVisible ? "mainImgAnim" : "mainImgOrig"
                                }`}
                        >
                            <img className="profileImg" src={"https://smartcdn.gprod.postmedia.digital/calgaryherald/wp-content/uploads/2024/05/17thAveWalkway004-copy.jpg?quality=90&strip=all&w=1128&h=846&type=webp&sig=8uURRvYFREJSaIJdskog6g"} alt="17th Ave" />
                        </Col>
                    </Row>
                    <br />
                    <br />
                </div>
            </Container>
        </div>
    );
}

export default Main;