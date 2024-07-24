import leftImage from '/assets/left.png';
import rightImage from '/assets/right.png';
import '/src/components/SideImages.css';

const About = () => {
  return (
    <div className="side-images-container">
      <img src={leftImage} alt="Left Side" className="side-image left" />
      
      <div className="about-section">
        <h1>ABOUT</h1>
        <p>
          Welcome to our website! We are dedicated to providing you with the best
          content and services. Our team works hard to ensure you have a great
          experience.
          Our mission is to offer top-notch solutions that cater to your needs.
          We value your feedback and are always striving to improve. Thank you
          for visiting us!
        </p>
      </div>
      
      <img src={rightImage} alt="Right Side" className="side-image right" />
    </div>
  );
};

export default About;
