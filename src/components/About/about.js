
import { Link } from "react-scroll";

/*--------------------
* About Section
----------------------*/
export default function About() {
    return (
        <>
            <section className="section about-section">
                <div className="container">
                    <div className="row gy-5 align-items-center">
                        <div className="col-lg-6 text-center">
                            <img src="img/aboutme-banner.png" title="Banner" alt="Banner"/>
                        </div>
                        <div className="col-lg-6 ps-lg-5">
                            <div className="about-text">
                                <h3 className="h1">I'm a Freelancer Front-end Developer with over 3 years of experience.</h3>
                                <p>I'm a Freelancer Front-end Developer with over 3 years of experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</p>
                                <div className="row pt-2">
                                    <div className="col-6 col-md-4">
                                        <h5>285+</h5>
                                        <span>Projet Completed</span>
                                    </div>
                                    <div className="col-6 col-md-4">
                                        <h5>190+</h5>
                                        <span>Happy Clients</span>
                                    </div>
                                </div>
                                <div className="btn-bar pt-4">
                                    <Link className="px-btn px-btn-theme me-4" to="contactus">Contact Me</Link>
                                    <Link className="px-btn px-btn-dark" to="portfolio">Portfolio</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
