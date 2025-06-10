import React from "react";
import { Container, Row, Col } from "react-bootstrap/";
import { useState } from "react";
import "./Reccs.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useInView } from "react-intersection-observer";
import recc1_1 from "./images/Recc1_1.png"
import recc1_2 from "./images/Recc1_2.png"
import recc1_3 from "./images/Recc1_3.png"

function Reccs() {
    const [recc1, setRecc1] = useState(false);
    const [recc2, setRecc2] = useState(false);
    const [recc3, setRecc3] = useState(false);
    const [recc4, setRecc4] = useState(false);
    const [recc5, setRecc5] = useState(false);
    const [recc6, setRecc6] = useState(false);

    const { ref: reccRef, inView: reccVisible } = useInView({
        threshold: 0.25,
        triggerOnce: true,
    });

    return (
        <Container
            fluid
            className="reccContainer"
            id="recc"
            ref={reccRef}
        >
            <div
                className={`${"reccOrig"} ${reccVisible ? "reccAnim" : "reccOrig"
                    }`}
            >
                <h1 className="reccTitle">Reccomendations</h1>
                <hr className="titleHr" />
                <br />

                <div
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    xxl={12}
                    className="align-items-center text-center buttons"
                >
                    <Row>
                        <Button onClick={() => setRecc1(true)}>Reccomendation 1: Parking</Button>
                        <Modal show={recc1} onHide={() => setRecc1(false)} size="lg" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Parking Validation Program</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <img
                                    src="https://smartcdn.gprod.postmedia.digital/calgaryherald/wp-content/uploads/2023/02/ParkingFees314-copy.jpg?quality=90&strip=all&w=1128&h=846&type=webp&sig=rHXFFjTdvUDXch5NkFwi8A"
                                    alt="Parking Validation Program"
                                    className="img-fluid rounded mb-4"
                                />

                                {/* Overview Section */}
                                <section className="mb-4">
                                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Description and Benefits</h3>
                                    <p>
                                        To reduce a key barrier to visiting 17th Avenue, we recommend implementing a parking validation program that offers customers free or discounted parking when they make purchases at participating businesses on the street. This could be managed through physical tickets or digital codes and could be paired with long-term plans for improved parking infrastructure, such as an underground parkade.
                                        This initiative not only reduces visitor cost but encourages longer, more frequent visits while boosting collaboration between local shops. This benefits both business and consumers alike. By Reducing a barrier to entry, businesses will likely see a higher number of customer vists on average. In addition, by offering parking discount or free parking, consumers will have a better experience when visiting 17th Ave - a key issue currently faced by many visitors as described below.
                                    </p>
                                </section>
                                <hr />

                                {/* Evidence Section */}
                                <section>
                                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Evidence</h3>
                                    <h4 className="text-lg font-semibold mb-2 text-gray-800">Quantitative Data</h4>
                                    <div className="mt-4">
                                        <img
                                            src={recc1_3}
                                            alt="Ways to get there"
                                            width={"100%"}
                                        />
                                        <p className="text-sm text-gray-500 mt-2 text-center">Fig. 1: How Individuals Travelled to 17th Avenue</p>
                                    </div>
                                    <div className="mt-4">
                                        <img
                                            src={recc1_1}
                                            alt="Parking importance"
                                            width={"100%"}
                                        />
                                        <p className="text-sm text-gray-500 mt-2 text-center">Fig. 2: Feature Importance of 17th Avenue</p>
                                    </div>
                                    <div className="mt-4">
                                        <img
                                            src={recc1_2}
                                            alt="Parking rating"
                                            width={"100%"}
                                        />
                                        <p className="text-sm text-gray-500 mt-2 text-center">Fig. 3: Current Feature Rating on 17th Avenue</p>
                                    </div>
                                    <p className="text-gray-700">
                                        Survey data strongly supports this need:
                                        <ul className="list-disc pl-6 mt-2">
                                            <li>📊 <strong>Almost 50%</strong> of respondents travel to 17th Ave by car (fig. 1).</li>
                                            <li>📉 <strong>Almost 70%</strong> rated parking as Moderately to Extremely Important (fig. 2).</li>
                                            <li>🚫 <strong>84%</strong> rated current parking as Moderate or worse (fig. 3).</li>
                                            <li>✅ <strong>Only 16%</strong> rated it Very Good or Excellent (fig. 3).</li>
                                        </ul>
                                        These stats confirm that parking is not just a nuisance — it's a major friction point affecting foot traffic and business success.
                                    </p>
                                </section>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setRecc1(false)}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Row>
                    <br />

                    <Row>
                        <Button onClick={() => setRecc2(true)}>Reccomendation 2: Culture Pass</Button>
                        <Modal size="lg" show={recc2} onHide={() => setRecc2(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    17th Ave Culture Pass
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <img
                                    src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
                                    alt="17th Ave"
                                    className="img-fluid mb-3 rounded"
                                />
                                <p>
                                    The 17th Ave Cultural Pass is a digital pass that offers discounts and perks at local restaurants, cafés, boutiques, and more. Its purpose is to increase visits and help create a more vibrant, connected atmosphere along 17th Avenue. The pass would be valid during off-peak hours - such as between 3 PM and 6 PM on weekdays, or on select holidays - encouraging both spontaneous and planned visits. This initiative directly addresses survey data, with the majority of the respondents saying that 35.7% of visitors only came to 17th Avenue once or twice in the past month. By rewarding repeat visits, the Culture Pass aims to shift that pattern and drive more consistent engagement. This will be a good opportunity to increase visits to the iconic street. The program benefits existing business owners through increased foot traffic and coordinated marketing. At the same time, it offers consumers added value through exclusive discounts and experiences - giving them more reasons to explore and return to 17th Avenue.
                                </p>
                            </Modal.Body>
                        </Modal>
                    </Row>
                    <br />

                    <Row>
                        <Button onClick={() => setRecc3(true)}>Reccomendation 3: Night Market</Button>
                        <Modal
                            size="lg"
                            show={recc3}
                            onHide={() => setRecc3(false)}
                            aria-labelledby="example-modal-sizes-title-lg"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    Large Modal
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>...</Modal.Body>
                        </Modal>
                    </Row>
                    <br />

                    <Row>
                        <Button onClick={() => setRecc4(true)}>Reccomendation 4: Pop-Up Test Locations</Button>
                        <Modal
                            size="lg"
                            show={recc4}
                            onHide={() => setRecc4(false)}
                            aria-labelledby="example-modal-sizes-title-lg"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    Large Modal
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>...</Modal.Body>
                        </Modal>
                    </Row>
                    <br />

                    <Row>
                        <Button onClick={() => setRecc5(true)}>Reccomendation 5: Book Store</Button>
                        <Modal
                            size="lg"
                            show={recc5}
                            onHide={() => setRecc5(false)}
                            aria-labelledby="example-modal-sizes-title-lg"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    Large Modal
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>...</Modal.Body>
                        </Modal>
                    </Row>
                    <br />

                    <Row>
                        <Button onClick={() => setRecc6(true)}>Reccomendation 6: Shade & Seating</Button>
                        <Modal
                            size="lg"
                            show={recc6}
                            onHide={() => setRecc6(false)}
                            aria-labelledby="example-modal-sizes-title-lg"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    Large Modal
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>...</Modal.Body>
                        </Modal>
                    </Row>

                </div>
            </div>
            <br />
            <br />
        </Container >
    );
}

export default Reccs;