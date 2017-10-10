import React from 'react';
import { ContactForm } from  '../components/contactForm_validation_attempt.js';

export default class Main extends React.Component {

  onSubmit = (fields) => {
    this.setState( fields );
    console.log(fields);
  }
    render () {
      return (
<div>
    <header id="page-top">
        <div className="header-content headerbanner">
            <div className="header-content-inner">
                <h1 id="homeHeading">Your First stop for Great app development!</h1>
                <hr />
                <p>MoovaShaka can help you build, refine &amp; define your virtual presence</p>
                <a href="#about" className="btn btn-primary btn-xl page-scroll">Find Out More</a>
            </div>
        </div>
    </header>
  <section className="bg-primary" id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 text-center">
                    <h2 className="section-heading">We have what you need!</h2>
                    <hr className="light" />
                    <p className="text-faded">At MoovaShaka we have everything needed to get your new website up and running in no time! We are a multi-disciplinary team
                    with all the skills &amp; know-how to really get your new project off to a flying start! Send us an email with
                    an outline of your requirements and we can arrange a convenient time to iron out the detail. </p>
                    <a href="#services" className="page-scroll btn btn-default btn-xl sr-button">Get Started!</a>
                </div>
            </div>
        </div>
    </section>

    <section id="services">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">At Your Service</h2>
                    <hr className="primary" />
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="service-box">
                        <i className="fa fa-4x fa-diamond text-primary sr-icons"></i>
                        <h3>Bespoke Designs</h3>
                        <p className="text-muted">Or we can modify what you already have - HTML5, CSS3, JavaScript &amp; PHP specialities. </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="service-box">
                        <i className="fa fa-4x fa-paper-plane text-primary sr-icons"></i>
                        <h3>Ready to Shop?</h3>
                        <p className="text-muted">or ready to sell, whatever you have in mind - together we can bring it to the world.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="service-box">
                        <i className="fa fa-4x fa-newspaper-o text-primary sr-icons"></i>
                        <h3>Up to Date</h3>
                        <p className="text-muted">We upskill regularly to keep things fresh.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="service-box">
                        <i className="fa fa-4x fa-heart text-primary sr-icons"></i>
                        <h3>Made with Love</h3>
                        <p className="text-muted">We approach our creations with passion and our clients with respect!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="no-padding" id="portfolio">
        <div className="container-fluid">
            <div className="row no-gutter popup-gallery">
                <div className="col-lg-4 col-sm-6">
                    <a href="img/portfolio/fullsize/1.jpg" className="portfolio-box">
                        <img src="img/portfolio/thumbnails/1.jpg" className="img-responsive" alt="" />
                        <div className="portfolio-box-caption">
                            <div className="portfolio-box-caption-content">
                                <div className="project-category text-faded">
                                    Category
                                </div>
                                <div className="project-name">
                                    Project Name
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <a href="img/portfolio/fullsize/2.jpg" className="portfolio-box">
                        <img src="img/portfolio/thumbnails/2.jpg" className="img-responsive" alt="" />
                        <div className="portfolio-box-caption">
                            <div className="portfolio-box-caption-content">
                                <div className="project-category text-faded">
                                    Category
                                </div>
                                <div className="project-name">
                                    Project Name
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <a href="img/portfolio/fullsize/3.jpg" className="portfolio-box">
                        <img src="img/portfolio/thumbnails/3.jpg" className="img-responsive" alt="" />
                        <div className="portfolio-box-caption">
                            <div className="portfolio-box-caption-content">
                                <div className="project-category text-faded">
                                    Category
                                </div>
                                <div className="project-name">
                                    Project Name
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <a href="img/portfolio/fullsize/4.jpg" className="portfolio-box">
                        <img src="img/portfolio/thumbnails/4.jpg" className="img-responsive" alt="" />
                        <div className="portfolio-box-caption">
                            <div className="portfolio-box-caption-content">
                                <div className="project-category text-faded">
                                    Category
                                </div>
                                <div className="project-name">
                                    Project Name
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <a href="img/portfolio/fullsize/5.jpg" className="portfolio-box">
                        <img src="img/portfolio/thumbnails/5.jpg" className="img-responsive" alt="" />
                        <div className="portfolio-box-caption">
                            <div className="portfolio-box-caption-content">
                                <div className="project-category text-faded">
                                    Category
                                </div>
                                <div className="project-name">
                                    Project Name
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <a href="img/portfolio/fullsize/6.jpg" className="portfolio-box">
                        <img src="img/portfolio/thumbnails/6.jpg" className="img-responsive" alt="" />
                        <div className="portfolio-box-caption">
                            <div className="portfolio-box-caption-content">
                                <div className="project-category text-faded">
                                    Category
                                </div>
                                <div className="project-name">
                                    Project Name
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <aside className="bg-dark">
        <div className="container text-center">
            <div className="call-to-action">
                <h2>Free consultation at MoovaShaka</h2>
                <a href="http://startbootstrap.com/template-overviews/creative/" className="btn btn-default btn-xl sr-button">Talk to us Now!</a>
            </div>
        </div>
    </aside>

    <section id="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 text-center">
                    <h2 className="section-heading">Let's Get In Touch</h2>
                    <hr className="primary" />
                    <p>Ready to start your next project with us? That's great! Give us a call or send us an email and we will get back to you as soon as possible.</p>
                </div>
                <div className="col-lg-4 col-lg-offset-2 text-center">
                    <i className="fa fa-phone fa-3x sr-contact"></i>
                    <p>0333 345 6789</p>
                </div>
                <div className="col-lg-4 text-center">
                    <i className="fa fa-envelope-o fa-3x sr-contact"></i>
                    <p><a href="mailto:your-email@your-domain.com">feedback@moovashaka.co.uk</a></p>
                      </div>
            </div>
          </div> {/*Close container*/}
          <div className="container">
          <div className="row">
          <div className="col align-items-end contactForm">
          <ContactForm onSubmit={fields => this.onSubmit(fields)}/>
          <p>
            {JSON.stringify(this.state.fields, null, 2)}
          </p>
          </div>
          </div>
      </div>
        </section>
  </div>
    );
  }
}
