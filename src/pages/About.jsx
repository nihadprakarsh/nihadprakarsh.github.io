import leftImage from "/assets/left.png";
import rightImage from "/assets/right.png";
import "/src/components/SideImages.css";

const About = () => {
  return (
    <div className="side-images-container">
      <img src={leftImage} alt="Left Side" className="side-image left" />

      <div
        className="about-section"
        style={{ paddingLeft: 530, paddingRight: 650 }}
      >
        <div className="App">
          <h1 className="centered-heading">About</h1>
        </div>
        <div className="paragraph" style={{ paddingTop: 100 }}>
          <p>
            Welcome to my corner of the internet! If you’re here, you're
            probably curious about who I am. Well, let's dive in.
          </p>
          <p>
            Hi, I'm Nihad. By day, I’m a passionate software developer, crafting
            code and solving problems. By night, I'm a master pianist,
            transforming keystrokes into melodies. Yes, I have a master’s degree
            in piano, and I balance both worlds with a symphony of precision and
            creativity.
          </p>
          <p>
            I completed my undergrad at M.S. Ramaiah Institute of Technology,
            Bangalore, majoring in Electrical and Electronics Engineering. My
            world revolves around software systems, software verification and
            programming languages. Whether it's full stack or systems
            development, I dive in headfirst.
          </p>
          <p>
            On a typical day, you might find me juggling code and compositions,
            discussing the latest tech trends, or getting lost in a political
            debate. My journey is a blend of logic and creativity, precision and
            passion.
          </p>
          <p>
            Support my dual passions—software and music—by buying me dinner
            sometime. Or better yet, join me in a conversation about the wonders
            of technology and the beauty of music.
          </p>
        </div>
      </div>

      <img src={rightImage} alt="Right Side" className="side-image right" />
    </div>
  );
};

export default About;
