
/*--------------------
* Contact Section
----------------------*/

export default function Contact() {
    return (
        <>
        <section data-scroll-data="4" id="contactus" className="section contactus-section bg-dark" style={{ "backgroundImage": "url(/img/effect/bg-effect-3.png)", "backgroundRepeat": "no-repeat", "backgroundSize": "cover", "backgroundPosition": "center"}}>
            <div className="container">
                <div className="row gy-5">
                    <div className="col-lg-6">
                        <div className="contact-form">
                            <h6>Get in touch</h6>
                            <p className="lead">Our friendly team would love to hear from you.</p>
                            <form id="contact-form" method="POST">
                                <div className="row gx-3 gy-4">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">First name</label>
                                            <input name="Name" id="name" placeholder="Name *" className="form-control" type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Your Email</label>
                                            <input name="Email" id="email" placeholder="Email *" className="form-control" type="email"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label className="form-label">Subject</label>
                                            <input name="Subject" id="subject" placeholder="Subject *" className="form-control" type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="form-label">Your message</label>
                                            <textarea name="message" id="message" placeholder="Your message *" rows="4" className="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="send">
                                            <button className="px-btn px-btn-theme2" type="button" value="Send"> Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-5 ms-auto col-xl-4">
                        <div className="pb-5">
                            <img className="w-100" src="/img/contact-bg.png" title="" alt=""/>
                        </div>
                        <ul className="contact-infos">
                            <li>
                                <div className="icon bg-1">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="col">
                                    <h5>Phone</h5>
                                    <p>+01 123 654 8096</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon bg-2">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div className="col">
                                    <h5>Mail</h5>
                                    <p>info@domainname.com</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon bg-3">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="col">
                                    <h5>Visit My Studio</h5>
                                    <p>Warnwe Park Streetperrine, <br/>FL 33157 New York City</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        </>
     );
}
