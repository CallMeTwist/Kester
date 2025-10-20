import React from 'react';

const Services = () => {
    return (
        <div>
            <section className="services serv2 section-padding" data-scroll-index="1" id="services">
                <div className="container">
                    <div className="sec-head mb-80 wow fadeIn">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <div className="d-inline-block">
                                    <div className="sub-title-icon d-flex align-items-center">
                                        <span className="icon pe-7s-bell"></span>
                                        <h6>My Services</h6>
                                    </div>
                                </div>
                                <h3>What Services I Provide ?</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay=".4s">
                            <div className="item mb-30">
                                <div className="cont">
                                    <div className="d-flex align-items-center mb-30">
                                        <div>
                                        <span className="icon-img-50 mr-40">
                                            <img src="/assets/imgs/serv-img/2.png" alt=""/>
                                        </span>
                                        </div>
                                        <div>
                                            <span className="opacity-7 fz-13 mb-5">8 Projects</span>
                                            <h5 className="fz-20">Web Development</h5>
                                        </div>
                                    </div>
                                    <p>Passionate web developer specializing in creating modern, user-friendly websites.
                                        Proficient in HTML, CSS,
                                        JavaScript, and popular frameworks. Expertise in both front-end and back-end
                                        development, ensuring seamless
                                        digital experiences. Let's collaborate to bring your vision to life.
                                    </p>
                                    <a href="services.html" className="mt-30 underline sub-title ls1">
                                        <span>Read More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay=".6s">
                            <div className="item mb-30">
                                <div className="cont">
                                    <div className="d-flex align-items-center mb-30">
                                        <div>
                                        <span className="icon-img-50 mr-40">
                                            <img src="/assets/imgs/serv-img/3.png" alt=""/>
                                        </span>
                                        </div>
                                        <div>
                                            <span className="opacity-7 fz-13 mb-5">8 Projects</span>
                                            <h5 className="fz-20">Branding Design</h5>
                                        </div>
                                    </div>
                                    <p>Dedicated branding designer passionate about crafting unique visual identities.
                                        Specializing in creating memorable logos, cohesive brand aesthetics, and
                                        impactful design solutions. Let's collaborate to elevate your brand and make a
                                        lasting impression.</p>
                                    <a href="#" className="mt-30 underline sub-title ls1">
                                        <span>Read More</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="1s">
                            <div className="item sm-mb30">
                                <div className="cont">
                                    <div className="d-flex align-items-center mb-30">
                                        <div>
                                        <span className="icon-img-50 mr-40">
                                            <img src="/assets/imgs/serv-img/1.png" alt=""/>
                                        </span>
                                        </div>
                                        <div>
                                            <span className="opacity-7 fz-13 mb-5">8 Projects</span>
                                            <h5 className="fz-20">Web Design</h5>
                                        </div>
                                    </div>
                                    <p>Creative web designer with a passion for crafting visually stunning and intuitive
                                        websites. Proficient in UX/UI design, HTML, CSS, and responsive frameworks.
                                        Let's collaborate to transform your ideas into captivating online
                                        experiences.</p>
                                    <a href="services.html" className="mt-30 underline sub-title ls1">
                                        <span>Read More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;