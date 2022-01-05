import "./styles.scss";
import { Container } from "reactstrap";
import Moonoz from "./img/MoonBanner.png";
import BTN from "./Btn";

export default function App() {
  return (
    <Container className="background-gradient" fluid>
      <Container className="center-app">
        <div className="moonoz-img">
          <img src={Moonoz} alt="Joel Munoz Moonoz" />
        </div>
        <div className="">
          <h1>Joel Munoz</h1>
        </div>
        <div className="text-dec">
          <h5 className="text-size">Hayward, CA</h5>
        </div>
        <BTN
          link={"https://www.linkedin.com/in/moonoz/"}
          btnName={"Linkedin"}
        />
        <BTN
          link={"https://github.com/jmoonoz"}
          btnName={"GitHub"}
        />

        <BTN 
        link={"//www.instagram.com/moonozdisenoz/?hl=en"} 
        btnName={"Instagram"} 
        />
      </Container>
    </Container>
  );
}
