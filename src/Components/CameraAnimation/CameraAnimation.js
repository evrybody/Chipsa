import { useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import AnimatedModel from "../AnimatedModel/AnimatedModel";

function CameraAnimation() {
  const { camera } = useThree();
  const [scrollIndex, setScrollIndex] = useState(0);

  const cameraPath = [
    { position: [1, 1, 3], target: [3, 0.5, 1] },
    { position: [3.5, 0.5, 0], target: [3, 0.5, 1] },
    { position: [0.3, 0, 0.5], target: [3, 0.5, 1] },
    { position: [4, 3, 5], target: [-10, -15, -15] },
  ];

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      setScrollIndex((prevIndex) =>
        Math.min(prevIndex + 1, cameraPath.length - 1)
      );
    } else {
      setScrollIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  useEffect(() => {
    if (camera && cameraPath[0]) {
      const { position, target } = cameraPath[0];
      camera.position.set(position[0], position[1], position[2]);
      camera.lookAt(target[0], target[1], target[2]);
    }
  }, [camera]);

  useEffect(() => {
    if (camera && cameraPath[scrollIndex]) {
      const cameraData = cameraPath[scrollIndex];
      const { position, target } = cameraData;

      gsap.to(camera.position, {
        x: position[0],
        y: position[1],
        z: position[2],
        duration: 1,
        ease: "power2.inOut",
        onUpdate: () => {
          camera.lookAt(target[0], target[1], target[2]);
        },
      });
    }
  }, [scrollIndex, camera, cameraPath]);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <AnimatedModel
        path="/models/text.glb"
        position={[0, -3, -1]}
        isVisible={scrollIndex === 1}
      />
      <AnimatedModel
        path="/models/try.glb"
        position={[0, -3, -1]}
        isVisible={scrollIndex === 2}
      />
    </>
  );
}

export default CameraAnimation;
