import React, { useEffect, useRef } from "react";
import { fadeInElement } from "../../utils/gsapUtils";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";

export default function AnimatedModel({ path, position, isVisible }) {
  const { scene } = useGLTF(path);
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.children.forEach((child) => {
        if (child.material) {
          child.material.transparent = true;
          fadeInElement(child.material, isVisible);
        }
      });

      if (isVisible) {
        gsap.fromTo(
          modelRef.current.position,
          { y: -4 },
          {
            y: position[1],
            duration: 1,
            ease: "power2.inOut",
          }
        );
      }
    }
  }, [isVisible, position]);

  return <primitive ref={modelRef} object={scene} position={position} />;
}
