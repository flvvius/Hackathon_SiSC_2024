import { useNavigate } from "react-router-dom";
import crocImg from "../assets/Croc-logo.png";

const LandingPage = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/films");
  }

  return (
    <div className="landing-page">
      <div className="logo-and-pic">
        <h1>Swamp Screen</h1>
        <img className="poza-croco" src={crocImg} alt="Poza croco" />
      </div>
      <button onClick={handleClick} className="rezerva-button">
        Book Now 🥺👉👈
      </button>
    </div>
  );
};
export default LandingPage;
