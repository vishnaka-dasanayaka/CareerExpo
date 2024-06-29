import Header from "../components/Header";
import eie from "./images/eie.jpg";
import "./About.css"

function About() {
  return (
    <div>
      <Header />
        <div className="title">
          <h1>About us</h1>
        </div>
        <div className="aboutContent">
          <div className="leftAbout">
            <img src={eie} />
          </div>
          <div className="rightAbout">
            <div className="intro">
              <p>The Electrical and Information Engineering Career Fair 2024 is the latest chapter of 
                the annual career day organized by the fourth-year undergraduates of the Faculty of 
                Electrical and Information Engineering in collaboration with the Professional Development Center. 
                The primary goal of this esteemed event is to create a platform for the engineering industry to 
                connect with the promising talent pool of our faculty, inform the undergraduates about the career 
                opportunities available through various organizations, and offer students a transformative experience 
                as they explore their future career paths.
              </p>
            </div>
            <div class="stats">
              <h1>150 <span class="highlight">+</span><span class="countSpacer"></span> 50 <span class="highlight">+</span></h1>
              <p>Candidates <span class="highlight spacer"></span> Companies</p>
            </div>
            <div className="subTopic">
              <h2>Our Vision</h2>
            </div>
            <div className="content">
              <p>Our vision is to create a platform for young minds to connect with industry experts, 
              fostering innovation, knowledge sharing, and personal growth. We aim to shape a future of 
              excellence in technology, surpassing boundaries and reaching the caliber of the global engineering 
              community.
              </p>
            </div>
            <div className="subTopic">
              <h2>Our Mission</h2>
            </div>
            <div className="content">
              <p>We foster engineering enthusiasts by providing diverse opportunities and essential career insights. 
                Through recruitment programs and mentorship sessions, we facilitate collaboration between young minds 
                and industry professionals, creating a platform for showcasing skills and innovative ideas. We promote 
                pursuit of dream career pathways, lifelong learning, and professional growth to turn envisioned careers 
                into reality.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default About;
