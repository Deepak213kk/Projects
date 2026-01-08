import "./Signupanimate.css";
import mascot from "../../assets/Signupimg.png";

export default function SignupMascot() {
  return (
    <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center position-relative mascot-container">
      
      {/* Orange glow */}
      <div className="orange-glow"></div>

      {/* Mascot */}
      <div className="mascot-float">
        <img src={mascot} alt="Juice Mascot" className="mascot-img" />

        {/* Speech bubble */}
        <div className="speech-bubble">
          Join for fresh juice 🍊
        </div>
      </div>

    </div>
  );
}
