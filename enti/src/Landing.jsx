import { Container, Row } from "react-bootstrap";
import "./Landing.css";
import { useInView } from "react-intersection-observer";

function Landing() {
    const { ref: landingRef, inView: landingVisible } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    return (
        <Container fluid className="landingParent">
            <Container fluid className="landing" id="landing" ref={landingRef}>
                <Row>
                    <div className={`${""} ${landingVisible ? "subTitle" : "17th Ave Recommendations by Group 7"}`}>
                        <p className="text-center mainText">
                            17th Ave Recommendations by Group 7
                        </p>
                        <a href="#main">
                            <div className="scrollAnim">
                                <div className="mouse">
                                    <div className="movingPiece"></div>
                                </div>
                            </div>
                        </a>
                    </div>
                </Row>
            </Container>
        </Container>
    );
}

export default Landing;