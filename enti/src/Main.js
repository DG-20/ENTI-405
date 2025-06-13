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
                            <p className="text-start"><b>Welcome from Group 7!</b></p>
                            <p className="text-start"><b>We are:<a href="https://www.linkedin.com/in/eshal-ahmed-75a7b8327/" rel="noreferrer" target="_blank">Eshal Ahmed</a>, <a href="https://divgoyal.netlify.app" rel="noreferrer" target="_blank">Divyansh Goyal</a>, <a href="https://www.linkedin.com/in/abia-jahangir-651bb9161/" rel="noreferrer" target="_blank">Abia Jahangir</a></b></p>
                            <p className="text-start">
                                This website presents six targeted, evidence-based recommendations for improving 17th Avenue in Calgary. Developed through extensive primary and secondary research, each recommendation is supported by key data, community insights, and practical analysis.
                                To explore our proposals, simply scroll down and click on any of the featured tiles to view a detailed breakdown, including benefits, supporting evidence, and implementation considerations.
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