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
import recc2_1 from "./images/Recc2_1.png"

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
                                <Modal.Title as={"h2"}><b>Parking Validation Program</b></Modal.Title>
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
                                        To reduce a key barrier to visiting 17th Avenue, we recommend implementing a parking validation program that offers customers free or discounted parking when they make purchases at participating businesses on the street. This would likely be managed through digital codes or a mobile application and could be paired with long-term plans for improved parking infrastructure, such as an underground parkade.
                                        This initiative not only reduces visitor cost but encourages longer, more frequent visits while boosting collaboration between local shops. This benefits both business and consumers alike. By reducing a barrier to entry, businesses will likely see a higher number of customer vists on average. In addition, by offering parking discount or free parking, consumers will have a better experience when visiting 17th Ave - a key issue currently faced by many visitors as described below.
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
                                    </p>
                                    <h4 className="text-lg font-semibold mb-2 text-gray-800">Qualitative Data</h4>
                                    <p className="text-gray-700">
                                        Observation supporting the reccomendation:
                                        <ul className="list-disc pl-6 mt-2">
                                            <li>When we visited 17th Avenue, we noticed that there was little to no street parking available,
                                                and a lot of cars were lined up at lights and stop signs.</li>
                                        </ul>
                                    </p>
                                    <hr />
                                    <h4 className="text-lg font-semibold mb-2 text-gray-800">Analysis</h4>
                                    These statistics reveal a clear pain point for visitors: nearly <strong>50%</strong> of people arrive
                                    on 17th Avenue by car, and yet over <strong>57%</strong> rated the current parking situation as weak or poor.
                                    At the same time, close to <strong>70%</strong> of respondents indicated that parking was moderately to extremely
                                    important to their visit experience. With fewer than <strong>16%</strong> feeling that parking is currently
                                    very good or excellent, it's evident that parking is both a high-priority concern and an underperforming feature of the street.
                                    This is reinforced by our qualitative observations during field visits, where we saw little to no street parking available
                                    and cars frequently backed up at lights and stop signs — highlighting real-time congestion and demand.
                                    As such, implementing a parking validation program along with a longer-term plan for increasing the number of parking available directly
                                    addresses these issues by reducing cost-related friction and improving accessibility for a significant portion of visitors.
                                    By removing one of the main barriers to access, this recommendation will benefit both business and consumers alike. Businesses will
                                    see more customer visits due to an improved parking infrastructure, and consumers will have a much better parking experience.
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
                        <Modal show={recc2} onHide={() => setRecc2(false)} size="lg" centered>
                            <Modal.Header closeButton>
                                <Modal.Title as={"h2"}><b>17th Avenue Cultural Pass</b></Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <img
                                    src="https://retailnext.net/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fuskqevaodrls%2F1vbAkEoGpWRjxk9T1EwzCK%2F109c0ba382ebf6c3d5f6f0b1789df118%2Fcover-mobile-app-features-that.png&w=3840&q=75"
                                    alt="Cultural Pass Promotion"
                                    className="img-fluid text-center rounded mb-4"
                                    style={{ margin: "auto" }}
                                />

                                <section className="mb-4">
                                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Description and Benefits</h3>
                                    <p>
                                        The 17th Avenue Cultural Pass is a digital pass that offers discounts and perks at local restaurants, cafés, boutiques, and more. Its purpose is to increase visits and help create a more vibrant, connected atmosphere along 17th Avenue.
                                        This pass will be valid during off-peak hours - such as between 3 PM and 6 PM on weekdays (happy hour already offered by many businesses) or on select holidays (17th Avenue Retail & Entertainment District, n.d.).
                                        By rewarding repeat visits with exclusive benefits, the Cultural Pass is designed to make 17th Avenue a more dynamic and regularly visited destination for locals and tourists alike.
                                    </p>
                                </section>
                                <hr />
                                <section>
                                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Evidence</h3>
                                    <h4 className="text-lg font-semibold mb-2 text-gray-800">Quantitative Data</h4>
                                    <div className="mt-4">
                                        <img
                                            src={recc2_1}
                                            alt="Visit Frequency Chart"
                                            width={"100%"}
                                        />
                                        <p className="text-sm text-gray-500 mt-2 text-center">Fig. 1: Frequency of Visits to 17th Avenue in the last month</p>
                                    </div>
                                    <p className="text-gray-700 mt-3">
                                        Survey responses highlight the need for this program:
                                        <ul className="list-disc pl-6 mt-2">
                                            <li>📉 <strong>35.7%</strong> of respondents said they visited 17th Avenue only once or twice in the past month (fig. 1).</li>
                                            <li>📈 <strong>23.5%</strong> of respondents have actually visited more than 10 times in the past month (fig. 2).</li>
                                        </ul>
                                    </p>

                                    <h4 className="text-lg font-semibold mb-2 text-gray-800">Qualitative Insight</h4>
                                    <p className="text-gray-700">
                                        Within our interview with Judy House, owner of Pimlico Bar, she mentioned something that really stood out to us. When asking about
                                        the personality of the street, she said "when it's busy, the atmosphere is electric, but when it's quiet, it's very sad".
                                    </p>

                                    <hr />
                                    <h4 className="text-lg font-semibold mb-2 text-gray-800">Analysis</h4>
                                    <p>
                                        The Cultural Pass directly addresses a key engagement issue on 17th Avenue, which is infrequent visits.
                                        With more than a third of respondents visiting only once or twice a month, there's significant room to grow
                                        repeat traffic. The Culture Pass we are suggesting provides a low-risk, high-reward strategy to
                                        capitalize on this opportunity by incentivizing visits during typically slower periods. The benefit to businesses
                                        is clear, they get access to increased foot traffic as well as another platform to advertise and offer promotions.
                                        As Judy described, this Culture Pass aims to reduce the amount of "quiet" times. Another benefit of this program
                                        is for the 23.5% of the customers who mentioned they visited the street more than 10 times in the past month.
                                        This program will reward their loyalty and repeat business.
                                    </p>
                                    <p>
                                        By increasing mid-week and off-peak activity, the Culture Pass can help prevent overcrowding during peak hours and a
                                        consistent boost of revenue to businesses.
                                        Furthermore, the use of a shared pass will build a more collaborative ecosystem, helping the 17th Avenue BIA.
                                    </p>
                                </section>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setRecc2(false)}>
                                    Close
                                </Button>
                            </Modal.Footer>
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