import LetterImg from "/Authority/letter.png";
import BtnBackImg from "/Authority/back.png";
import Btn1Img from "/Authority/btn1.png";
import Btn1Deep1Img from "/Authority/btn1-1.png";
import Btn1Deep2Img from "/Authority/btn1-2.png";
import Btn2Img from "/Authority/btn2.png";
import Btn2Deep1Img from "/Authority/btn2-1.png";
import Btn2Deep2Img from "/Authority/btn2-2.png";
import Btn3Deep1Img from "/Authority/btn3-1.png";
import Btn3Deep2Img from "/Authority/btn3-2.png";
import Btn3Deep3Img from "/Authority/btn3-3.png";
import Btn3Deep4Img from "/Authority/btn3-4.png";
import Btn4Img from "/Authority/btn4.png";
import Btn5Img from "/Authority/btn5.png";
import Btn6Img from "/Authority/btn6.png";
import { useNavigate } from "react-router-dom";

import "./index.css";

function Authority() {
  const navigate = useNavigate();

  return (
    <div className="authority-container">
      <img src={LetterImg} alt="letter" className="letter-img" />
      <img src={BtnBackImg} alt="back" className="authority-btn-back" onClick={() => navigate("/")}/>
      <img src={Btn1Img} alt="btn1" className="authority-btn-1" />
      <img src={Btn1Deep1Img} alt="btn1-1" className="authority-btn-1-1" />
      <img src={Btn1Deep2Img} alt="btn1-2" className="authority-btn-1-2" />
      <img src={Btn2Img} alt="btn2" className="authority-btn-2" />
      <img src={Btn2Deep1Img} alt="btn2-1" className="authority-btn-2-1" />
      <img src={Btn2Deep2Img} alt="btn2-2" className="authority-btn-2-2" />
      <img src={Btn3Deep1Img} alt="btn3-1" className="authority-btn-3" />
      <img src={Btn3Deep2Img} alt="btn3-2" className="authority-btn-3-2" />
      <img src={Btn3Deep3Img} alt="btn3-3" className="authority-btn-3-3" />
      <img src={Btn3Deep4Img} alt="btn3-4" className="authority-btn-3-4" />
      <img src={Btn4Img} alt="btn4" className="authority-btn-4" />
      <img src={Btn5Img} alt="btn5" className="authority-btn-5" />
      <img src={Btn6Img} alt="btn6" className="authority-btn-6" />
    </div>
  );
}

export default Authority;
