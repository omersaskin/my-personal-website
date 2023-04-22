
import { Link } from "react-scroll";

/*--------------------
* Work Section
----------------------*/
export default function Work() {
    return (
        <>
            <section data-scroll-data="3" id="work" className="section work-section bg-gray">
                <div className="container">
                    <div className="row section-heading justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h3><span>Latest Projects</span></h3>
                        </div>
                    </div>
                    <div className="lightbox-gallery portfolio-box">`
                        <div className="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center">
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-img">
                                    <img src="img/project-1.jpg" title="p1" alt="p1"/>
                                    <Link to="#" className="gallery-link gallery-link-icon">
                                        <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-text">
                                    <h6><span>Web Design</span></h6>
                                    <h4>Website Design for Marketing Agency Startup</h4>
                                    <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                                    <div className="btn-bar">
                                        <Link to="#" className="px-btn px-btn-theme" data-scroll-nav="4">View Project </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center flex-row-reverse">
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-img">
                                    <img src="img/project-2.jpg" title="p2" alt="p2"/>
                                    <Link to="#" className="gallery-link gallery-link-icon">
                                        <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-text">
                                    <h6><span>Web Design</span></h6>
                                    <h4>Website Design for Marketing Agency Startup</h4>
                                    <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                                    <div className="btn-bar">
                                        <Link to="#" className="px-btn px-btn-theme" data-scroll-nav="4" >View Project </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center">
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-img">
                                    <img src="img/project-3.jpg" title="p3" alt="p3"/>
                                    <Link to="#" className="gallery-link gallery-link-icon">
                                        <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-text">
                                    <h6><span>Web Design</span></h6>
                                    <h4>Website Design for Marketing Agency Startup</h4>
                                    <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                                    <div className="btn-bar">
                                        <Link to="#" className="px-btn px-btn-theme" data-scroll-nav="4" >View Project </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-3 gy-4 portfolio-box justify-content-around align-items-center flex-row-reverse">
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-img">
                                    <img src="img/project-4.jpg" title="p4" alt="p4"/>
                                    <Link to="#" className="gallery-link gallery-link-icon">
                                        <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-text">
                                    <h6><span>Web Design</span></h6>
                                    <h4>Website Design for Marketing Agency Startup</h4>
                                    <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                                    <div className="btn-bar">
                                        <Link to="#" className="px-btn px-btn-theme" data-scroll-nav="4">View Project </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
