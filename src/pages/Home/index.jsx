import { Link, useNavigate } from "react-router-dom";
import Btn1Img from "/btn1.png";
import Btn1DeepImg from "/btn1_deep.png";
import Btn2Img from "/btn2.png";
import Btn2DeepImg from "/btn2_deep.png";
import Btn3Img from "/btn3.png";
import Btn3DeepImg from "/btn3_deep.png";
import Btn4Img from "/btn4.png";
import Btn4DeepImg from "/btn4_deep.png";
import DotsImg from "/dots.png";
import TitleImg from "/title.png";
import CameraImg from "/camera.png";
import "./index.css";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [isBtn1Hover, setIsBtn1Hover] = useState(false);
  const [isBtn2Hover, setIsBtn2Hover] = useState(false);
  const [isBtn3Hover, setIsBtn3Hover] = useState(false);
  const [isBtn4Hover, setIsBtn4Hover] = useState(false);

  const handleSubLinkClick = (e) => {
    e.stopPropagation();
    navigate("/Waiting");
  };

  return (
    <div className="home-container">
      <img src={TitleImg} alt="title-text" className="title-img" />
      <Link
        to="/Camera"
        onMouseEnter={() => setIsBtn1Hover(true)}
        onMouseLeave={() => setIsBtn1Hover(false)}
      >
        <img
          src={isBtn1Hover ? Btn1DeepImg : Btn1Img}
          alt="按钮1"
          className="oval-outside-button"
        />
      </Link>
      <Link
        to="/Waiting"
        onMouseEnter={() => setIsBtn2Hover(true)}
        onMouseLeave={() => setIsBtn2Hover(false)}
      >
        <img
          src={isBtn2Hover ? Btn2DeepImg : Btn2Img}
          alt="按钮2"
          onClick={handleSubLinkClick}
          className="oval-inside-button"
        />
      </Link>

      <img src={DotsImg} alt="dots" className="dots-pattern-img" />
      <img src={CameraImg} alt="dots" className="camera-img" />

      <Link
        to="/About"
        onMouseEnter={() => setIsBtn3Hover(true)}
        onMouseLeave={() => setIsBtn3Hover(false)}
      >
        <img
          src={isBtn3Hover ? Btn3DeepImg : Btn3Img}
          alt="按钮3"
          className="oval-sub-left-button"
        />
      </Link>
      <Link
        to="/Authortity"
        onMouseEnter={() => setIsBtn4Hover(true)}
        onMouseLeave={() => setIsBtn4Hover(false)}
      >
        <img
          src={isBtn4Hover ? Btn4DeepImg : Btn4Img}
          alt="按钮4"
          className="oval-sub-right-button"
        />
      </Link>
    </div>
  );
}

export default Home;
