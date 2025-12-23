import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  const mainRef = useRef();
  const imageRef = useRef();

  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);
  const [rotateValue, setRotateValue] = useState(0);

  const xRandom = gsap.utils.random(-500, 500, 100, true);
  const yRandom = gsap.utils.random(-300, 300, 100, true);
  const rotateRandom = gsap.utils.random(-360, 360, 30, true);

  useGSAP(
    () => {
      gsap.to(imageRef.current, {
        x: xValue,
        y: yValue,
        rotate: rotateValue,
        duration: 0.7,
      });
    },
    { scope: mainRef, dependencies: [xValue, yValue, rotateValue] }
  );

  return (
    <main ref={mainRef}>
      <img
        ref={imageRef}
        src="https://images.vexels.com/media/users/3/242241/isolated/preview/409d95bf597e130c6c1b1d2ac3f5dbf5-side-fly-geometric-color-stroke.png"
        alt=""
        onClick={() => {
          const xValue = xRandom();
          const yValue = yRandom();
          const rotateValue = rotateRandom();

          setXValue(xValue);
          setYValue(yValue);
          setRotateValue(rotateValue);

          console.log(xValue);
          console.log(yValue);
          console.log(rotateValue);
        }}
      />
    </main>
  );
};

export default App;
