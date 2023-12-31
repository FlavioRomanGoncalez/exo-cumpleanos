import { useEffect, useState } from "react";
import "./App.css";
import Confetti from "react-confetti";

function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const toggleConfetti = () => {
    setShowConfetti(!showConfetti);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // setTimeout(() => {
    //   window.location.pathname = "";
    // }, 5000);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <main>
        <div>
          <h1
            className="animate-charcter"
            style={{
              width: "100%",
              textAlign: "center",
              fontSize: "2.5rem", // Default font size
            }}
          >
            ¡Muy Feliz Cumpleaños!
          </h1>
        </div>
      </main>
      <Confetti
        width={windowDimensions.width}
        height={windowDimensions.height}
        recycle={true}
      />
    </>
  );
}

export default App;
