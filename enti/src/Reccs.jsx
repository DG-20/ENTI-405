import React from "react";
import { Container, Row } from "react-bootstrap/";
import { useState } from "react";
import "./Reccs.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useInView } from "react-intersection-observer";
import recc1_1 from "./images/Recc1_1.png"
import recc1_2 from "./images/Recc1_2.png"
import recc1_3 from "./images/Recc1_3.png"
import recc2_1 from "./images/Recc2_1.png"
import recc6_1 from "./images/Recc6_1.png"
import recc6_2 from "./images/Recc6_2.png"

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
                        <Button id="button-30" onClick={() => setRecc1(true)}>Reccomendation 1: Parking</Button>
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

                                <section className="mb-4">
                                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Description and Benefits</h3>
                                    <p>
                                        To reduce a key barrier to visiting 17th Avenue, we recommend implementing a parking validation program that offers customers free or discounted parking when they make purchases at participating businesses on the street. This would likely be managed through digital codes or a mobile application and could be paired with long-term plans for improved parking infrastructure, such as an underground parkade.
                                        This initiative not only reduces visitor cost but encourages longer, more frequent visits while boosting collaboration between local shops. This benefits both business and consumers alike. By reducing a barrier to entry, businesses will likely see a higher number of customer vists on average. In addition, by offering parking discount or free parking, consumers will have a better experience when visiting 17th Ave - a key issue currently faced by many visitors as described below.
                                    </p>
                                </section>
                                <hr />

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
                                        <p className="text-sm text-gray-500 mt-2 text-center">Fig. 3: Current Feature Rating of 17th Avenue</p>
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
                        <Button id="button-30" onClick={() => setRecc2(true)}>Reccomendation 2: Culture Pass</Button>
                        <Modal show={recc2} onHide={() => setRecc2(false)} size="lg" centered>
                            <Modal.Header closeButton>
                                <Modal.Title as={"h2"}><b>17th Avenue Culture Pass</b></Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <img
                                    src="https://retailnext.net/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fuskqevaodrls%2F1vbAkEoGpWRjxk9T1EwzCK%2F109c0ba382ebf6c3d5f6f0b1789df118%2Fcover-mobile-app-features-that.png&w=3840&q=75"
                                    alt="Culture Pass Promotion"
                                    className="img-fluid text-center rounded mb-4"
                                    style={{ margin: "auto" }}
                                />

                                <section className="mb-4">
                                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Description and Benefits</h3>
                                    <p>
                                        The 17th Avenue Culture Pass is a digital pass that offers discounts and perks at local restaurants, cafés, boutiques, and more. Its purpose is to increase visits and help create a more vibrant, connected atmosphere along 17th Avenue.
                                        This pass will be valid during off-peak hours - such as between 3 PM and 6 PM on weekdays (happy hour already offered by many businesses) or on select holidays (17th Avenue Retail & Entertainment District, n.d.).
                                        By rewarding repeat visits with exclusive benefits, the Culture Pass is designed to make 17th Avenue a more dynamic and regularly visited destination for locals and tourists alike.
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
                                        the personality of the street, she said <em>"when it's busy, the atmosphere is electric, but when it's quiet, it's very sad".</em>
                                    </p>

                                    <hr />
                                    <h4 className="text-lg font-semibold mb-2 text-gray-800">Analysis</h4>
                                    <p>
                                        The Culture Pass directly addresses a key engagement issue on 17th Avenue, which is infrequent visits.
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
                        <Button id="button-30" onClick={() => setRecc3(true)}>Reccomendation 3: Night Market</Button>
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
                        <Button id="button-30" onClick={() => setRecc4(true)}>Reccomendation 4: Pop-Up Test Locations</Button>
                        <Modal show={recc4} onHide={() => setRecc4(false)} size="lg" centered>
                            <Modal.Header closeButton>
                                <Modal.Title as={"h2"}><b>Pop-Up Test Locations</b></Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <img
                                    src="https://retailnext.net/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fuskqevaodrls%2F1vbAkEoGpWRjxk9T1EwzCK%2F109c0ba382ebf6c3d5f6f0b1789df118%2Fcover-mobile-app-features-that.png&w=3840&q=75"
                                    alt="Culture Pass Promotion"
                                    className="img-fluid text-center rounded mb-4"
                                    style={{ margin: "auto" }}
                                />

                                <section className="mb-4">
                                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Description and Benefits</h3>
                                    <p>
                                        One of the biggest challenges facing 17th Avenue is the constant turnover of small businesses.
                                        Many shops close before they've had a real chance to get off the ground, leaving behind empty storefronts and a sense of
                                        uncertainty for residents. To address this, we recommend introducing a rotating pop-up program -
                                        a flexible space where entrepreneurs can test their business ideas without the pressure of a long-term lease.
                                        <br />
                                        These pop-up spots would give new businesses a low-risk, high-reward opportunity to build a customer base,
                                        gather feedback, and fine-tune their offerings. For shoppers and residents, it means more variety and fresh
                                        experiences on the street - from handmade goods to unique cafés - all without the disruption of constant
                                        closures. By encouraging experimentation and reducing barriers to entry, the program would strengthen the
                                        local business ecosystem and bring more life to 17th Avenue.
                                    </p>
                                </section>
                                <hr />
                                <section>
                                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Evidence</h3>
                                    <h4 className="text-lg font-semibold mb-2 text-gray-800">Quantitative Data</h4>
                                    <p className="text-gray-700 mt-3">
                                        Secondary data clearly indicates how successful this could be:
                                        <ul className="list-disc pl-6 mt-2">
                                            <li>📈 <strong>80%</strong> of Canadian retailers who launched a pop-up reported it was a success (Cryderman, 2019).</li>
                                            <li>💵 Globally, the pop-up market is projected to hit <strong>$80-95 billion</strong> by the mid-2020s (Popup Together, n.d.).</li>
                                        </ul>
                                    </p>

                                    <h4 className="text-lg font-semibold mb-2 text-gray-800">Qualitative Insight</h4>
                                    <p className="text-gray-700">
                                        In our street interviews, one long-time resident shared: <em>“I don't like how fast businesses shut down.
                                            I used to go to the market but it had to close. My favourite coffee store did as well”</em>.
                                    </p>

                                    <hr />
                                    <h4 className="text-lg font-semibold mb-2 text-gray-800">Analysis</h4>
                                    <p>
                                        This feedback speaks to something many people feel: when local businesses disappear, the street loses some of its character.
                                        With many stores closing too soon, there's a need for a more supportive way to help entrepreneurs succeed.
                                        That's where the rotating pop-up program comes in.
                                    </p>
                                    <p>
                                        By offering short-term, affordable spacec, it lowers the barrier for new businesses and gives them a chance to grow
                                        without taking huge risks. For the community, it means more activity during the week, fewer empty storefronts, and a
                                        better mix of shops and services. Partnering with the City of Calgary and property owners to activate underused spaces
                                        could unlock big potential. With regular vendor rotations and simple feedback tools, the program would help identify
                                        which businesses have staying power - all while making 17th Avenue a more vibrant and resilient place to shop and visit.
                                    </p>
                                </section>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setRecc4(false)}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Row>
                    <br />

                    <Row>
                        <Button id="button-30" onClick={() => setRecc5(true)}>Reccomendation 5: Book Store</Button>
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
                        <Button id="button-30" onClick={() => setRecc6(true)}>Reccomendation 6: Shade & Seating</Button>
                        <Modal show={recc6} onHide={() => setRecc6(false)} size="lg" centered>
                            <Modal.Header closeButton>
                                <Modal.Title as={"h2"}><b>Shade & Seating</b></Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <img
                                    src="https://retailnext.net/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fuskqevaodrls%2F1vbAkEoGpWRjxk9T1EwzCK%2F109c0ba382ebf6c3d5f6f0b1789df118%2Fcover-mobile-app-features-that.png&w=3840&q=75"
                                    alt="Culture Pass Promotion"
                                    className="img-fluid text-center rounded mb-4"
                                    style={{ margin: "auto" }}
                                />

                                <section className="mb-4">
                                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Description and Benefits</h3>
                                    <p>
                                        Walkability is one of the key factors that shapes a positive street experience. On 17th Avenue, the availability of
                                        comfortable public seating and shaded rest areas can make a real difference - especially for seniors, families, and
                                        pedestrians who want to take their time enjoying the street. Upgrades such as benches under trees, small green spaces,
                                        and expanded public patios can help create a more inclusive and welcoming atmosphere.
                                        <br />
                                        This initiative not only makes the avenue more visually appealing but also encourages people to stay longer,
                                        explore more businesses, and feel more connected to the area. These types of improvements help make 17th Avenue a
                                        destination that people want to return to - not just for shopping, but for the experience itself.
                                    </p>
                                </section>
                                <hr />
                                <section>
                                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Evidence</h3>
                                    <h4 className="text-lg font-semibold mb-2 text-gray-800">Quantitative Data</h4>
                                    <div className="mt-4">
                                        <img
                                            src={recc6_1}
                                            alt="Feature Current Ratings"
                                            width={"100%"}
                                        />
                                        <p className="text-sm text-gray-500 mt-2 text-center">Fig. 1: Feature Importance of 17th Avenue</p>
                                    </div>
                                    <div className="mt-4">
                                        <img
                                            src={recc6_2}
                                            alt="Feature Important Ratings"
                                            width={"100%"}
                                        />
                                        <p className="text-sm text-gray-500 mt-2 text-center">Fig. 2: Current Feature Rating of 17th Avenue</p>
                                    </div>
                                    <p className="text-gray-700 mt-3">
                                        Survey data results indicate:
                                        <ul className="list-disc pl-6 mt-2">
                                            <li>‼ About <strong>87%</strong> of respondents said walkability was moderately to extremely important (fig. 1).</li>
                                            <li>🙁 More than <strong>41%</strong> rated current walkability as moderate or worse. (fig. 2).</li>
                                        </ul>
                                        Secondary data indicates:
                                        <ul className="list-disc pl-6 mt-2">
                                            <li>📈 Research shows that providing street improvements for pedestrians and cyclists may increase nearby retail
                                                sales by up to 30% (University of Wisconsin-Madison Extension, 2022).</li>
                                        </ul>
                                    </p>

                                    <hr />
                                    <h4 className="text-lg font-semibold mb-2 text-gray-800">Analysis</h4>
                                    <p>
                                        This recommendation targets a common issue for 17th Avenue: while people value walkability,
                                        the street doesn't always feel inviting or accessible. Adding shaded areas, small parks, and
                                        expanded patios would help transform 17th Avenue into a place where people feel encouraged to stay longer.
                                        These additions are especially valuable for seniors, families with young children,
                                        and anyone needing a break while exploring the area.
                                    </p>
                                    <p>
                                        Beyond improving comfort and accessibility, this initiative also supports local businesses.
                                        When people spend more time on the street, they're more likely to visit multiple shops,
                                        make impulse purchases, and come back again. In fact, pedestrian-friendly upgrades like these
                                        have been shown to increase retail sales by up to 30% (University of Wisconsin-Madison Extension, 2022).
                                        By partnering with the City of Calgary, the 17th Avenue BIA can turn this vision into reality by building
                                        a street that better serves its visitors and strengthens its business ecosystem.
                                    </p>
                                </section>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setRecc4(false)}>
                                    Close
                                </Button>
                            </Modal.Footer>
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