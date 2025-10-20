import React from 'react';

const Header = () => {
    return (
        <>
            <section className="header-crev bord-thin-bottom" data-scroll-index="0" id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 valign">
                            <div className="content">
                                <h6 className="sub-title mb-30 fz-14 opacity-7">Web Developer</h6>
                                <h1>Hello, I’m <br/> <span className="main-color">Eluke Edison</span></h1>
                                <div className="text mt-30">
                                    <p>I've done remote work for agencies, consulted for startups, and collaborated
                                        with
                                        talented people to create digital products for both business and consumer
                                        use.</p>
                                </div>
                                <div className="mt-50">
                                    <a href="#0" className="butn butn-md butn-bg bg-white text-dark radius-5"
                                       data-scroll-nav="3">
                                        <span>View Works</span>
                                    </a>
                                    <a href="#0" className="butn butn-md butn-bord radius-5 ml-15"
                                       data-scroll-nav="5">
                                        <span>Hire Me !</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="img-author">
                                <img src="/assets/imgs/header/bgmain.png" alt=""/>

                                <div className="box-shadwo">
                                    <div className="d-flex align-items-center">
                                        <h2>4</h2>
                                        <h6>Years of <br/> Experiences</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

            );
            };

            export default Header;