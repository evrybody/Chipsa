import Button from "../../Components/Button/Button";
import background from "../../imgs/Background.png";
import mountain from "../../imgs/Mountain.png";
import centerCube from "../../imgs/centerCube.png";
import { useState, useEffect } from "react";
import "./secondLayout.css";

export default function SecondLayout() {
  const [timer, setTimer] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTimer(false);
    }, 3000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <div
      className="next-content"
      style={{
        padding: 50,
        backgroundImage: `url(${background})`,
        backgroundSize: "100%",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundColor: "lightgrey",
        color: "#EDEDF5",
        height: "90.5%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {timer ? (
        <>
          <h2 className="opacity">Main content</h2>
          <p className="transparency">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            finibus, diam sit amet fringilla eleifend, magna orci maximus dolor,
            nec pulvinar tellus justo sed nisl. Fusce id vulputate diam...
          </p>
          <img
            src={mountain}
            alt="V"
            style={{
              position: "absolute",
              pointerEvents: "none",
              width: "100%",
              top: "100px",
              left: 0,
            }}
          />
        </>
      ) : ( //add a delay or animation
        <>
          <h2 className="opacity">Other Content</h2>
          <p className="transparency">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            finibus, diam sit amet fringilla eleifend, magna orci maximus dolor,
            nec pulvinar tellus justo sed nisl. Fusce id vulputate diam...
          </p>
          <img
            src={mountain}
            alt="V"
            style={{
              position: "absolute",
              pointerEvents: "none",
              width: "100%",
              top: "100px",
              left: 0,
              transition: "all 1s ease-in-out",
              transform: "translateY(-200px)",
            }}
            className="image-transition"
          />
          <div className="centerImg">
            <img src={centerCube} alt="V" />
          </div>
          <Button url={"https://chipsa.ru/"} name={"Button"} />
        </>
      )}
    </div>
  );
}
