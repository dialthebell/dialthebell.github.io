import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CameraImg from "/Camera/camera_green.png";
import Circle1Img from "/Camera/circle1.png";
import Circle2Img from "/Camera/circle2.png";
import Circle3Img from "/Camera/circle3.png";
import Circle4Img from "/Camera/circle4.png";
import DangerImg from "/Camera/danger.png";
import SaveImg from "/Camera/save.png";
import TitleImg from "/Camera/title.png";
import VoteImg from "/Camera/vote.png";
import Word2Img from "/Camera/quietly2.png";
import Word3Img from "/Camera/recording3.png";
import Word4Img from "/Camera/bushes4.png";
import "./index.css";

function Camera() {
  const navigate = useNavigate();
  const [currentCircle, setCurrentCircle] = useState(1);

  const circleImages = {
    1: Circle1Img,
    2: Circle2Img,
    3: Circle3Img,
    4: Circle4Img,
  };

  const wordImages = {
    2: Word2Img,
    3: Word3Img,
    4: Word4Img,
  };

  const handleSaveClick = () => {
    if (currentCircle === 1) {
      navigate("/");
    } else {
      setCurrentCircle((prev) => prev - 1);
    }
  };

  const handleDangerClick = () => {
    if (currentCircle === 4) {
      navigate("/");
    } else {
      setCurrentCircle((prev) => prev + 1);
    }
  };

  return (
    <div className="camera-container">
      <img src={CameraImg} alt="camera" className="camera-img" />
      <img
        src={circleImages[currentCircle]}
        alt={`circle-${currentCircle}`}
        className="circle-img"
      />
      <img
        src={DangerImg}
        alt="danger"
        className="danger-img"
        onClick={handleDangerClick}
      />
      <img
        src={SaveImg}
        alt="save"
        className="save-img"
        onClick={handleSaveClick}
      />
      <img src={TitleImg} alt="title" className="title-img" />
      <img src={VoteImg} alt="vote" className="vote-img" />
      {currentCircle !== 1 && (
        <img
          src={wordImages[currentCircle]}
          alt={`word-${currentCircle}`}
          className="word-img"
        />
      )}
    </div>
  );
}

export default Camera;
