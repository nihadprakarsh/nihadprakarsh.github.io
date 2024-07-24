import leftImage from '/assets/left.png';
import rightImage from '/assets/right.png';
import '/src/components/SideImages.css'
const About = () => {
  return (
    <div className="side-images-container">
      <img src={leftImage} alt="Left Side" className="side-image left" />
      <img src={rightImage} alt="Right Side" className="side-image right" />
    </div>
  );
};

export default About;
