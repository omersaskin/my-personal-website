
import { Link } from "react-scroll";
import ReactTypingEffect from 'react-typing-effect';

/*--------------------
* Banner Section
----------------------*/
export default function Banner() {
    return (
        <>
            <section data-scroll-data="0" id="home" className="home-section bg-gray">
                <div className="container">
                    <div className="row gy-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="home-intro one-page-nav text-center text-lg-start">
                                <h6>👋, My name is Krinky</h6>
                                <h1>I'm a  <ReactTypingEffect text={["Designer", "Developer"]}
                                    speed="100" typingDelay="500" eraseDelay="200" /> </h1>
                                <p>Based in Los Angeles, California.</p>
                                <div className="btn-bar">
                                    <Link className="px-btn px-btn-theme" to="#">Let's Start</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <div className="home-image text-center">
                                <img src="img/home-banner.png" title="Banner" alt="Banner"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
