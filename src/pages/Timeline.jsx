import leftImage from "/assets/left.png";
import rightImage from "/assets/right.png";
import "/src/components/SideImages.css";

const Timeline = () => {
  return (
    <div className="side-images-container">
      <img src={leftImage} alt="Left Side" className="side-image left" />

      <div
        className="about-section"
        style={{ paddingLeft: 530, paddingRight: 650 }}
      >
        <div className="App">
          <h1 className="centered-heading">TIMELINE</h1>
        </div>
      </div>

      <img src={rightImage} alt="Right Side" className="side-image right" />
    </div>
  );
};

export default Timeline;
