import React from "react";
import './portfolio.css'

function Portfolio() {

    return (<>
        <section class="hero d-flex flex-column align-items-center justify-content-center">
          <div class="text-center">
            <h1 class="h1 text-white fw-medium fst-italic">Gurudayal Birla</h1>
            <h2 class="display-3 text-white fw-bold">MERN STACK DEVELOPER <br /></h2>
            {/* <a href="#skills" class="btn btn-lg fs-6 fw-medium mt-5 btn-primary p-3">TELL ME MORE</a> */}
          </div>
        </section>
        <section class="container py-5" id="skills">
          <div class="row mt-4 py-3">
            <div class="col-12 d-flex flex-column text-center justify-content-center">
              <h2>SKILLS</h2>
              <h5 class="text-secondary fw-normal py-2 fst-italic">Continuously improving my skills and knowledge in the field.</h5>
            </div>
          </div>
          <div class="row d-flex justify-content-center gap-5 mx-0">
            <div class="card mt-5 d-flex flex-column align-items-center text-center bg-white p-4" style={{ "width": "25rem" }}>
              <i class="text-white bg-primary d-flex align-items-center justify-content-center fs-2 rounded-circle fa-solid fa-cart-shopping"></i>
              <h3 class="mt-4 h4">Front-end Development</h3>
              <p class="text-center">Proficient in HTML, CSS, and JavaScript. Experienced in responsive web design, building user-friendly interfaces, and using modern frameworks like ReactJS.</p>
            </div>
            <div class="card mt-5 d-flex flex-column align-items-center text-center bg-white p-4" style={{ "width": "25rem" }}>
              <i class="text-white bg-primary d-flex align-items-center justify-content-center fs-2 rounded-circle fa-solid fa-laptop"></i>
              <h3 class="mt-4 h4">Back-end Development</h3>
              <p class="text-center">Skilled in server-side programming using technologies like Node.js and Express. Experience working with databases such as MongoDB and MySQL.</p>
            </div>
            {/* <div class="card mt-5 d-flex flex-column align-items-center text-center bg-white p-4" style={{ "width": "25rem" }}>
              <i class="text-white bg-primary d-flex align-items-center justify-content-center fs-2 rounded-circle fa-solid fa-mobile-screen-button"></i>
              <h3 class="mt-4 h4">Mobile App Development</h3>
              <p class="text-center">Proficient in developing mobile apps for iOS and Android using frameworks like React Native. Experienced in building engaging and intuitive mobile user interfaces.</p>
            </div> */}
          </div>
        </section>
        <section class="container py-5" id="portfolio">
          <div class="row mt-4 py-3">
            <div class="col-12 d-flex flex-column text-center justify-content-center">
              <h2>PORTFOLIO</h2>
              <h5 class="text-secondary fw-normal py-2 fst-italic">A collection of projects I've worked on.</h5>
            </div>
            <div class="row mt-5 mx-0 justify-content-center align-items-center">
              <div class="col-lg-3 col-md-4 col-12 card-wrapper">
                <div class="card mt-4">
                  <img src="./images/ecommerce.png" class="img-fluid" alt="portfolio-img" />
                  <div class="card-body text-center">
                    <h6 class="card-title">E-commerce Website</h6>
                    <p class="card-text text-secondary">HTML/CSS/JavaScript/ReactJs</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 card-wrapper">
                <div class="card mt-4">
                  <img src="./images/landing-page.jpg" class="img-fluid" alt="portfolio-img" />
                  <div class="card-body text-center">
                    <h6 class="card-title">Responsive Landing Page</h6>
                    <p class="card-text text-secondary">HTML/CSS/Bootstrap</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 card-wrapper">
                <div class="card mt-4">
                  <img src="./images/calculator-app.jpg" class="img-fluid" alt="portfolio-img" />
                  <div class="card-body text-center">
                    <h6 class="card-title">Calculator App</h6>
                    <p class="card-text text-secondary">HTML/CSS/JavaScript</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 card-wrapper">
                <div class="card mt-4">
                  <img src="./images/blog.jpg" class="img-fluid" alt="portfolio-img" />
                  <div class="card-body text-center">
                    <h6 class="card-title">Blog Website</h6>
                    <p class="card-text text-secondary">HTML/CSS/ReactJs</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 card-wrapper">
                <div class="card mt-4">
                  <img src="./images/react.jpg" class="img-fluid" alt="portfolio-img" />
                  <div class="card-body text-center">
                    <h6 class="card-title">Task Management App</h6>
                    <p class="card-text text-secondary">ReactJS</p>
                  </div>
                </div>
              </div>
    
            </div>
          </div>
        </section>
        <section className="container py-5" id="about">
          <div className="row mt-4 py-3">
            <div className="col-12 d-flex flex-column text-center">
              <h2>ABOUT</h2>
              <h5 className="text-secondary fw-normal py-2 fst-italic">Learn more about me, my background, and what motivates me.</h5>
            </div>
          </div>
          <div className="row flex-row-reverse flex-md-row mt-5 pt-5">
            <div className="col-9 col-md-5 text-md-end">
              <h5>Early Passion for Technology</h5>
              <p>From an early age, I became fascinated with computers and programming. Starting with basic HTML and CSS, I gradually expanded my skills to include JavaScript and various frameworks.</p>
            </div>
            <div className="col-3 col-md-2 img text-center">
              <img className="rounded-circle border border-5 border-dark-subtle img-fluid" src="./images/about-img-1.jpg" alt="img" />
            </div>
          </div>
          <div className="row justify-content-md-end mt-5 pt-5">
            <div className="col-3 col-md-2 img text-center">
              <img className="rounded-circle border border-5 border-dark-subtle img-fluid" src="./images/about-img-2.jpg" alt="img" />
            </div>
            <div className="col-9 col-md-5">
              <h5>Higher Education and Career Growth</h5>
              <p>During my university years, I studied computer science and gained hands-on experience through internships and freelance projects. This period fueled my passion for creating innovative solutions and solving complex problems.</p>
            </div>
          </div>
          <div className="row flex-row-reverse flex-md-row mt-5 pt-5">
            <div className="col-9 col-md-5 text-md-end">
              <h5>Professional Excellence and Continuous Learning</h5>
              <p>Throughout my career, I have consistently sought opportunities to refine my skills and stay updated with the latest technologies. I strive for excellence in every project I undertake and aim to deliver valuable and impactful results.</p>
            </div>
            <div className="col-3 col-md-2 img text-center">
              <img className="rounded-circle border border-5 border-dark-subtle img-fluid" src="./images/about-img-3.jpg" alt="img" />
            </div>
          </div>
          <div className="row justify-content-md-end mt-5 pt-5">
            <div className="col-3 col-md-2 img text-center">
              <img className="rounded-circle border border-5 border-dark-subtle img-fluid" src="./images/about-img-4.jpg" alt="img" />
            </div>
            <div className="col-9 col-md-5">
              <h5>Continuing to Make a Difference</h5>
              <p>I am committed to leveraging my skills and expertise to contribute to meaningful projects that have a positive impact on society. I am eager to take on new challenges and collaborate with talented individuals to create innovative solutions.</p>
            </div>
          </div>
          <div className="row flex-row-reverse flex-md-row mt-5 pt-5">
            <div className="col-9 col-md-5 text-md-end">
              <h5>NCC Cadet Experience</h5>
              <p>As an NCC Cadet, I developed leadership skills, discipline, and a sense of responsibility. The training equipped me with valuable attributes that I apply to challenges and collaborations, fostering a dedicated and team-oriented approach in my work.</p>
            </div>
            <div className="col-3 col-md-2 text-center">
              <img className="rounded-circle border border-5 border-dark-subtle img-fluid" src="./images/national-cadet-corps-logo.png" alt="img" />
              {/* <img src="./images/national-cadet-corps-logo.png" /> */}
            </div>
          </div>
    
    
        </section>
        <section className="container py-5" id="cv">
          <div className="row mt-4 py-3">
            <div className="col-12 d-flex flex-column text-center">
              <h2>CURRICULUM VITAE</h2>
              <h5 className="text-secondary fw-normal py-2 fst-italic">
                A small sampling of some of the projects I've worked on as a student of the ICS program.
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mt-5 order-lg-0 order-1 text-center">
              <img
                className="img-fluid rounded-circle border border-5 border-dark-subtle"
                src="./images/guruImage.jpg"
                alt="profile-img"
              />
              <h2 className="mt-3">Gurudayal Birla</h2>
              <ul className="list-unstyled contact-info">
                <li>
                  <i className="fas fa-envelope me-2"></i> gurubirla50@gmail.com
                </li>
                <li>
                  <i className="fas fa-phone me-2"></i> +91 7747947812
                </li>
                <li>
                  <i className="fas fa-map-marker-alt me-2"></i> Indore (MP)
                </li>
              </ul>
              <ul className="social-icons my-5 d-flex justify-content-center">
                <a href="#" className="bg-primary mx-2 text-white d-flex align-items-center justify-content-center text-decoration-none rounded-circle">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#" className="bg-primary mx-2 text-white d-flex align-items-center justify-content-center text-decoration-none rounded-circle">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="bg-primary mx-2 text-white d-flex align-items-center justify-content-center text-decoration-none rounded-circle">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </ul>
              <h5>Technical Skills</h5>
              <div className="row">
                <div className="col-6">
                  <ul className="list-unstyled">
                    <li>React Js</li>
                    <li>Node Js</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>BOOTSTRAP</li>
                    <li>jQuery</li>
                    <li>MUI</li>
                    <li>joi-browser</li>
                    <li>CONTEXT</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="list-unstyled">
                    <li>REDUX</li>
                    <li>EXPRESS</li>
                    <li>MONGODB</li>
                    <li>REACT BOOTSTRAP</li>
                    <li>MUI</li>
                    <li>Axios</li>
                    <li>Multer</li>
                    <li>JWT</li>
                    <li>MONGODB</li>
                    <li>Mongoose</li>
                    <li>Git</li>
                    <li>Basic [GraphQL]</li>
                  </ul>
                </div>
              </div>
    
            </div>
            <div className="col-lg-7 order-lg-1 order-0 mt-5 text-start">
              <h3>Profile</h3>
              <hr />
              <p>
                I have 2 years of experience in MERN Stack Developer with
                extensive knowledge of Web- Development technologies,
                currently learning Blockchain Technologies and Solidity.
              </p>
              <h3>Highlights of Qualifications</h3>
              <hr />
              <ul>
                <li>MASTER OF COMPUTER APPLICATION</li>
    
                {/* Add or remove qualifications as needed */}
              </ul>
              <h3>Education</h3>
              <hr />
              <dl>
                <dt>2022-24</dt>
                <dd>Sage University, Indore</dd>
                {/* <dd>Degree/Program</dd> */}
              </dl>
    
              <h3>Work Experience</h3>
              <hr />
              <dl>
                <dt>2021-2023</dt>
                <dd>Senior MERN Developer</dd>
                <dd>TEST YANTRA SOFTWARE SOLUTIONS</dd>
                {/* Add or remove work experience entries as needed */}
              </dl>
    
            </div>
          </div>
        </section>
        <section class="py-5" id="contact">
          <div class="container-xxl py-5">
            <div class="col-12 d-flex flex-column text-center justify-content-center">
              <h2 class="text-white">CONTACT ME</h2>
              <h5 class="text-white fw-normal py-2 fst-italic">Interested if I'd be the right fit for your team? Fill in this form and I will respond within 24-48 hours.</h5>
            </div>
            <div class="row pt-4 mt-5">
              <div class="col-12 d-flex justify-content-center">
                <ul class="social-icons d-flex">
                  <a href="#" class="bg-primary mx-2 text-white d-flex align-items-center justify-content-center text-decoration-none rounded-circle icon">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/guru.birla.90/" class="bg-primary mx-2 text-white d-flex align-items-center justify-content-center text-decoration-none rounded-circle icon">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#" class="bg-primary mx-2 text-white d-flex align-items-center justify-content-center text-decoration-none rounded-circle icon">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </section>
    
    
      </>);
}

export default Portfolio;